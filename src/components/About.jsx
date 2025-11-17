import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
        >
          <h2 className="text-3xl font-extrabold text-gray-900">About</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            I'm a designer-engineer focused on crafting premium digital experiences with a motion-first mindset. I partner with startups and product teams to elevate brand, product, and perception through thoughtful design systems, crisp UI, and playful interactions that feel alive.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-gray-200 p-4">
              <p className="text-sm text-gray-500">Expertise</p>
              <p className="font-semibold text-gray-900">UI/UX, Motion, Frontend</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-4">
              <p className="text-sm text-gray-500">Stack</p>
              <p className="font-semibold text-gray-900">React, Framer Motion, Spline</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-4">
              <p className="text-sm text-gray-500">Availability</p>
              <p className="font-semibold text-gray-900">Open for select projects</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
