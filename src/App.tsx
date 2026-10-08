import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Music from './components/Music'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#050816' }}>
      <Navigation />
      <Hero />
      <Music />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
