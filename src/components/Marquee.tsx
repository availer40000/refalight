import { useEffect, useRef } from 'react'

const items = [
  'Aurora Line', '·', 'Hikari no Umi', '·', 'Invisible Sky', '·',
  'Sora no Michi', '·', 'Glass Morning', '·', 'Blue Signal', '·',
  'Horizon Call', '·', 'Tenku no Tobira', '·',
]

export default function Marquee() {
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = innerRef.current
    if (!el) return
    let x = 0
    let raf: number
    const speed = 0.4

    const tick = () => {
      x -= speed
      const totalWidth = el.scrollWidth / 2
      if (Math.abs(x) >= totalWidth) x = 0
      el.style.transform = `translateX(${x}px)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className="relative overflow-hidden py-5 border-y border-[rgba(56,189,248,0.07)]" style={{ background: 'rgba(15,23,42,0.3)' }}>
      {/* Fade masks */}
      <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #050816, transparent)' }} />
      <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #050816, transparent)' }} />

      <div ref={innerRef} className="flex whitespace-nowrap will-change-transform">
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`mx-4 text-xs tracking-[0.35em] uppercase ${
              item === '·' ? 'text-[#38BDF8] opacity-50' : 'text-[#334155]'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
