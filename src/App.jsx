import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Collections />
      </main>
      <Footer />
    </div>
  );
}

export default App;
