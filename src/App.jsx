import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-gradient-to-b from-white via-slate-50 to-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
