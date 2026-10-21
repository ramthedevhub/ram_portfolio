import { useEffect } from 'react'
import whenIdle from './whenIdle'

/**
 * The developer in the hero illustration follows your mouse.
 * Frames of the head turning come from one image strip (public/images/head-sheet.webp).
 * It only runs with a mouse, without reduced-motion, and loads after the page is idle.
 */
const SHEET = '/images/head-sheet.webp'
const FW = 234 // frame width
const FH = 320 // frame height
const FRAMES = 53 // frames in the strip
const IDLE = 38 // frame where the head looks straight ahead

const clamp = (v, a, b) => Math.min(b, Math.max(a, v))
const ease = (f) => f * f * (3 - 2 * f)
const shape = (u) => Math.sign(u) * Math.pow(Math.abs(u), 0.8)

// Critically damped spring: glides to the target without overshooting.
function damp(current, target, velocity, time, dt) {
  const w = 2 / time
  const x = w * dt
  const e = 1 / (1 + x + 0.48 * x * x + 0.235 * x * x * x)
  const d = current - target
  const t = (velocity + w * d) * dt
  return [target + (d + t) * e, (velocity - w * t) * e]
}

export default function useHeadTracking({ heroRef, sceneRef, canvasRef }) {
  useEffect(() => {
    const hero = heroRef.current
    const scene = sceneRef.current
    const canvas = canvasRef.current
    if (!hero || !scene || !canvas) return undefined

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const saveData = navigator.connection && navigator.connection.saveData
    if (reduceMotion || !finePointer || saveData) return undefined

    const ctx = canvas.getContext('2d', { alpha: false })
    let cancelled = false
    let sheet = null
    let raf = 0
    let last = 0
    let leaveTimer = 0
    let pos = IDLE
    let vel = 0
    let target = IDLE
    let smoothTime = 0.2
    let lastKey = ''

    function draw() {
      const key = pos.toFixed(3)
      if (!sheet || key === lastKey) return
      lastKey = key
      const i = clamp(Math.floor(pos), 0, FRAMES - 1)
      const next = Math.min(i + 1, FRAMES - 1)
      const f = pos - i
      ctx.globalAlpha = 1
      ctx.drawImage(sheet, i * FW, 0, FW, FH, 0, 0, FW, FH)
      if (next !== i && f > 0.002) {
        ctx.globalAlpha = ease(f)
        ctx.drawImage(sheet, next * FW, 0, FW, FH, 0, 0, FW, FH)
        ctx.globalAlpha = 1
      }
    }

    function tick(now) {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      ;[pos, vel] = damp(pos, target, vel, smoothTime, dt)
      pos = clamp(pos, 0, FRAMES - 1)
      draw()
      if (Math.abs(pos - target) < 0.002 && Math.abs(vel) < 0.002) {
        pos = target
        vel = 0
        draw()
        raf = 0
        return
      }
      raf = requestAnimationFrame(tick)
    }

    function kick() {
      if (raf) return
      last = performance.now()
      raf = requestAnimationFrame(tick)
    }

    function aim(x) {
      const s = scene.getBoundingClientRect()
      const h = hero.getBoundingClientRect()
      const cx = s.left + s.width * 0.578
      const span = Math.max(1, x < cx ? cx - h.left : h.right - cx)
      const u = shape(clamp((x - cx) / span, -1, 1))
      target = u < 0 ? IDLE + u * IDLE : IDLE + u * (FRAMES - 1 - IDLE)
    }

    function reset() {
      pos = IDLE
      target = IDLE
      vel = 0
      lastKey = ''
      draw()
    }

    const isBlocked = (e) =>
      document.documentElement.dataset.lamp === 'busy' ||
      document.documentElement.dataset.theme === 'dark' ||
      (e.target.closest && e.target.closest('.bulb'))

    function onMove(e) {
      if (e.pointerType !== 'mouse') return
      if (isBlocked(e)) {
        if (pos !== IDLE) reset()
        return
      }
      clearTimeout(leaveTimer)
      aim(e.clientX)
      smoothTime = 0.2
      kick()
    }

    function onLeave() {
      clearTimeout(leaveTimer)
      leaveTimer = setTimeout(() => {
        target = IDLE
        smoothTime = 0.85
        kick()
      }, 240)
    }

    const image = new Image()
    const cancelIdle = whenIdle(() => {
      image.src = SHEET
      image
        .decode()
        .then(() => {
          if (cancelled) return
          sheet = image
          draw()
          canvas.classList.add('on')
          hero.addEventListener('pointermove', onMove)
          hero.addEventListener('pointerdown', onMove)
          hero.addEventListener('pointerleave', onLeave)
          scene.addEventListener('headreset', reset)
        })
        .catch(() => {
          /* the still illustration simply stays in place */
        })
    })

    return () => {
      cancelled = true
      cancelIdle()
      cancelAnimationFrame(raf)
      clearTimeout(leaveTimer)
      hero.removeEventListener('pointermove', onMove)
      hero.removeEventListener('pointerdown', onMove)
      hero.removeEventListener('pointerleave', onLeave)
      scene.removeEventListener('headreset', reset)
      canvas.classList.remove('on')
    }
  }, [heroRef, sceneRef, canvasRef])
}
