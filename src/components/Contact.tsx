import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

export default function Contact() {
  const sectionRef = useIntersectionObserver()

  const socialLinks = [
    {
      name: 'X',
      account: '@Refalight_OA',
      url: 'https://x.com/Refalight_OA',
    },
    {
      name: 'Instagram',
      account: '@refalight_official',
      url: 'https://www.instagram.com/refalight_official',
    },
    {
      name: 'TikTok',
      account: '@refalight_official',
      url: 'https://www.tiktok.com/@refalight_official',
    },
  ]

  return (
    <section
      id="contact"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative py-32 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <div className="section-reveal">
          <p className="text-[#38BDF8] text-xs font-light tracking-[0.5em] uppercase mb-4">
            Contact
          </p>

          <h2
            className="text-white font-light mb-8"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontFamily: 'Inter',
              fontWeight: 200,
              letterSpacing: '-0.02em',
            }}
          >
            Get in Touch
          </h2>

          <div className="h-px w-16 bg-[#38BDF8] mb-10" />

          <p className="text-[#94A3B8] font-light leading-[1.9] text-[15px] mb-12">
            Refalightへのお問い合わせは、公式SNSからお願いいたします。
          </p>

          <h3 className="text-white text-xl font-light tracking-wide mb-6">
            Follow Us
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-[#38BDF8]/60 hover:bg-white/[0.03]"
              >
                <p className="text-white text-lg font-light mb-2 group-hover:text-[#38BDF8] transition-colors">
                  {social.name}
                </p>

                <p className="text-[#94A3B8] text-sm font-light break-words">
                  {social.account}
                </p>

                <p className="text-[#38BDF8] text-xs mt-5 tracking-wider">
                  VISIT PROFILE ↗
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}