export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Flames Portfolio. All rights reserved.</p>
        <div className="text-sm text-gray-500">Built with love, motion, and a sprinkle of playfulness.</div>
      </div>
    </footer>
  )
}
