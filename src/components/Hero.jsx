import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-rose-50 via-amber-50 to-white pt-16">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/M2rj0DQ6tP7dSzSz/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft glow gradients */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />

      {/* Content overlay */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm ring-1 ring-black/5 backdrop-blur">
              <Globe className="h-3.5 w-3.5 text-rose-600" />
              Real-time 3D Interaction
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
              Explore a futuristic, interactive 3D Earth
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              Spin, zoom, and explore a high-fidelity globe built with Three.js technology via Spline. Perfect for education, sustainability dashboards, and corporate storytelling.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#solutions"
                className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-white shadow-lg hover:shadow-xl transition-all"
              >
                Explore Solutions
              </a>
              <a
                href="#about"
                className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-white/80 px-6 py-3 text-gray-900 shadow ring-1 ring-black/5 backdrop-blur hover:bg-white"
              >
                Learn More
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <ShieldCheck className="h-4 w-4 text-rose-600" />
                <span>Production-ready</span>
              </div>
              <div className="flex items-center gap-1">
                <Globe className="h-4 w-4 text-amber-600" />
                <span>Interactive & responsive</span>
              </div>
            </div>
          </motion.div>
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
