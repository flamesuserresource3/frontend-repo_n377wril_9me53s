export default function Footer() {
  return (
    <footer id="contact" className="relative border-t bg-gradient-to-b from-white to-rose-50">
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">TerraSphere</h3>
          <p className="mt-2 text-sm text-gray-600 max-w-sm">
            Interactive 3D experiences for education, climate, and enterprise. Built with modern web graphics and performance in mind.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-900">Resources</h4>
          <ul className="mt-2 space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-900">Docs</a></li>
            <li><a href="#" className="hover:text-gray-900">Changelog</a></li>
            <li><a href="#" className="hover:text-gray-900">Support</a></li>
          </ul>
        </div>
        <div>
          <h4 id="about" className="text-sm font-medium text-gray-900">Newsletter</h4>
          <p className="mt-2 text-sm text-gray-600">Get product updates and 3D tutorials.</p>
          <form className="mt-4 flex gap-2">
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="w-full rounded-full border border-gray-300 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-900"
            />
            <button className="rounded-full bg-gray-900 px-4 py-2 text-white text-sm">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="px-6 py-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} TerraSphere. All rights reserved.</div>
    </footer>
  );
}
