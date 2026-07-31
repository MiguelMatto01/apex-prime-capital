import { useState, useEffect, useRef } from 'react';
import { MessageSquare, DollarSign, Home, Car, Building2, GraduationCap, ChevronDown } from 'lucide-react';

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const [expandedBlogPost, setExpandedBlogPost] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => new Set(prev).add(index));
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const toggleCard = (index: number) => {
    setExpandedCards((prev) => {
      const newSet = prev.has(index) ? new Set() : new Set([index]);

      // Scroll expanded card into view on mobile after state updates
      if (!prev.has(index)) {
        setTimeout(() => {
          const card = cardRefs.current[index];
          if (card && window.innerWidth < 768) {
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }, 100);
      }

      return newSet;
    });
  };

  const blogPosts = [
    {
      id: 0,
      title: 'Financial Reset: How to Organise Your Finances for the Year',
      subtitle: 'Starting the Year with Financial Clarity',
      image: '/financial-solutions-january.jpeg',
      content: `The beginning of a new year is the ideal time to pause, review, and reorganise your financial life.

A financial reset does not mean cutting everything or living with restrictions, but rather gaining clarity, control and structure, both on a personal and business level.

Financial organisation is the foundation for more conscious, sustainable decisions aligned with medium- and long-term goals.

With this in mind, APEX PRIME CAPITAL has prepared a few practical tips to help you take better care of your money throughout the year.

1 – Gain Clarity on Your Financial Position

The first step in any financial planning process is understanding exactly where you stand.

This includes having a clear view of:
• your income
• fixed and variable expenses
• existing financial commitments

To support this process, we recommend using the official Smart Money budget planner, a practical tool designed to help individuals and families organise their finances in a structured way:

https://moneysmart.gov.au/budgeting/budget-planner

Without clarity, financial decisions tend to be reactive rather than strategic.

2 – Build a Structured Financial Plan

Once your financial information is organised, the next step is to create a realistic financial plan that considers:
• essential expenses
• room for unexpected costs
• short-, medium-, and long-term goals

For both individuals and businesses, financial planning provides predictability and reduces risk throughout the year.

3 – Organise Commitments and Make Informed Decisions

Understanding your financial commitments, timelines and their impact on cash flow allows for more responsible and sustainable decision-making.

Financial organisation is not just about control it is about preparing for the future.

A financial reset sets the tone for the year ahead.

Organisation brings clarity, security and control essential elements for healthy financial management, both personally and professionally.

Sound financial decisions can change your life.

Book an appointment with our team at APEX PRIME CAPITAL to support you in building well-structured and informed financial choices.`
    },
    {
      id: 1,
      title: 'Interest Rate Increase in Australia - February 2026',
      subtitle: 'How to Plan Ahead and Move Forward with Confidence',
      image: '/interest-rate-february.png',
      content: `The Reserve Bank of Australia (RBA) has recently announced an increase in the cash rate to 3.85%, reinforcing a more selective credit environment and highlighting the importance of well-structured financial decisions.

Changes in the base interest rate directly affect home loans, personal credit, vehicle finance, investments and business projects. More than reacting to market movements, the current scenario calls for planning, careful analysis and professional guidance.

What does the increase to 3.85% mean in practice?

Loans and financing
Variable interest rates tend to follow movements in the cash rate, which may lead to higher repayments over time. This makes it essential to review loan structures, terms and the total cost of credit.

Personal and consumer credit
Credit decisions now require greater planning, with a strong focus on affordability, financial stability and medium- to long-term objectives.

Businesses and investment projects
In a higher interest rate environment, cash-flow management, debt structure and return-on-investment analysis become even more critical to long-term sustainability.

Planning remains the key differentiator

Higher interest rates do not necessarily mean putting projects on hold they mean structuring them more strategically. Asset purchases, investments and business expansions can still move forward when based on realistic assumptions and sound financial analysis.

Working with a financial consultant or finance broker allows you to:
• Assess your financial position in a personalised way
• Understand the short- and long-term impact of interest rate changes
• Structure credit solutions aligned with your goals and risk profile
• Reduce uncertainty and avoid reactive decision-making

Our role at Apex Prime Capital

At Apex Prime Capital, every client relationship starts with a conversation not an automated simulation.

Our role is to understand your current position, analyse the numbers with discipline and assess risks before recommending any financial or credit solution.

We believe that well-planned financial decisions enable projects to move forward with confidence, even in more challenging economic conditions.

If you are considering a new project, reassessing your finances or seeking clarity in light of rising interest rates, professional guidance is the first step toward informed and confident decisions.

Contact Apex Prime Capital to plan your next steps with clarity and strategy.`
    }
  ];

  const services = [
    {
      icon: MessageSquare,
      title: 'Financial Consultation',
      description:
        'Complete assessment of the financial profile and strategic guidance for decision-making.',
      detailedDescription: 'Our comprehensive financial consultation provides you with a thorough analysis of your current financial situation, including income, expenses, assets, and liabilities. We evaluate your financial goals and create a customised roadmap to help you achieve them. Our expert advisors will assess your risk tolerance, review your existing investments, and identify opportunities for optimisation. We provide actionable insights on budget management, debt reduction strategies, and wealth accumulation techniques. This consultation serves as the foundation for all future financial decisions, ensuring you have clarity and confidence in your financial journey.',
    },
    {
      icon: DollarSign,
      title: 'Personal Loan',
      description:
        'Personalised financial solutions to organise financial life with more safety.',
      detailedDescription: 'Our personal loan services are designed to provide flexible financing solutions tailored to your unique circumstances. Whether you need funds for debt consolidation, home improvements, medical expenses, or unexpected emergencies, we offer competitive rates and flexible repayment terms. We work with multiple lending partners to secure the best possible terms for your situation. Our streamlined application process ensures quick approval times, and our advisors guide you through every step. We also provide comprehensive guidance on loan management, helping you understand the total cost of borrowing and develop strategies to pay off your loan efficiently while maintaining financial stability.',
    },
    {
      icon: Home,
      title: 'Home Loan',
      description: 'Apex Prime Capital does not provide home loan services directly.',
      detailedDescription: 'What we offer is a financial consultation, including the analysis of basic information, documentation, and an overview of fundamental processes. When appropriate, we may refer clients to licensed and accredited mortgage brokers operating in the Australian market who are authorised to provide and arrange home loan products. We believe that purchasing a home is one of the most significant financial milestones in an individual\'s life. Our role is limited to financial guidance and education, helping clients better understand their situation and available options.',
    },
    {
      icon: Car,
      title: 'Asset Finance Solutions',
      description:
        'Solutions for acquiring vehicles, equipment, and essential machinery.',
      detailedDescription: 'We provide financial analysis and guidance to support the acquisition of essential assets such as vehicles, equipment and machinery. Our role includes reviewing financial information, assessing affordability and cash flow impact, and helping clients understand appropriate funding structures based on their personal or business needs. Where appropriate, we may also assist with the process and provide referrals to licensed and accredited professionals in the market. Our focus is on clarity, responsible financial decision-making and long-term sustainability.',
    },
    {
      icon: Building2,
      title: 'Business Loan',
      description:
        'Financial structuring for businesses, supporting growth, cash flow, and expansion.',
      detailedDescription: 'At APEX PRIME CAPITAL we provide financial guidance and support for businesses seeking to better understand and structure their funding needs. Our role includes business credit analysis, financial assessment, and cash flow review, helping business owners evaluate financing options that may support growth, improve liquidity, or fund expansion. Where appropriate, we may also refer clients to accredited finance providers or licensed professionals operating in the Australian market. Our focus is on clarity, responsible decision-making, and long-term financial sustainability for your business.',
    },
    {
      icon: GraduationCap,
      title: 'Financial Education',
      description:
        'Monthly publications on financial organisation, credit, planning, and control.',
      detailedDescription: 'Knowledge is the foundation of financial success. Our financial education program is designed to equip you with the tools and insights needed to make more informed and confident financial decisions. We publish monthly content covering essential topics relevant to everyday financial life. Our educational materials aim to improve the understanding of technical financial terms and concepts in a clear and practical way. Through our education program, our goal is to build a community of financially literate individuals who can confidently navigate the complexities of modern finance and achieve long-term financial well-being.',
    },
  ];

  return (
    <section id="services" className="pt-0 pb-0 bg-gradient-to-b from-slate-50 via-slate-50 to-white">
      <div className="grain-fade-out px-4 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.has(index);
            const isExpanded = expandedCards.has(index);
            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`group relative rounded-3xl transition-all duration-700 cursor-pointer ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                } ${isExpanded ? '' : 'hover:-translate-y-2'}`}
                style={{
                  background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.95) 0%, rgba(20, 40, 100, 0.98) 50%, rgba(15, 30, 80, 1) 100%)',
                  border: '2px solid rgba(212, 175, 55, 0.5)',
                  boxShadow: isExpanded
                    ? '0 12px 48px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(212, 175, 55, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                    : '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(212, 175, 55, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  transitionDelay: `${index * 100}ms`,
                }}
                onClick={() => toggleCard(index)}
              >
                <div className="p-8 lg:p-10">
                  <div className="flex items-start gap-6 relative z-10">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-royal-blue/20 to-royal-blue/10 border border-gold/60 scale-105 group-hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.6),inset_0_0_20px_rgba(212,175,55,0.2)] group-hover:shadow-[0_0_40px_rgba(212,175,55,0.8),inset_0_0_25px_rgba(212,175,55,0.3)]">
                        <Icon className="text-gold transition-colors duration-300 drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] group-hover:drop-shadow-[0_0_12px_rgba(212,175,55,1)]" size={32} strokeWidth={1.5} />
                      </div>
                    </div>

                    <div className="flex-grow">
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                        {service.description}
                      </p>
                    </div>

                    <div className="flex-shrink-0">
                      <ChevronDown
                        className={`text-gold transition-all duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                        size={24}
                        strokeWidth={2}
                      />
                    </div>
                  </div>

                  <div
                    className={`transition-all duration-500 ease-in-out ${
                      isExpanded ? 'max-h-[5000px] opacity-100 mt-6' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                  >
                    <div className="relative z-10 pt-6 border-t border-gold/30 pb-2">
                      {service.title === 'Financial Education' ? (
                        <div className="space-y-4">
                          <div className="bg-gradient-to-br from-royal-blue/40 to-royal-blue/20 rounded-2xl p-6 backdrop-blur-sm border border-gold/20">
                            <p className="text-white leading-relaxed text-base mb-6">
                              {service.detailedDescription}
                            </p>
                          </div>

                          <div className="space-y-4">
                            {blogPosts.map((post) => (
                              <div key={post.id}>
                                {expandedBlogPost === post.id ? (
                                  <div className="bg-gradient-to-br from-royal-blue/40 to-royal-blue/20 rounded-2xl p-6 backdrop-blur-sm border border-gold/20">
                                    <img
                                      src={post.image}
                                      alt={post.title}
                                      className="w-full h-64 object-contain rounded-lg mb-6 bg-white/5"
                                    />
                                    <h4 className="text-gold font-bold text-2xl mb-2">
                                      {post.title}
                                    </h4>
                                    <h5 className="text-white font-semibold text-lg mb-6">
                                      {post.subtitle}
                                    </h5>
                                    <div className="text-white leading-relaxed text-base space-y-4 whitespace-pre-line">
                                      {post.content.split(/(https?:\/\/[^\s]+)/g).map((part, i) => {
                                        if (part.match(/^https?:\/\//)) {
                                          return (
                                            <a
                                              key={i}
                                              href={part}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="text-gold hover:text-white underline transition-colors duration-300"
                                              onClick={(e) => e.stopPropagation()}
                                            >
                                              {part}
                                            </a>
                                          );
                                        }
                                        return part;
                                      })}
                                    </div>
                                    <div className="mt-6 pt-4 border-t border-gold/20 flex gap-3">
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setExpandedBlogPost(null);
                                        }}
                                        className="bg-white/10 border border-gold/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 text-sm"
                                      >
                                        Close
                                      </button>
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          const element = document.getElementById('contact');
                                          if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' });
                                          }
                                        }}
                                        className="golden-glow-button text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 text-sm"
                                      >
                                        Book Appointment
                                      </button>
                                    </div>
                                  </div>
                                ) : (
                                  <div
                                    className="bg-gradient-to-br from-royal-blue/40 to-royal-blue/20 rounded-2xl p-6 backdrop-blur-sm border border-gold/20 cursor-pointer hover:border-gold/40 transition-all duration-300"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setExpandedBlogPost(post.id);
                                    }}
                                  >
                                    <div className="flex gap-4 items-center">
                                      <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-24 h-24 object-contain rounded-lg bg-white/5"
                                      />
                                      <div className="flex-grow">
                                        <h4 className="text-gold font-bold text-xl mb-1">
                                          {post.title}
                                        </h4>
                                        <p className="text-white/80 text-sm mb-3">
                                          {post.subtitle}
                                        </p>
                                        <button
                                          className="text-gold hover:text-white transition-colors text-sm font-semibold flex items-center gap-2"
                                        >
                                          Read Blog
                                          <ChevronDown size={16} className="-rotate-90" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="bg-gradient-to-br from-royal-blue/40 to-royal-blue/20 rounded-2xl p-6 backdrop-blur-sm border border-gold/20">
                          <h4 className="text-gold font-semibold text-lg mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-gold rounded-full animate-pulse"></span>
                            Detailed Overview
                          </h4>
                          <p className="text-white leading-relaxed text-base">
                            {service.detailedDescription}
                          </p>
                          <div className="mt-6 pt-4 border-t border-gold/20 pb-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                const element = document.getElementById('contact');
                                if (element) {
                                  element.scrollIntoView({ behavior: 'smooth' });
                                }
                              }}
                              className="golden-glow-button text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 text-sm"
                            >
                              Get Started
                            </button>
                          </div>
                        </div>
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

          <div className="mt-16 text-center">
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="golden-glow-button text-black px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-50 transition-all duration-300"
            >
              Discuss Your Needs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
