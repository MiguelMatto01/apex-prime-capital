import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = ['home', 'about', 'services', 'contact'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] shadow-md transition-all duration-300" style={{
      background: 'linear-gradient(180deg, rgba(15, 30, 80, 1) 0%, rgba(20, 40, 100, 0.98) 30%, rgba(30, 58, 138, 0.95) 100%)',
      backgroundImage: `linear-gradient(180deg, rgba(15, 30, 80, 1) 0%, rgba(20, 40, 100, 0.98) 30%, rgba(30, 58, 138, 0.95) 100%), url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      backgroundBlendMode: 'normal, overlay'
    }}>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-50 z-10"></div>
      <div className="max-w-7xl mx-auto pr-4 sm:pr-6 lg:pr-8">
        <div className="flex justify-between items-center h-24 md:h-32">
          <div className="flex items-center pl-0">
            <button
              onClick={() => scrollToSection('home')}
              className="cursor-pointer transition-transform hover:scale-105 duration-300"
              aria-label="Go to home"
            >
              <img
                src="/apex_prime_capital_transparent_logo.png"
                alt="Apex Prime Capital - Melbourne Financial Advisory Services"
                className="w-auto object-contain h-20 md:h-28"
                onError={(e) => {
                  console.error('Logo failed to load');
                  e.currentTarget.style.display = 'none';
                }}
              />
            </button>
          </div>

          <nav className="hidden md:flex items-center space-x-8 self-center">
            <div className="flex flex-col items-center">
              <button
                onClick={() => scrollToSection('home')}
                className="font-medium text-gray-200 hover:text-gold transition-colors cursor-pointer"
              >
                Home
              </button>
              <div className={`w-2 h-2 mt-1 bg-gold transition-opacity duration-300 ${activeSection === 'home' ? 'opacity-100' : 'opacity-0'}`} />
            </div>
            <div className="flex flex-col items-center">
              <button
                onClick={() => scrollToSection('about')}
                className="font-medium text-gray-200 hover:text-gold transition-colors cursor-pointer"
              >
                About Us
              </button>
              <div className={`w-2 h-2 mt-1 bg-gold transition-opacity duration-300 ${activeSection === 'about' ? 'opacity-100' : 'opacity-0'}`} />
            </div>
            <div className="flex flex-col items-center">
              <button
                onClick={() => scrollToSection('services')}
                className="font-medium text-gray-200 hover:text-gold transition-colors cursor-pointer"
              >
                Services
              </button>
              <div className={`w-2 h-2 mt-1 bg-gold transition-opacity duration-300 ${activeSection === 'services' ? 'opacity-100' : 'opacity-0'}`} />
            </div>
            <div className="flex flex-col items-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="font-medium text-gray-200 hover:text-gold transition-colors cursor-pointer"
              >
                Contact
              </button>
              <div className={`w-2 h-2 mt-1 bg-gold transition-opacity duration-300 ${activeSection === 'contact' ? 'opacity-100' : 'opacity-0'}`} />
            </div>
            <a
              href="https://calendly.com/marina-apexprimecapital/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="golden-glow-button px-6 py-2.5 rounded-lg font-bold text-sm tracking-wide text-white hover:text-black hover:bg-gray-50 transition-all duration-300 cursor-pointer relative z-10"
            >
              BOOK NOW
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white transition-colors self-center"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-gold/20" style={{
          background: 'linear-gradient(180deg, rgba(15, 30, 80, 1) 0%, rgba(20, 40, 100, 0.98) 30%, rgba(30, 58, 138, 0.95) 100%)',
          backgroundImage: `linear-gradient(180deg, rgba(15, 30, 80, 1) 0%, rgba(20, 40, 100, 0.98) 30%, rgba(30, 58, 138, 0.95) 100%), url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundBlendMode: 'normal, overlay'
        }}>
          <div className="px-4 py-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 bg-gold transition-opacity duration-300 ${activeSection === 'home' ? 'opacity-100' : 'opacity-0'}`} />
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-gray-200 hover:text-gold transition-colors cursor-pointer"
              >
                Home
              </button>
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 bg-gold transition-opacity duration-300 ${activeSection === 'about' ? 'opacity-100' : 'opacity-0'}`} />
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-200 hover:text-gold transition-colors cursor-pointer"
              >
                About Us
              </button>
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 bg-gold transition-opacity duration-300 ${activeSection === 'services' ? 'opacity-100' : 'opacity-0'}`} />
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-gray-200 hover:text-gold transition-colors cursor-pointer"
              >
                Services
              </button>
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 bg-gold transition-opacity duration-300 ${activeSection === 'contact' ? 'opacity-100' : 'opacity-0'}`} />
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-gray-200 hover:text-gold transition-colors cursor-pointer"
              >
                Contact
              </button>
            </div>
            <a
              href="https://calendly.com/marina-apexprimecapital/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="golden-glow-button block w-full text-center text-white hover:text-black px-6 py-3 rounded-lg font-bold text-sm tracking-wide hover:bg-gray-50 transition-all duration-300 cursor-pointer"
            >
              BOOK NOW
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
