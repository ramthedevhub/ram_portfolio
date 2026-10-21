/**
 * Small inline SVG icon set (no icon library needed).
 * Usage: <Icon name="github" size={20} />
 */
const SHAPES = {
  'arrow-right': <path d="M5 12h14M13 6l6 6-6 6" />,
  'arrow-up-right': <path d="M7 17L17 7M8 7h9v9" />,
  'arrow-up': <path d="M12 19V5M6 11l6-6 6 6" />,
  'chevron-down': <path d="M6 9l6 6 6-6" />,
  download: <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />,
  file: (
    <>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v4h4M10 13h5M10 17h5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  pin: (
    <>
      <path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  github: (
    <path d="M9 19c-4 1.5-4-2-6-2m12 4v-3.5a3 3 0 0 0-1-2.5c3 0 6-1.5 6-6a4.5 4.5 0 0 0-1.2-3 4 4 0 0 0-.1-3s-1 0-3 1.3a10 10 0 0 0-5.4 0C8.2 3 7.200 3 7.200 3a4 4 0 0 0-.1 3A4.500 4.500 0 0 0 6 9c0 4.500 3 6 6 6a3 3 0 0 0-1 2.500V21" />
  ),
  linkedin: <path d="M5 9v10M5 5v.01M10 19V9m0 4c0-2 1.5-4 4-4s3 1.5 3 4v6" />,
  send: (
    <>
      <path d="M21 3 3 10l7 3 3 7z" />
      <path d="m21 3-11 10" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  moon: <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  code: <path d="M8.5 7L3.500 12l5 5M15.500 7l5 5-5 5" />,
  browser: (
    <>
      <rect x="3" y="4" width="18" height="15" rx="2" />
      <path d="M3 9h18M6.500 6.500h.01M9 6.500h.01" />
      <path d="M9.800 12.500L8 14.200l1.800 1.700M14.200 12.500l1.800 1.700-1.800 1.700" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="3.500" width="18" height="7" rx="1.800" />
      <rect x="3" y="13.500" width="18" height="7" rx="1.800" />
      <path d="M7 7h.01M7 17h.01M12 7h5M12 17h5" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5.500" rx="7.500" ry="3" />
      <path d="M4.500 5.500v13c0 1.700 3.400 3 7.500 3s7.500-1.300 7.500-3v-13" />
      <path d="M4.500 12c0 1.700 3.400 3 7.500 3s7.500-1.300 7.500-3" />
    </>
  ),
  cloud: <path d="M7 18.500a4.500 4.500 0 0 1-.600-8.960A6 6 0 0 1 18 9.500a4.500 4.500 0 0 1-.500 9z" />,
  shield: (
    <>
      <path d="M12 3l8 3v6c0 4.500-3.200 7.800-8 9-4.800-1.200-8-4.500-8-9V6z" />
      <rect x="9" y="11" width="6" height="5" rx="1" />
      <path d="M10.200 11V9.600a1.800 1.800 0 0 1 3.600 0V11" />
    </>
  ),
  cap: (
    <>
      <path d="M12 3l9 4.500-9 4.500-9-4.500z" />
      <path d="M7 10.500V15c0 1.400 2.200 2.500 5 2.500s5-1.100 5-2.500v-4.500M21 7.500V13" />
    </>
  ),
  chip: (
    <>
      <rect x="6.500" y="6.500" width="11" height="11" rx="2" />
      <path d="M9.500 3v3.500M14.500 3v3.500M9.500 17.500V21M14.500 17.500V21M3 9.500h3.500M3 14.500h3.500M17.500 9.500H21M17.500 14.500H21" />
    </>
  ),
  book: <path d="M12 6.500C9.500 4.800 6 4.500 3 5v13c3-.5 6.500-.2 9 1.500 2.500-1.700 6-2 9-1.500V5c-3-.5-6.500-.2-9 1.500zM12 6.500v13" />,
}

export default function Icon({ name, size = 20, className = '' }) {
  const shape = SHAPES[name]
  if (!shape) return null
  return (
    <svg
      className={`icon ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {shape}
    </svg>
  )
}
