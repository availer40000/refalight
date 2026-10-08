import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

export default function Contact() {
  const sectionRef = useIntersectionObserver()

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

                                                                                                                                                                                                                                      <p className="text-[#94A3B8] font-light leading-[1.9] text-[15px]">
                                                                                                                                                                                                                                                  Refalightへのお問い合わせは、公式SNSなどからお願いいたします。
                                                                                                                                                                                                                                                            </p>
                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                              </section>
                                                                                                                                                                                                                                                                                )
                                                                                                                                                                                                                                                                                }