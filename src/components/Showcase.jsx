import { motion } from 'framer-motion'
import { Code2, Paintbrush, Layers, Sparkles } from 'lucide-react'

const projects = [
  {
    title: 'Motion-first SaaS Website',
    tags: ['Framer Motion', 'Next.js', 'Design System'],
    color: 'from-blue-500 to-cyan-400',
    description: 'High-polish landing with physics-based hero and micro-interactions.'
  },
  {
    title: '3D Interaction Prototype',
    tags: ['Spline', 'React', 'Three.js'],
    color: 'from-violet-500 to-fuchsia-400',
    description: 'Interactive 3D concept exploring playful onboarding moments.'
  },
  {
    title: 'Brand + Product Refresh',
    tags: ['Identity', 'UI Kit', 'Motion Guidelines'],
    color: 'from-emerald-500 to-lime-400',
    description: 'A cohesive design language across web app and marketing.'
  }
]

export default function Showcase() {
  return (
    <section id="work" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Selected Work</h2>
            <p className="mt-2 text-gray-600">A snapshot of projects blending strong design and rich interaction.</p>
          </div>
          <div className="hidden md:flex items-center gap-3 text-gray-600">
            <Code2 className="w-5 h-5" />
            <Paintbrush className="w-5 h-5" />
            <Layers className="w-5 h-5" />
            <Sparkles className="w-5 h-5" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className={`h-40 bg-gradient-to-br ${p.color}`} />
              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-900">{p.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
