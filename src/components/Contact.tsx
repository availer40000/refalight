import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

export default function Contact() {
  const sectionRef = useIntersectionObserver()

  return (
    <section id="contact" ref={sectionRef as React.RefObject<HTMLElement>} className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-[rgba(56,189,248,0.2)] to-transparent mb-20" />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="section-reveal">
            <p className="text-[#38BDF8] text-xs font-light tracking-[0.5em] uppercase mb-4">
              Get in Touch
            </p>
            <h2
              className="text-white font-light mb-8"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'Inter', fontWeight: 200, letterSpacing: '-0.02em' }}
            >
              Contact
            </h2>
            <div className="h-px w-16 bg-[#38BDF8] mb-10" />

            <div className="space-y-8">
              <div>
                <p className="text-[#475569] text-xs tracking-widest uppercase mb-2">Booking & Live</p>
                <a href="mailto:booking@refalight.jp" className="text-[#94A3B8] text-sm hover:text-white transition-colors duration-200">
                  booking@refalight.jp
                </a>
              </div>
              <div>
                <p className="text-[#475569] text-xs tracking-widest uppercase mb-2">Press & Media</p>
                <a href="mailto:press@refalight.jp" className="text-[#94A3B8] text-sm hover:text-white transition-colors duration-200">
                  press@refalight.jp
                </a>
              </div>
              <div>
                <p className="text-[#475569] text-xs tracking-widest uppercase mb-2">General Inquiries</p>
                <a href="mailto:info@refalight.jp" className="text-[#94A3B8] text-sm hover:text-white transition-colors duration-200">
                  info@refalight.jp
                </a>
              </div>
              <div>
                <p className="text-[#475569] text-xs tracking-widest uppercase mb-3">Management</p>
                <p className="text-[#94A3B8] text-sm font-light">Sony Music Artists Inc.</p>
                <p className="text-[#475569] text-xs mt-1">Tokyo, Japan</p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="section-reveal stagger-2">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[#475569] text-xs tracking-widest uppercase block mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3 text-sm text-white placeholder-[#334155] focus:outline-none focus:border-[rgba(56,189,248,0.4)] transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="text-[#475569] text-xs tracking-widest uppercase block mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3 text-sm text-white placeholder-[#334155] focus:outline-none focus:border-[rgba(56,189,248,0.4)] transition-colors duration-200"
                  />
                </div>
              </div>
              <div>
                <label className="text-[#475569] text-xs tracking-widest uppercase block mb-2">Subject</label>
                <select className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3 text-sm text-[#94A3B8] focus:outline-none focus:border-[rgba(56,189,248,0.4)] transition-colors duration-200 appearance-none cursor-pointer">
                  <option value="" className="bg-[#0F172A]">Select a subject</option>
                  <option value="booking" className="bg-[#0F172A]">Booking Request</option>
                  <option value="press" className="bg-[#0F172A]">Press / Media</option>
                  <option value="collaboration" className="bg-[#0F172A]">Collaboration</option>
                  <option value="fan" className="bg-[#0F172A]">Fan Message</option>
                </select>
              </div>
              <div>
                <label className="text-[#475569] text-xs tracking-widest uppercase block mb-2">Message</label>
                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3 text-sm text-white placeholder-[#334155] focus:outline-none focus:border-[rgba(56,189,248,0.4)] transition-colors duration-200 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-[rgba(56,189,248,0.1)] border border-[rgba(56,189,248,0.3)] text-[#38BDF8] rounded-xl text-sm font-medium tracking-widest uppercase hover:bg-[#38BDF8] hover:text-[#050816] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
