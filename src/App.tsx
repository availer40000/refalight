import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Music from './components/Music'
import About from './components/About'
import Live from './components/Live'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#050816' }}>
      <Navigation />
      <Hero />
      <Marquee />
      <Music />
      <About />
      <Live />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}
