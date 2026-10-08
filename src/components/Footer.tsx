export default function Footer() {
      return (
          <footer className="relative border-t border-[rgba(255,255,255,0.05)]">
                <div className="max-w-4xl mx-auto px-6 py-16">
                        <div className="flex flex-col items-center text-center">

                                  <div className="flex items-center gap-3 mb-6">
                                              <div className="w-6 h-6 relative">
                                                            <div className="absolute inset-0 rounded-full border border-[#38BDF8] opacity-50" />
                                                                          <div className="absolute inset-[4px] rounded-full bg-[#38BDF8]" />
                                                                                      </div>

                                                                                                  <span className="text-white font-light tracking-[0.2em] text-sm uppercase">
                                                                                                                Refalight
                                                                                                                            </span>
                                                                                                                                      </div>

                                                                                                                                                <p
                                                                                                                                                            className="text-[#475569] text-sm font-light mb-2"
                                                                                                                                                                        style={{ fontFamily: 'Noto Sans JP, sans-serif' }}
                                                                                                                                                                                  >
                                                                                                                                                                                              リファライト公式サイト
                                                                                                                                                                                                        </p>

                                                                                                                                                                                                                  <p className="text-[#334155] text-sm font-light">
                                                                                                                                                                                                                              The next chapter starts here.
                                                                                                                                                                                                                                        </p>

                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                      </div>

                                                                                                                                                                                                                                                            <div className="border-t border-[rgba(255,255,255,0.04)]">
                                                                                                                                                                                                                                                                    <div className="max-w-4xl mx-auto px-6 py-6 text-center">
                                                                                                                                                                                                                                                                              <p className="text-[#334155] text-xs font-light">
                                                                                                                                                                                                                                                                                          © {new Date().getFullYear()} Refalight. All rights reserved.
                                                                                                                                                                                                                                                                                                    </p>
                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                      </footer>
                                                                                                                                                                                                                                                                                                                        )
                                                                                                                                                                                                                                                                                                                        }
