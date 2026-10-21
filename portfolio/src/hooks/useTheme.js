import { useCallback, useEffect, useState } from 'react'

const readTheme = () =>
  document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'

/**
 * Light / dark theme. The initial value is set by the small script in index.html
 * (saved choice first, then the system preference) so the page never flashes.
 */
export default function useTheme() {
  const [theme, setThemeState] = useState(readTheme)

  const setTheme = useCallback((next) => {
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      /* storage can be blocked (private mode) — the theme still works for this visit */
    }
    setThemeState(next)
  }, [])

  const toggleTheme = useCallback(() => {
    // The hero lamp animation switches the theme itself; ignore taps while it plays.
    if (document.documentElement.dataset.lamp === 'busy') return
    setTheme(readTheme() === 'dark' ? 'light' : 'dark')
  }, [setTheme])

  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0e121a' : '#ffffff')
  }, [theme])

  return { theme, setTheme, toggleTheme }
}
