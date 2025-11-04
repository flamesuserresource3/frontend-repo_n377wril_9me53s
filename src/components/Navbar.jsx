import { Globe, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/40 border-b border-white/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-rose-300 via-amber-200 to-rose-200 flex items-center justify-center shadow-md">
            <Sparkles className="h-5 w-5 text-rose-600" />
          </div>
          <span className="font-semibold tracking-tight text-gray-900">TerraSphere</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#solutions" className="hover:text-gray-900 transition-colors">Solutions</a>
          <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
        </nav>
        <a
          href="#demo"
          className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-4 py-2 text-sm shadow-lg hover:shadow-xl transition-shadow"
        >
          <Globe className="h-4 w-4" /> Live Demo
        </a>
      </div>
    </header>
  );
}
