import { useEffect, useRef } from 'react'

export function useIntersectionObserver(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold }
    )

    const children = el.querySelectorAll('.section-reveal')
    children.forEach((child) => observer.observe(child))
    if (el.classList.contains('section-reveal')) observer.observe(el)

    return () => observer.disconnect()
  }, [threshold])

  return ref
}
