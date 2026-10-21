import { useEffect, useState } from 'react'

/** True while the referenced element is on screen. */
export default function useInView(ref, threshold = 0.1) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return undefined
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold })
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, threshold])

  return inView
}
