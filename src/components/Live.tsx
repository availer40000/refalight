import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const tours = [
  {
    id: 1,
    date: 'Aug 15',
    year: '2025',
    venue: 'Zepp Shinjuku',
    city: 'Tokyo, Japan',
    status: 'on-sale',
    label: 'Headline',
  },
  {
    id: 2,
    date: 'Aug 22',
    year: '2025',
    venue: 'Namba Hatch',
    city: 'Osaka, Japan',
    status: 'on-sale',
    label: 'Headline',
  },
  {
    id: 3,
    date: 'Sep 5',
    year: '2025',
    venue: 'Zepp Nagoya',
    city: 'Nagoya, Japan',
    status: 'on-sale',
    label: 'Headline',
  },
  {
    id: 4,
    date: 'Sep 20',
    year: '2025',
    venue: 'YES24 Live Hall',
    city: 'Seoul, South Korea',
    status: 'on-sale',
    label: 'International',
  },
  {
    id: 5,
    date: 'Oct 3',
    year: '2025',
    venue: 'Sónar Tokyo',
    city: 'Tokyo, Japan',
    status: 'on-sale',
    label: 'Festival',
  },
  {
    id: 6,
    date: 'Oct 18',
    year: '2025',
    venue: 'Fabric',
    city: 'London, UK',
    status: 'coming-soon',
    label: 'International',
  },
  {
    id: 7,
    date: 'Oct 25',
    year: '2025',
    venue: 'Berghain',
    city: 'Berlin, Germany',
    status: 'coming-soon',
    label: 'International',
  },
  {
    id: 8,
    date: 'Nov 8',
    year: '2025',
    venue: 'Budokan',
    city: 'Tokyo, Japan',
    status: 'coming-soon',
    label: 'Special',
  },
]

const labelColors: Record<string, string> = {
  Headline: 'text-[#38BDF8] border-[rgba(56,189,248,0.3)]',
  International: 'text-[#94A3B8] border-[rgba(148,163,184,0.2)]',
  Festival: 'text-[#D4AF37] border-[rgba(212,175,55,0.3)]',
  Special: 'text-[#38BDF8] border-[rgba(56,189,248,0.5)]',
}

export default function Live() {
  const sectionRef = useIntersectionObserver()

  return (
    <section id="live" ref={sectionRef as React.RefObject<HTMLElement>} className="relative py-32 px-6">
      {/* Divider line top */}
      <div className="max-w-7xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-[rgba(56,189,248,0.2)] to-transparent mb-20" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="section-reveal mb-16 flex items-end justify-between flex-wrap gap-6">
          <div>
            <p className="text-[#38BDF8] text-xs font-light tracking-[0.5em] uppercase mb-4">Tour Dates</p>
            <h2
              className="text-white font-light"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: 'Inter', fontWeight: 200, letterSpacing: '-0.02em' }}
            >
              Live
            </h2>
          </div>
          <p className="text-[#475569] text-sm font-light max-w-xs">
            Experience Refalight in concert — an immersive light and sound performance unlike any other.
          </p>
        </div>

        {/* Tour list */}
        <div className="space-y-1">
          {tours.map((show, i) => (
            <div
              key={show.id}
              className="section-reveal"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="group flex items-center gap-4 md:gap-8 px-0 py-5 border-b border-[rgba(255,255,255,0.05)] hover:border-[rgba(56,189,248,0.15)] transition-all duration-300 cursor-pointer">
                {/* Date */}
                <div className="min-w-[64px]">
                  <p className="text-white text-sm font-light">{show.date}</p>
                  <p className="text-[#475569] text-xs">{show.year}</p>
                </div>

                {/* Venue */}
                <div className="flex-1 min-w-0">
                  <p className="text-[#94A3B8] text-sm font-light group-hover:text-white transition-colors duration-200 truncate">
                    {show.venue}
                  </p>
                  <p className="text-[#475569] text-xs mt-0.5">{show.city}</p>
                </div>

                {/* Label badge */}
                <span
                  className={`hidden sm:inline-flex px-3 py-1 text-[10px] tracking-widest uppercase border rounded-full ${labelColors[show.label]}`}
                >
                  {show.label}
                </span>

                {/* CTA */}
                <div className="min-w-[100px] flex justify-end">
                  {show.status === 'on-sale' ? (
                    <a
                      href="#"
                      className="px-4 py-2 text-xs font-medium tracking-widest uppercase bg-transparent border border-[rgba(56,189,248,0.4)] text-[#38BDF8] rounded-full group-hover:bg-[#38BDF8] group-hover:text-[#050816] transition-all duration-300"
                    >
                      Tickets
                    </a>
                  ) : (
                    <span className="px-4 py-2 text-xs tracking-widest uppercase text-[#475569] border border-[rgba(71,85,105,0.3)] rounded-full">
                      Soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="section-reveal mt-20">
          <div className="glass rounded-2xl p-8 md:p-12 text-center">
            <p className="text-[#38BDF8] text-xs tracking-[0.4em] uppercase mb-4">Never Miss a Show</p>
            <h3
              className="text-white font-light mb-3"
              style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontFamily: 'Inter', fontWeight: 200 }}
            >
              Stay connected
            </h3>
            <p className="text-[#94A3B8] text-sm font-light mb-8 max-w-md mx-auto">
              Get early access to tickets, exclusive content, and direct messages from Refalight.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-full px-5 py-3 text-sm text-white placeholder-[#475569] focus:outline-none focus:border-[rgba(56,189,248,0.4)] transition-colors duration-200"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#38BDF8] text-[#050816] rounded-full text-sm font-medium tracking-widest uppercase hover:bg-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.3)] whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
