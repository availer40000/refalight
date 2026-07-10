const footerLinks = {
  Music: ['Releases', 'Singles', 'Albums', 'EPs', 'Playlists'],
  Artist: ['About', 'Press Kit', 'Photos', 'Videos', 'Interviews'],
  Live: ['Tour Dates', 'Tickets', 'Festival Dates', 'Past Shows'],
  Connect: ['Newsletter', 'Fan Club', 'Instagram', 'X / Twitter', 'YouTube'],
}

export default function Footer() {
  return (
    <footer className="relative border-t border-[rgba(255,255,255,0.05)]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 relative">
                <div className="absolute inset-0 rounded-full border border-[#38BDF8] opacity-50" />
                <div className="absolute inset-[4px] rounded-full bg-[#38BDF8]" />
              </div>
              <span className="text-white font-light tracking-[0.2em] text-sm uppercase">
                Refalight
              </span>
            </div>
            <p className="text-[#475569] text-sm font-light leading-relaxed mb-6 max-w-xs">
              Japanese musician crafting light through sound. Tokyo-based. World-reaching.
            </p>
            <p
              className="text-[#334155] text-sm"
              style={{ fontFamily: 'Noto Sans JP, sans-serif' }}
            >
              れふぁらいと公式
            </p>

            {/* Sony Music badge */}
            <div className="mt-8 flex items-center gap-2">
              <div className="h-px w-8 bg-[rgba(212,175,55,0.3)]" />
              <span className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase opacity-70">
                Sony Music Artists
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-white text-xs font-medium tracking-widest uppercase mb-5">
                {category}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#475569] text-sm font-light hover:text-[#94A3B8] transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(255,255,255,0.04)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#334155] text-xs font-light">
            © 2025 Refalight. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[#334155] text-xs hover:text-[#475569] transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-[#334155] text-xs hover:text-[#475569] transition-colors duration-200">Terms of Use</a>
            <a href="#" className="text-[#334155] text-xs hover:text-[#475569] transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
