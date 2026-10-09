import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

export default function About() {
  const sectionRef = useIntersectionObserver()

  return (
    <section
      id="about"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Subtle background element */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(56,189,248,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="section-reveal mb-12">
            <p className="text-[#38BDF8] text-xs font-light tracking-[0.5em] uppercase mb-4">
              About the Artist
            </p>

            <h2
              className="text-white font-light mb-8"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 200,
                letterSpacing: '-0.02em',
              }}
            >
              About Refalight
            </h2>

            <div className="h-px w-16 bg-[#38BDF8] mb-8" />
          </div>

          {/* Artist profile */}
          <div className="section-reveal stagger-1 space-y-6">
            <p
              className="text-[#94A3B8] font-light leading-[1.9] text-[15px]"
              style={{ fontFamily: 'Noto Sans JP, sans-serif' }}
            >
              Refalight（リファライト）は、日本の音楽アーティスト。
            </p>

            <p
              className="text-white font-light leading-[1.9] text-[15px]"
              style={{ fontFamily: 'Noto Sans JP, sans-serif' }}
            >
              2026年、Refalight始動。
            </p>

            <p
              className="text-[#94A3B8] font-light leading-[1.9] text-[15px]"
              style={{ fontFamily: 'Noto Sans JP, sans-serif' }}
            >
              日々の中で感じる光や感情を音楽に変え、新しい景色を描いていく。
            </p>
          </div>

          {/* Tagline */}
          <div className="section-reveal stagger-2 mt-12">
            <p
              className="text-[#94A3B8] font-light italic"
              style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontSize: '1.1rem',
              }}
            >
              The next chapter starts here.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}