import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Why choose Apex Prime Capital?',
      answer:
        'APC combines banking experience, strategic analysis, and human-centred service to offer personalised and secure financial solutions.',
    },
    {
      question: 'Is Apex authorised to operate in Australia?',
      answer: 'Yes. We operate under accreditation from Oxcel Finance.',
    },
    {
      question: 'How does the initial consultation work?',
      answer:
        'Profile assessment, needs alignment, and strategic guidance tailored to your specific financial situation.',
    },
    {
      question: 'Do you serve only Melbourne?',
      answer: 'We serve clients throughout Australia.',
    },
    {
      question: 'Does the initial consultation have a cost?',
      answer:
        'Clients are informed clearly if there is any additional cost during the consultation process.',
    },
    {
      question: 'Do you assist clients with no credit history in Australia?',
      answer:
        'Yes, we work with clients at various stages of their credit journey, including those establishing credit history in Australia.',
    },
    {
      question: 'Can the service be online?',
      answer: 'Yes, 100% online and secure, providing convenience and accessibility.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 bg-gradient-to-b from-blue-50/40 to-blue-50/50 grain-light">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-royal-blue text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`text-gold transition-transform flex-shrink-0 ml-4 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">Still have questions?</p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="grain-texture text-white border-2 border-gold/50 px-8 py-3 rounded-md text-lg font-semibold hover:text-gold hover:border-gold hover:scale-105 transition-all duration-300 shadow-lg"
            style={{
              background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.95) 0%, rgba(20, 40, 100, 0.98) 50%, rgba(15, 30, 80, 1) 100%)'
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
