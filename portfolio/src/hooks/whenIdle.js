// Runs `fn` when the browser is idle (or after a short delay as a fallback).
// Returns a function that cancels the scheduled call.
export default function whenIdle(fn, timeout = 2500) {
  if ('requestIdleCallback' in window) {
    const id = window.requestIdleCallback(fn, { timeout })
    return () => window.cancelIdleCallback(id)
  }
  const id = window.setTimeout(fn, 800)
  return () => window.clearTimeout(id)
}
