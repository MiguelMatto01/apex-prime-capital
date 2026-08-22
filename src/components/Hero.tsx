import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [logoVisible, setLogoVisible] = useState(false);

  const fullText = 'Clear strategic and secure financial solutions aligned with your goals.';

  useEffect(() => {
    const timer = setTimeout(() => {
      setLogoVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
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
    }
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-b from-royal-blue via-blue-400 to-sky-100 pb-0">
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute left-6 right-6 sm:left-12 md:left-16 lg:left-24 sm:right-auto top-28 sm:top-1/2 translate-y-0 sm:-translate-y-1/2 max-w-2xl pointer-events-none">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-relaxed sm:leading-tight mb-4 sm:mb-6 drop-shadow-lg">
            Your future starts with the right financial decisions made today.
          </h1>
          <p className="text-white text-lg sm:text-xl md:text-2xl leading-relaxed drop-shadow-md mb-4 sm:mb-6">
            {typedText}
            <span className="animate-pulse ml-1">|</span>
          </p>
          <div className="hidden sm:flex justify-start mt-2">
            <ChevronDown
              className="text-gold animate-bounce drop-shadow-lg"
              size={36}
              strokeWidth={3}
            />
          </div>
        </div>

        {/* Mobile logo - above buttons */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 sm:hidden pointer-events-none">
          <img
            src="/files_5754595-1765843114804-files_5754595-1765843032491-no_padding_transparent_logo.webp"
            alt="Apex Prime Capital Logo"
            className={`w-[32rem] h-[32rem] object-contain drop-shadow-2xl transition-opacity duration-1000 ${logoVisible ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>

        {/* Mobile buttons - at bottom */}
        <div className="absolute bottom-8 left-6 right-6 pointer-events-auto sm:hidden">
          <div className="flex flex-col gap-2">
            <a
              href="https://calendly.com/marina-apexprimecapital/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="grain-texture text-white border-2 border-gold/50 px-6 py-3 rounded-lg font-bold text-sm tracking-wide hover:text-gold hover:border-gold hover:scale-105 transition-all duration-300 cursor-pointer shadow-2xl text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.95) 0%, rgba(20, 40, 100, 0.98) 50%, rgba(15, 30, 80, 1) 100%)'
              }}
            >
              Book a Meeting
            </a>
            <button
              onClick={() => scrollToSection('about')}
              className="grain-texture text-white border-2 border-gold/50 px-6 py-3 rounded-lg font-bold text-sm tracking-wide hover:text-gold hover:border-gold hover:scale-105 transition-all duration-300 cursor-pointer shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.95) 0%, rgba(20, 40, 100, 0.98) 50%, rgba(15, 30, 80, 1) 100%)'
              }}
            >
              Discover more
            </button>
          </div>
        </div>

        {/* Desktop logo and buttons - right side */}
        <div className="hidden sm:flex absolute right-6 sm:right-10 md:right-14 lg:right-20 top-24 sm:top-28 md:top-28 lg:top-32 flex-col items-center gap-4 md:gap-6">
          <div className="pointer-events-none">
            <img
              src="/no_padding_transparent_logo.png"
              alt="Apex Prime Capital Logo"
              className={`w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] 2xl:w-[36rem] 2xl:h-[36rem] object-contain drop-shadow-2xl transition-opacity duration-1000 ${logoVisible ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>

          <div className="pointer-events-auto">
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="https://calendly.com/marina-apexprimecapital/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="grain-texture text-white border-2 border-gold/50 px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-5 rounded-lg font-bold text-sm sm:text-base md:text-xl tracking-wide hover:text-gold hover:border-gold hover:scale-105 transition-all duration-300 cursor-pointer shadow-2xl text-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.95) 0%, rgba(20, 40, 100, 0.98) 50%, rgba(15, 30, 80, 1) 100%)'
                }}
              >
                Book a Meeting
              </a>
              <button
                onClick={() => scrollToSection('about')}
                className="grain-texture text-white border-2 border-gold/50 px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-5 rounded-lg font-bold text-sm sm:text-base md:text-xl tracking-wide hover:text-gold hover:border-gold hover:scale-105 transition-all duration-300 cursor-pointer shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.95) 0%, rgba(20, 40, 100, 0.98) 50%, rgba(15, 30, 80, 1) 100%)'
                }}
              >
                Discover more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
