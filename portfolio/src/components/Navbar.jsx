import { useEffect, useRef, useState } from 'react'
import { navLinks, profile } from '../data/portfolioData'
import useActiveSection from '../hooks/useActiveSection'
import Icon from './Icon'
import './Navbar.css'

// Sections watched for the "current page" highlight (defined once so the list stays stable)
const SECTION_IDS = ['home', ...navLinks.map((link) => link.id), 'contact']

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const progressRef = useRef(null)
  const active = useActiveSection(SECTION_IDS)

  // Scroll progress bar + header background once the page has moved
  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const ratio = max > 0 ? Math.min(1, window.scrollY / max) : 0
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${ratio})`
      setScrolled(window.scrollY > 8)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  // Mobile menu: close with Escape, and when the window grows to desktop width
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const query = window.matchMedia('(min-width: 961px)')
    const onChange = () => {
      if (query.matches) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    query.addEventListener('change', onChange)
    return () => {
      document.removeEventListener('keydown', onKey)
      query.removeEventListener('change', onChange)
    }
  }, [open])

  const closeMenu = () => setOpen(false)
  const isDark = theme === 'dark'

  return (
    <header className={`navbar${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="container nav-inner">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            {profile.initials}
          </span>
          <span className="brand-name">{profile.shortName}</span>
        </a>

        <nav className="nav-menu" id="site-menu" aria-label="Primary">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  className="nav-link"
                  href={`#${link.id}`}
                  aria-current={active === link.id ? 'true' : undefined}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn-primary btn-sm nav-cta" href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <Icon name={isDark ? 'sun' : 'moon'} />
          </button>
          <button
            type="button"
            className="icon-btn nav-toggle"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
      <div className="progress" ref={progressRef} aria-hidden="true" />
    </header>
  )
}
