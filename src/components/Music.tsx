import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const releases = [
  {
    id: 1,
    title: 'Aurora Line',
    type: 'Single',
    year: '2025',
    image: 'https://images.pexels.com/photos/1341279/pexels-photo-1341279.jpeg?auto=compress&cs=tinysrgb&w=600',
    streams: '2.4M',
    isNew: true,
    color: '#38BDF8',
  },
  {
    id: 2,
    title: 'Hikari no Umi',
    type: 'EP',
    year: '2024',
    image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600',
    streams: '8.1M',
    isNew: false,
    color: '#7DD3FC',
  },
  {
    id: 3,
    title: 'Invisible Sky',
    type: 'Album',
    year: '2023',
    image: 'https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg?auto=compress&cs=tinysrgb&w=600',
    streams: '21.6M',
    isNew: false,
    color: '#BAE6FD',
  },
  {
    id: 4,
    title: 'Sora no Michi',
    type: 'Single',
    year: '2023',
    image: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=600',
    streams: '5.2M',
    isNew: false,
    color: '#38BDF8',
  },
]

const featuredTracks = [
  { title: 'Aurora Line', duration: '3:47', plays: '2.4M' },
  { title: 'Blue Signal', duration: '4:12', plays: '1.9M' },
  { title: 'Horizon Call', duration: '3:58', plays: '1.2M' },
  { title: 'Tenku no Tobira', duration: '5:03', plays: '987K' },
  { title: 'Glass Morning', duration: '3:34', plays: '834K' },
]

export default function Music() {
  const sectionRef = useIntersectionObserver()

  return (
    <section id="music" ref={sectionRef as React.RefObject<HTMLElement>} className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="section-reveal mb-20">
          <p className="text-[#38BDF8] text-xs font-light tracking-[0.5em] uppercase mb-4">
            Discography
          </p>
          <div className="flex items-end justify-between flex-wrap gap-6">
            <h2
              className="text-white font-light"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: 'Inter', fontWeight: 200, letterSpacing: '-0.02em' }}
            >
              Music
            </h2>
            <a
              href="#"
              className="text-[#94A3B8] text-sm font-light tracking-widest uppercase border-b border-[rgba(148,163,184,0.3)] pb-0.5 hover:text-white hover:border-white transition-all duration-300"
            >
              View All Releases
            </a>
          </div>
          <div className="mt-6 h-px bg-gradient-to-r from-[rgba(56,189,248,0.3)] via-[rgba(56,189,248,0.1)] to-transparent" />
        </div>

        {/* Latest release — featured */}
        <div className="section-reveal stagger-1 mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Album art */}
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[rgba(56,189,248,0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <img
                  src={releases[0].image}
                  alt={releases[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,8,22,0.7)] via-transparent to-transparent" />

                {/* New badge */}
                <div className="absolute top-5 left-5">
                  <span className="px-3 py-1 text-[10px] font-medium tracking-widest uppercase bg-[#38BDF8] text-[#050816] rounded-full">
                    New Release
                  </span>
                </div>

                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full glass flex items-center justify-center animate-pulse-glow cursor-pointer">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                      <path d="M6 4l12 6-12 6V4z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Track details */}
            <div className="space-y-8">
              <div>
                <p className="text-[#38BDF8] text-xs tracking-[0.4em] uppercase mb-3">
                  {releases[0].type} · {releases[0].year}
                </p>
                <h3
                  className="text-white font-light mb-4"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'Inter', fontWeight: 200, letterSpacing: '-0.02em' }}
                >
                  {releases[0].title}
                </h3>
                <p className="text-[#94A3B8] font-light leading-relaxed">
                  A sonic journey through shifting skies and open horizons. Aurora Line captures the liminal space between night and dawn — Refalight at their most expansive.
                </p>
              </div>

              {/* Streaming stats */}
              <div className="flex items-center gap-6 py-6 border-t border-b border-[rgba(56,189,248,0.1)]">
                <div>
                  <p className="text-white text-2xl font-light">{releases[0].streams}</p>
                  <p className="text-[#475569] text-xs tracking-wider uppercase mt-1">Streams</p>
                </div>
                <div className="w-px h-10 bg-[rgba(56,189,248,0.15)]" />
                <div>
                  <p className="text-white text-2xl font-light">1</p>
                  <p className="text-[#475569] text-xs tracking-wider uppercase mt-1">Chart Peak</p>
                </div>
                <div className="w-px h-10 bg-[rgba(56,189,248,0.15)]" />
                <div>
                  <p className="text-white text-2xl font-light">5</p>
                  <p className="text-[#475569] text-xs tracking-wider uppercase mt-1">Tracks</p>
                </div>
              </div>

              {/* Streaming platforms */}
              <div>
                <p className="text-[#475569] text-xs tracking-widest uppercase mb-4">Available On</p>
                <div className="flex flex-wrap gap-3">
                  {['Spotify', 'Apple Music', 'YouTube Music', 'Amazon Music'].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="px-4 py-2 glass-light rounded-full text-xs text-[#94A3B8] tracking-wider hover:text-white hover:border-[rgba(56,189,248,0.3)] transition-all duration-300"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Track list */}
        <div className="section-reveal stagger-2 mb-24">
          <h3 className="text-[#475569] text-xs tracking-[0.4em] uppercase mb-6">Featured Tracks</h3>
          <div className="space-y-1">
            {featuredTracks.map((track, i) => (
              <div
                key={track.title}
                className="group flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-[rgba(56,189,248,0.04)] transition-all duration-200 cursor-pointer"
              >
                <span className="text-[#475569] text-sm w-6 text-right group-hover:hidden">{i + 1}</span>
                <div className="hidden group-hover:flex w-6 items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="#38BDF8">
                    <path d="M3 2l8 4-8 4V2z" />
                  </svg>
                </div>
                <span className="flex-1 text-[#94A3B8] text-sm font-light group-hover:text-white transition-colors duration-200">
                  {track.title}
                </span>
                <span className="text-[#475569] text-xs">{track.plays}</span>
                <span className="text-[#475569] text-xs w-10 text-right">{track.duration}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Discography grid */}
        <div className="section-reveal stagger-3">
          <h3 className="text-[#475569] text-xs tracking-[0.4em] uppercase mb-8">All Releases</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {releases.map((release, i) => (
              <div
                key={release.id}
                className="group cursor-pointer"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="relative rounded-xl overflow-hidden aspect-square mb-4">
                  <img
                    src={release.image}
                    alt={release.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,8,22,0.8)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
                        <path d="M4 2.5l8 4.5-8 4.5V2.5z" />
                      </svg>
                    </div>
                  </div>
                  {release.isNew && (
                    <div className="absolute top-3 left-3">
                      <div className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
                    </div>
                  )}
                </div>
                <p className="text-white text-sm font-light group-hover:text-[#38BDF8] transition-colors duration-200">
                  {release.title}
                </p>
                <p className="text-[#475569] text-xs mt-1">{release.type} · {release.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
