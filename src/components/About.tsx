import { Target, Eye, Heart } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const About = () => {
  const values = [
    'Transparency',
    'Responsibility',
    'Ethics',
    'Professionalism',
    'Empathy',
    'Safety',
    'Clarity',
    'Continuous evolution',
    'Strategy',
  ];

  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef<HTMLDivElement>(null);
  const [typedText, setTypedText] = useState('');
  const [startTyping, setStartTyping] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const typingRef = useRef<HTMLParagraphElement>(null);
  const fullText = 'real needs of each client.';

  const [typedText2, setTypedText2] = useState('');
  const [startTyping2, setStartTyping2] = useState(false);
  const [isTypingComplete2, setIsTypingComplete2] = useState(false);
  const typingRef2 = useRef<HTMLParagraphElement>(null);
  const fullText2 = 'human-centred service.';

  const aboutCards = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To guide individuals and businesses in making intelligent, strategic, and secure financial decisions, turning today\'s choices into real achievements in the future.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To be recognised as a reference in financial consulting and credit solutions, with ethical, modern performance aligned with the evolution of the Australian market.',
    },
    {
      icon: Heart,
      title: 'Values',
      description: 'Transparency, Responsibility, Ethics, Professionalism, Empathy, Safety, Clarity, Continuous evolution, Strategy.',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const typingObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startTyping) {
          setStartTyping(true);
        }
      },
      { threshold: 0.5 }
    );

    if (typingRef.current) {
      typingObserver.observe(typingRef.current);
    }

    return () => {
      if (typingRef.current) {
        typingObserver.unobserve(typingRef.current);
      }
    };
  }, [startTyping]);

  useEffect(() => {
    if (!startTyping) return;

    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.substring(0, index));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [startTyping]);

  useEffect(() => {
    const typingObserver2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startTyping2) {
          setStartTyping2(true);
        }
      },
      { threshold: 0.5 }
    );

    if (typingRef2.current) {
      typingObserver2.observe(typingRef2.current);
    }

    return () => {
      if (typingRef2.current) {
        typingObserver2.unobserve(typingRef2.current);
      }
    };
  }, [startTyping2]);

  useEffect(() => {
    if (!startTyping2) return;

    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText2.length) {
        setTypedText2(fullText2.substring(0, index));
        index++;
      } else {
        setIsTypingComplete2(true);
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [startTyping2]);

  return (
    <section id="about" className="relative z-10 bg-gradient-to-b from-sky-100 via-blue-50 to-slate-50 -mt-1">
      <div className="pt-12 sm:pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div ref={headingRef} className="space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center">
                <span className={`inline-block text-royal-blue slide-in-left ${isVisible ? 'active' : ''}`}>About Apex <span className="text-royal-blue">Prime</span></span>
                <br />
                <span className="italic font-light text-gold">Capital</span>
              </h2>
              <div className="flex flex-col items-center">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-gold via-amber-400 to-gold rounded-full opacity-75 group-hover:opacity-100 blur transition duration-500 group-hover:duration-300 animate-pulse"></div>
                  <div className="relative">
                    <img
                      src="/nina_apex_prime.png"
                      alt="Marina Oliveira - Founder of Apex Prime Capital Melbourne"
                      className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover object-top border-4 border-white shadow-2xl transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
                <p className="mt-4 text-black text-sm md:text-base font-bold">
                  Credit Representative Number (CRN): 575488
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                Apex Prime Capital was founded by Marina Oliveira, a financial professional with more than 14 years of experience in the banking sector, having worked with major institutions such as Bradesco, Itaú and Banco Daycoval in São Paulo Brazil. Marina holds a Bachelor's degree in Business Administration and an MBA in Finance Investments and Banking from PUC-RS.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                Based in Melbourne, Apex Prime Capital provides clear objective and responsible financial guidance across Victoria. With solid experience in banking and consulting, the brand delivers strategic support for important financial decisions with transparency ethics and commitment.
              </p>
              <p ref={typingRef} className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                The approach is human personalised and aligned with the{' '}
                <span className="text-gray-700 font-semibold">
                  {typedText}
                  {!isTypingComplete && <span className="animate-pulse">|</span>}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative extended-grain-wrapper">
        <div className="pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-5 md:gap-8">
              {aboutCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <div
                    key={index}
                    className="relative rounded-3xl group transition-all duration-300 hover:-translate-y-2"
                    style={{
                      background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.95) 0%, rgba(20, 40, 100, 0.98) 50%, rgba(15, 30, 80, 1) 100%)',
                      border: '2px solid rgba(212, 175, 55, 0.5)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(212, 175, 55, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <div className="p-6 md:p-10">
                      <div className="flex flex-col min-h-[320px] md:min-h-[360px]">
                        <div className="mb-4">
                          <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-royal-blue/20 to-royal-blue/10 border border-gold/60 scale-105 group-hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.6),inset_0_0_20px_rgba(212,175,55,0.2)] group-hover:shadow-[0_0_40px_rgba(212,175,55,0.8),inset_0_0_25px_rgba(212,175,55,0.3)]">
                            <Icon className="text-gold transition-colors duration-300 drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] group-hover:drop-shadow-[0_0_12px_rgba(212,175,55,1)]" size={window.innerWidth < 768 ? 28 : 32} strokeWidth={1.5} />
                          </div>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 group-hover:text-gold transition-colors duration-300">
                          {card.title}
                        </h3>

                        <div className="flex-1">
                          {card.title === 'Values' ? (
                            <div className="grid grid-cols-2 gap-y-4 gap-x-3 md:gap-y-5 md:gap-x-4">
                              {values.map((value, valueIndex) => (
                                <div
                                  key={valueIndex}
                                  className="flex items-center gap-2"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0"></span>
                                  <span className="text-sm md:text-base text-gray-300">
                                    {value}
                                  </span>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-gray-300 leading-relaxed text-base md:text-lg lg:text-xl">
                              {card.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, transparent 50%)',
                        boxShadow: '0 0 40px rgba(212, 175, 55, 0.2), inset 0 0 20px rgba(212, 175, 55, 0.05)',
                      }}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        </div>

        <div className="pt-6 md:pt-12 pb-12 md:pb-16 grain-fade-in">
          <div className="max-w-7xl mx-auto text-center px-4">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-royal-blue">Purpose of Existence</h3>
            <p ref={typingRef2} className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-gray-900 font-semibold mb-12 md:mb-16">
              To make the financial process less complex, clearer, and more accessible, offering
              a consultative experience that combines technical knowledge, strategic analysis,
              and{' '}
              <span className="text-gray-900 font-semibold">
                {typedText2}
                {!isTypingComplete2 && <span className="animate-pulse">|</span>}
              </span>
            </p>

            <h3 className="text-3xl md:text-4xl font-bold text-royal-blue mb-6">
              Our Services
            </h3>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive financial solutions for Melbourne residents and businesses
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
