import { Globe, Leaf, BarChart3 } from 'lucide-react';

const items = [
  {
    title: 'Geo Insights',
    note: 'Visualize data on an interactive globe',
    color: 'from-rose-200 to-amber-200',
    icon: Globe,
  },
  {
    title: 'Sustainability',
    note: 'Track impact and climate metrics',
    color: 'from-emerald-200 to-teal-200',
    icon: Leaf,
  },
  {
    title: 'Analytics',
    note: 'Dashboards for education & enterprise',
    color: 'from-indigo-200 to-sky-200',
    icon: BarChart3,
  },
];

export default function Collections() {
  return (
    <section id="solutions" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="md:flex md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Solutions</h2>
            <p className="mt-2 text-gray-600 max-w-xl">
              Build immersive 3D experiences with a production-ready stack. Engage audiences with interactive storytelling and real-time data.
            </p>
          </div>
          <a href="#demo" className="mt-6 md:mt-0 inline-flex items-center rounded-full bg-gray-900 px-5 py-2.5 text-white text-sm shadow hover:shadow-md">Request a demo</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ title, note, color, icon: Icon }) => (
            <div key={title} className="group relative overflow-hidden rounded-3xl bg-gradient-to-br p-1 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`rounded-3xl bg-white p-6 h-full`}>
                <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow`}>
                  <Icon className="h-6 w-6 text-gray-800" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
                <p className="mt-1 text-gray-600">{note}</p>
                <button className="mt-6 inline-flex rounded-full bg-gray-900 px-4 py-2 text-white text-sm shadow hover:shadow-md">
                  Learn more
                </button>
              </div>
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-amber-200/50 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
