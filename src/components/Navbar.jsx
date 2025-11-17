import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-white/60 shadow-sm' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="font-extrabold text-xl tracking-tight">Flames<span className="text-blue-600">.Portfolio</span></a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors">
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-gray-100">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-gray-100">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-sm hover:shadow-md hover:bg-blue-700 transition-all">
              <Mail className="w-4 h-4" /> Hire Me
            </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block px-2 py-2 rounded-md text-gray-800 hover:bg-gray-100">
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3 px-2 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-gray-100">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-gray-100">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#contact" onClick={() => setOpen(false)} className="ml-auto inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-sm hover:bg-blue-700 transition-all">
                <Mail className="w-4 h-4" /> Hire Me
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
