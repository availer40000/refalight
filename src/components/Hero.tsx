import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animFrameId: number
    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)

    const onResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    type Particle = {
      x: number; y: number; vx: number; vy: number
      size: number; opacity: number; color: string; life: number; maxLife: number
    }

    const particles: Particle[] = []
    const colors = ['#38BDF8', '#7DD3FC', '#BAE6FD', '#D4AF37', '#FFFFFF']

    const spawn = () => {
      const side = Math.floor(Math.random() * 4)
      let x = 0, y = 0
      if (side === 0) { x = Math.random() * w; y = -10 }
      else if (side === 1) { x = w + 10; y = Math.random() * h }
      else if (side === 2) { x = Math.random() * w; y = h + 10 }
      else { x = -10; y = Math.random() * h }

      const cx = w / 2
      const cy = h / 2
      const angle = Math.atan2(cy - y, cx - x) + (Math.random() - 0.5) * 1.2
      const speed = 0.2 + Math.random() * 0.4
      const maxLife = 200 + Math.random() * 300

      particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 0.5 + Math.random() * 1.5,
        opacity: 0,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife,
      })
    }

    for (let i = 0; i < 80; i++) spawn()

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      if (particles.length < 120) spawn()

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.life++

        const progress = p.life / p.maxLife
        if (progress < 0.1) p.opacity = progress * 10
        else if (progress > 0.8) p.opacity = (1 - progress) * 5
        else p.opacity = 1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.opacity * 0.35
        ctx.fill()

        if (p.life >= p.maxLife) {
          particles.splice(i, 1)
          spawn()
        }
      }

      ctx.globalAlpha = 1
      animFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animFrameId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Radial glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          background: 'radial-gradient(ellipse 60% 50% at 50% 55%, rgba(56,189,248,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Top vignette */}
      <div
        className="absolute top-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          zIndex: 2,
          background: 'linear-gradient(to bottom, #050816, transparent)',
        }}
      />

      {/* Bottom vignette */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          zIndex: 2,
          background: 'linear-gradient(to top, #050816, transparent)',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Pre-title */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-[#38BDF8] text-xs font-light tracking-[0.5em] uppercase mb-8">
            Official Artist Website
          </p>
        </div>

        {/* Main title */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1
            className="font-light text-white leading-none tracking-tight mb-4"
            style={{
              fontSize: 'clamp(4rem, 14vw, 11rem)',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 200,
              letterSpacing: '-0.02em',
            }}
          >
            Refa
            <span className="text-shimmer">light</span>
          </h1>
        </div>

        {/* JP subtitle */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p
            className="text-[#475569] text-sm tracking-[0.4em] mb-16"
            style={{ fontFamily: 'Noto Sans JP, sans-serif', fontWeight: 300 }}
          >
           The next chapter starts here. 
          </p>
        </div>

        {/* CTA row */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a
            href="#music"
            className="group flex items-center gap-3 px-8 py-3.5 bg-[#38BDF8] text-[#050816] rounded-full text-sm font-medium tracking-widest uppercase hover:bg-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(56,189,248,0.4)]"
          >
            <span>Latest Release</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#about"
            className="px-8 py-3.5 border border-[rgba(255,255,255,0.15)] text-[#94A3B8] rounded-full text-sm font-light tracking-widest uppercase hover:border-white hover:text-white transition-all duration-300"
          >
            Discover More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-10 transition-all duration-1000 delay-[1400ms] ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[#475569] text-[10px] tracking-[0.4em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#475569] to-transparent animate-pulse" />
        </div>
      </div>

      {/* Decorative horizontal lines */}
      <div className="absolute left-0 right-0 top-1/2 pointer-events-none z-0" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="h-px flex-1 max-w-32 bg-gradient-to-r from-transparent to-[rgba(56,189,248,0.15)]" />
          <div className="h-px flex-1 max-w-32 bg-gradient-to-l from-transparent to-[rgba(56,189,248,0.15)]" />
        </div>
      </div>
    </section>
  )
}
