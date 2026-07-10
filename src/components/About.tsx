import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

export default function About() {
  const sectionRef = useIntersectionObserver()

  return (
    <section id="about" ref={sectionRef as React.RefObject<HTMLElement>} className="relative py-32 px-6 overflow-hidden">
      {/* Subtle background element */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,248,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-20 items-start">
          {/* Left — portrait */}
          <div className="section-reveal">
            <div className="relative">
              {/* Decorative border frame */}
              <div
                className="absolute -inset-4 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(56,189,248,0.1) 0%, transparent 50%)',
                  borderRadius: '24px',
                }}
              />
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Refalight"
                  className="w-full aspect-[3/4] object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,8,22,0.6)] via-transparent to-transparent" />

                {/* Floating label */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass rounded-xl px-5 py-4">
                    <p
                      className="text-white text-lg font-light tracking-wider"
                      style={{ fontFamily: 'Noto Sans JP, sans-serif' }}
                    >
                      れふぁらいと
                    </p>
                    <p className="text-[#38BDF8] text-xs tracking-[0.3em] uppercase mt-1">Refalight</p>
                  </div>
                </div>
              </div>

              {/* Stat cards */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="glass rounded-xl p-4 text-center">
                  <p className="text-white text-2xl font-light">2019</p>
                  <p className="text-[#475569] text-xs tracking-widest uppercase mt-1">Debut Year</p>
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <p className="text-white text-2xl font-light">32M+</p>
                  <p className="text-[#475569] text-xs tracking-widest uppercase mt-1">Total Plays</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — bio content */}
          <div className="space-y-12">
            <div className="section-reveal stagger-1">
              <p className="text-[#38BDF8] text-xs font-light tracking-[0.5em] uppercase mb-4">
                About the Artist
              </p>
              <h2
                className="text-white font-light mb-8"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'Inter', fontWeight: 200, letterSpacing: '-0.02em' }}
              >
                Light as a<br />musical language
              </h2>
              <div className="h-px w-16 bg-[#38BDF8] mb-8" />
            </div>

            <div className="section-reveal stagger-2 space-y-6">
              <p className="text-[#94A3B8] font-light leading-[1.9] text-[15px]">
                Refalight is a Tokyo-based Japanese musician, composer, and producer known for crafting atmospheric soundscapes that blur the boundary between electronic music and orchestral intimacy.
              </p>
              <p className="text-[#94A3B8] font-light leading-[1.9] text-[15px]">
                Drawing inspiration from the quality of light at different hours of the day — the soft diffusion of dawn, the clinical clarity of noon, the golden weight of dusk — Refalight translates these ephemeral visual sensations into sound.
              </p>
              <p className="text-[#94A3B8] font-light leading-[1.9] text-[15px]">
                With releases under Sony Music Japan and collaborations spanning across continents, Refalight has performed at Fuji Rock Festival, Sónar Tokyo, and sold-out headline tours across Japan, South Korea, and Europe.
              </p>
            </div>

            {/* Tags */}
            <div className="section-reveal stagger-3">
              <div className="flex flex-wrap gap-2">
                {['Electronic', 'Ambient', 'J-Pop', 'Neo-Classical', 'Experimental', 'Cinematic'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs text-[#94A3B8] tracking-wider border border-[rgba(148,163,184,0.15)] rounded-full hover:border-[rgba(56,189,248,0.3)] hover:text-[#38BDF8] transition-all duration-300 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="section-reveal stagger-4">
              <div className="relative pl-6 border-l border-[#38BDF8]">
                <blockquote
                  className="text-[#94A3B8] font-light leading-relaxed italic"
                  style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '1.1rem' }}
                >
                  "Music is how I learn to see. Every track is an attempt to understand the light around me — to make the invisible visible."
                </blockquote>
                <p className="text-[#475569] text-xs tracking-widest uppercase mt-4">— Refalight, NHK World Interview 2024</p>
              </div>
            </div>

            {/* Social links */}
            <div className="section-reveal stagger-5">
              <p className="text-[#475569] text-xs tracking-widest uppercase mb-4">Follow</p>
              <div className="flex gap-4">
                {[
                  { label: 'Instagram', handle: '@refalight' },
                  { label: 'X / Twitter', handle: '@refalight_jp' },
                  { label: 'YouTube', handle: 'Refalight' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className="group flex flex-col gap-0.5"
                  >
                    <span className="text-[#94A3B8] text-xs group-hover:text-white transition-colors duration-200">{social.label}</span>
                    <span className="text-[#38BDF8] text-xs">{social.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
