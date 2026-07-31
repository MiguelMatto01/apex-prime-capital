import { X } from 'lucide-react';
import { useState } from 'react';

const GridMenuIcon = ({ className }: { className?: string }) => (
  <div className={`grid grid-cols-3 gap-1.5 w-7 h-7 ${className}`}>
    <div className="w-2 h-2 bg-current rounded-sm"></div>
    <div className="w-2 h-2 bg-current rounded-sm"></div>
    <div className="w-2 h-2 bg-current rounded-sm"></div>
    <div className="w-2 h-2 bg-current rounded-sm"></div>
    <div className="w-2 h-2 bg-current rounded-sm"></div>
    <div className="w-2 h-2 bg-current rounded-sm"></div>
    <div className="w-2 h-2 bg-current rounded-sm"></div>
    <div className="w-2 h-2 bg-current rounded-sm"></div>
    <div className="w-2 h-2 bg-current rounded-sm"></div>
  </div>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="font-medium transition-colors text-gray-700 hover:text-royal-blue"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="font-medium transition-colors text-gray-700 hover:text-royal-blue"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="font-medium transition-colors text-gray-700 hover:text-royal-blue"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="font-medium transition-colors text-gray-700 hover:text-royal-blue"
            >
              Contact
            </button>
            <a
              href="https://calendly.com/marina-apexprimecapital/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-2 rounded-md font-semibold border-2 border-gold hover:bg-gray-50 transition-all duration-300 shadow-lg"
            >
              Book Now
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden transition-colors text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <GridMenuIcon />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="relative bg-gradient-to-b from-royal-blue to-[#172a66] border-t-2 border-gold shadow-2xl grain-light">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none"></div>
          <div className="relative px-6 py-8 space-y-6">
            <button
              onClick={() => scrollToSection('home')}
              className="group block w-full text-left text-white hover:text-gold transition-all duration-300 text-lg font-medium border-b border-gold/20 pb-4 hover:border-gold/50 hover:translate-x-2"
            >
              <span className="inline-block">Home</span>
              <span className="ml-2 text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">›</span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="group block w-full text-left text-white hover:text-gold transition-all duration-300 text-lg font-medium border-b border-gold/20 pb-4 hover:border-gold/50 hover:translate-x-2"
            >
              <span className="inline-block">About Us</span>
              <span className="ml-2 text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">›</span>
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="group block w-full text-left text-white hover:text-gold transition-all duration-300 text-lg font-medium border-b border-gold/20 pb-4 hover:border-gold/50 hover:translate-x-2"
            >
              <span className="inline-block">Services</span>
              <span className="ml-2 text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">›</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="group block w-full text-left text-white hover:text-gold transition-all duration-300 text-lg font-medium border-b border-gold/20 pb-4 hover:border-gold/50 hover:translate-x-2"
            >
              <span className="inline-block">Contact</span>
              <span className="ml-2 text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">›</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full bg-white text-black px-6 py-3 rounded-md font-bold border-2 border-gold hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-lg mt-8"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
