import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mb-4">
            Interactive • Tech • Playful • Modern
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-gray-900">
            Designer & Frontend Engineer crafting delightful, animated experiences
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            I blend motion, code, and brand to build immersive products. Scroll to explore selected work, process, and ways to collaborate.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gray-900 text-white font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-gray-900 font-semibold border border-gray-300 hover:border-gray-900 transition-colors">
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
