import { useCallback, useEffect, useRef } from 'react'
import whenIdle from './whenIdle'

/**
 * The pull-cord lamp in the hero. Clicking it plays a short animation and switches the theme.
 * Two image strips hold the frames (public/images):
 *   lamp-pull.webp — the lights going out (played backwards to turn them on again)
 *   lamp-loop.webp — the developer typing in the dark
 * They load when the browser is idle. If they fail to load (or the visitor prefers reduced
 * motion) the theme simply switches without the animation.
 */
const FW = 350
const FH = 540
const PULL_FRAMES = 29
const LOOP_FRAMES = 25
const PULL_SECONDS = 56 / 24 // the original clip: 57 frames at 24 fps
const FLIP_AT = 22 / 56 // point in the clip where the lamp actually switches

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
const isDark = () => document.documentElement.dataset.theme === 'dark'

let clipsPromise = null
function loadClips() {
  if (!clipsPromise) {
    const load = (src) =>
      new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => (img.decode ? img.decode().then(() => resolve(img), () => resolve(img)) : resolve(img))
        img.onerror = reject
        img.src = src
      })
    clipsPromise = Promise.all([load('/images/lamp-pull.webp'), load('/images/lamp-loop.webp')])
      .then(([pull, loop]) => ({ pull, loop }))
      .catch(() => {
        clipsPromise = null
        return null
      })
  }
  return clipsPromise
}

// Draws a (possibly fractional) frame, cross-fading into the next one for smooth playback.
function drawFrame(ctx, image, count, position) {
  const i = Math.min(Math.floor(position), count - 1)
  const next = Math.min(i + 1, count - 1)
  const f = position - i
  ctx.globalAlpha = 1
  ctx.drawImage(image, i * FW, 0, FW, FH, 0, 0, FW, FH)
  if (next !== i && f > 0.01) {
    ctx.globalAlpha = f
    ctx.drawImage(image, next * FW, 0, FW, FH, 0, 0, FW, FH)
    ctx.globalAlpha = 1
  }
}

export default function useLamp({ sceneRef, fxRef, theme, setTheme }) {
  const state = useRef({ busy: false, raf: 0, loopRaf: 0, visible: true })

  const stopLoop = useCallback(() => {
    cancelAnimationFrame(state.current.loopRaf)
    state.current.loopRaf = 0
  }, [])

  const startLoop = useCallback(
    (clips) => {
      const canvas = fxRef.current
      if (!canvas) return
      stopLoop()
      const ctx = canvas.getContext('2d', { alpha: false })
      const period = 2 * (LOOP_FRAMES - 1)
      const t0 = performance.now()
      const step = (now) => {
        if (!state.current.visible) {
          state.current.loopRaf = 0
          return
        }
        const m = (((now - t0) / 1000) * 12) % period
        drawFrame(ctx, clips.loop, LOOP_FRAMES, m < LOOP_FRAMES - 1 ? m : period - m)
        state.current.loopRaf = requestAnimationFrame(step)
      }
      state.current.loopRaf = requestAnimationFrame(step)
    },
    [fxRef, stopLoop],
  )

  // Keeps the canvas in step with the current theme (typing loop in dark mode, hidden in light).
  const sync = useCallback(async () => {
    const canvas = fxRef.current
    if (!canvas || state.current.busy) return
    stopLoop()
    if (!isDark()) {
      canvas.classList.remove('on')
      return
    }
    if (prefersReducedMotion() || !state.current.visible) return
    const clips = await loadClips()
    if (!clips || state.current.busy || !fxRef.current || !isDark()) return
    canvas.classList.add('on')
    startLoop(clips)
  }, [fxRef, startLoop, stopLoop])

  const toggle = useCallback(async () => {
    const s = state.current
    if (s.busy) return
    const goDark = !isDark()
    const next = goDark ? 'dark' : 'light'
    const canvas = fxRef.current
    const scene = sceneRef.current

    if (!canvas || !scene || prefersReducedMotion()) {
      setTheme(next)
      return
    }
    const timeout = new Promise((resolve) => setTimeout(() => resolve(null), 2500))
    const clips = await Promise.race([loadClips(), timeout])
    if (!clips) {
      setTheme(next)
      return
    }
    if (s.busy) return

    s.busy = true
    document.documentElement.dataset.lamp = 'busy'
    scene.dispatchEvent(new Event('headreset'))
    stopLoop()

    const ctx = canvas.getContext('2d', { alpha: false })
    drawFrame(ctx, clips.pull, PULL_FRAMES, goDark ? 0 : PULL_FRAMES - 1)
    const wasVisible = canvas.classList.contains('on')
    canvas.classList.add('on')
    if (!wasVisible) await new Promise((resolve) => setTimeout(resolve, 380)) // let the canvas fade in first

    let flipped = false
    const t0 = performance.now()
    await new Promise((resolve) => {
      const step = (now) => {
        const t = Math.min(1, (now - t0) / 1000 / PULL_SECONDS)
        const p = goDark ? t : 1 - t
        drawFrame(ctx, clips.pull, PULL_FRAMES, p * (PULL_FRAMES - 1))
        if (!flipped && (goDark ? p >= FLIP_AT : p <= FLIP_AT)) {
          flipped = true
          setTheme(next)
        }
        if (t >= 1) {
          resolve()
          return
        }
        s.raf = requestAnimationFrame(step)
      }
      s.raf = requestAnimationFrame(step)
    })

    if (!flipped) setTheme(next)
    s.busy = false
    delete document.documentElement.dataset.lamp
    if (goDark) startLoop(clips)
    else canvas.classList.remove('on')
  }, [fxRef, sceneRef, setTheme, startLoop, stopLoop])

  // Follow theme changes made elsewhere (navbar toggle, saved theme on load)
  useEffect(() => {
    sync()
  }, [theme, sync])

  // Fetch the animation frames when idle so the first click feels instant,
  // and pause the typing loop while the hero is off screen.
  useEffect(() => {
    const s = state.current
    const saveData = navigator.connection && navigator.connection.saveData
    const cancelIdle = !prefersReducedMotion() && !saveData ? whenIdle(loadClips) : () => {}

    let observer
    const scene = sceneRef.current
    if (scene && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(([entry]) => {
        s.visible = entry.isIntersecting
        if (entry.isIntersecting) sync()
        else stopLoop()
      })
      observer.observe(scene)
    }

    return () => {
      cancelIdle()
      if (observer) observer.disconnect()
      cancelAnimationFrame(s.raf)
      stopLoop()
      delete document.documentElement.dataset.lamp
      s.busy = false
    }
  }, [sceneRef, sync, stopLoop])

  const preload = useCallback(() => {
    if (!prefersReducedMotion()) loadClips()
  }, [])

  return { toggle, preload }
}
