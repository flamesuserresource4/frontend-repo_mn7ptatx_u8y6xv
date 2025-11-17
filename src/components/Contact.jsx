import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    setTimeout(() => setStatus('Thanks! I will get back to you soon.'), 800)
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
        >
          <h2 className="text-3xl font-extrabold text-gray-900">Let’s build something great</h2>
          <p className="mt-2 text-gray-600">Share a bit about your project and I’ll reply within 1–2 days.</p>
          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Name" required />
              <input type="email" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" required />
            </div>
            <input className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Company / Project" />
            <textarea rows={5} className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell me about your goals, timeline, and budget" required />
            <div className="flex items-center gap-4">
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all" type="submit">Send Inquiry</button>
              <span className="text-sm text-gray-600">{status}</span>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
