import { useState } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const photos = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Live performance — Tokyo',
    label: 'Live · Tokyo 2024',
    span: 'col-span-2 row-span-2',
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Studio session',
    label: 'Studio · 2024',
    span: '',
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Backstage',
    label: 'Backstage',
    span: '',
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/2111015/pexels-photo-2111015.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Live concert crowd',
    label: 'Fuji Rock 2024',
    span: '',
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Stage lighting',
    label: 'Sónar Tokyo 2024',
    span: '',
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Portrait',
    label: 'Press · 2025',
    span: 'col-span-2',
  },
]

export default function Gallery() {
  const sectionRef = useIntersectionObserver()
  const [lightbox, setLightbox] = useState<null | typeof photos[0]>(null)

  return (
    <section id="gallery" ref={sectionRef as React.RefObject<HTMLElement>} className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="section-reveal mb-16">
          <p className="text-[#38BDF8] text-xs font-light tracking-[0.5em] uppercase mb-4">
            Visual
          </p>
          <div className="flex items-end justify-between flex-wrap gap-6">
            <h2
              className="text-white font-light"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: 'Inter', fontWeight: 200, letterSpacing: '-0.02em' }}
            >
              Gallery
            </h2>
            <a
              href="#"
              className="text-[#94A3B8] text-sm font-light tracking-widest uppercase border-b border-[rgba(148,163,184,0.3)] pb-0.5 hover:text-white hover:border-white transition-all duration-300"
            >
              View All Photos
            </a>
          </div>
          <div className="mt-6 h-px bg-gradient-to-r from-[rgba(56,189,248,0.3)] via-[rgba(56,189,248,0.1)] to-transparent" />
        </div>

        {/* Masonry-style grid */}
        <div className="section-reveal stagger-1 grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[220px]">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className={`relative group rounded-xl overflow-hidden cursor-pointer ${photo.span}`}
              onClick={() => setLightbox(photo)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,8,22,0.7)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span className="text-white text-xs tracking-wider">{photo.label}</span>
              </div>
              {/* Expand icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 glass rounded-full flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="1.5">
                    <path d="M7.5 1.5h3v3M4.5 10.5h-3v-3M10.5 1.5l-4 4M1.5 10.5l4-4" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(5, 8, 22, 0.95)', backdropFilter: 'blur(20px)' }}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-4xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="w-full h-full object-contain rounded-xl"
            />
            <p className="absolute bottom-4 left-4 text-white text-xs tracking-wider glass px-3 py-1.5 rounded-full">
              {lightbox.label}
            </p>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-9 h-9 glass rounded-full flex items-center justify-center text-white hover:text-[#38BDF8] transition-colors duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M1 1l12 12M13 1L1 13" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
