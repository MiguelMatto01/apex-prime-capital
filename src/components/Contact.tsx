import { MapPin, Mail, MessageCircle, Linkedin } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    state: '',
    city: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Track conversion in Google Ads
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17875079100/ydpKCJ6sqO0bELyfwMtC',
        'value': 1.0,
        'currency': 'AUD'
      });
    }

    const subject = 'Inquiry from Website Contact Form';
    const body = `Hello! I'm interested in learning more about your services.

Name: ${formData.firstName} ${formData.lastName}
Location: ${formData.city}, ${formData.state}
Phone: ${formData.phone}
Email: ${formData.email}

Message: ${formData.message}`;

    const mailtoUrl = `mailto:marina@apexprimecapital.com.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const link = document.createElement('a');
    link.href = mailtoUrl;
    link.target = '_blank';
    link.click();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="pt-12 md:pt-20 pb-6 md:pb-20 px-4 bg-gradient-to-b from-white to-blue-50/40 grain-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Ready to take control of your financial future? Contact our Melbourne-based team today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-royal-blue mb-6">
                Contact Information
              </h3>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-gold/30 shadow-lg shadow-gold/20">
                  <MessageCircle className="text-gold" size={24} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-semibold text-royal-blue mb-1">WhatsApp</h4>
                  <a
                    href="https://wa.me/61451292291"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gold transition-colors"
                  >
                    +61 451 292 291
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-gold/30 shadow-lg shadow-gold/20">
                  <Mail className="text-gold" size={24} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-semibold text-royal-blue mb-1">Email</h4>
                  <a
                    href="mailto:marina@apexprimecapital.com.au"
                    className="text-gray-700 hover:text-gold transition-colors"
                  >
                    marina@apexprimecapital.com.au
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-gold/30 shadow-lg shadow-gold/20">
                  <MapPin className="text-gold" size={24} strokeWidth={2} fill="currentColor" />
                </div>
                <div>
                  <h4 className="font-semibold text-royal-blue mb-1">Location</h4>
                  <p className="text-gray-700">Melbourne, Australia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-gold/30 shadow-lg shadow-gold/20">
                  <Linkedin className="text-gold" size={24} strokeWidth={2} fill="currentColor" />
                </div>
                <div>
                  <h4 className="font-semibold text-royal-blue mb-1">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/marinadeoliveira1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gold transition-colors"
                  >
                    Connect with Marina
                  </a>
                </div>
              </div>
            </div>

            {/* Location Map */}
            <div className="mt-8">
              <a
                href="https://www.google.com/maps/place/Melbourne+VIC/@-37.8136276,144.9630576,11z"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg overflow-hidden shadow-lg border-2 border-gold/20 hover:border-gold/40 transition-all duration-300 group"
              >
                <div
                  className="h-[280px] flex flex-col items-center justify-center text-white relative overflow-hidden bg-cover bg-center"
                  style={{ backgroundImage: 'url(/melbourne-map.png)' }}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                  <MapPin size={64} className="mb-4 relative z-10 group-hover:scale-110 transition-transform drop-shadow-lg" fill="currentColor" />
                  <h4 className="text-2xl font-bold mb-2 relative z-10 drop-shadow-lg">Melbourne, Australia</h4>
                  <p className="text-white/90 relative z-10 group-hover:text-white transition-colors drop-shadow-lg">Click to view on Google Maps</p>
                </div>
              </a>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded-lg">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold text-royal-blue mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-semibold text-royal-blue mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="state"
                    className="block text-sm font-semibold text-royal-blue mb-1"
                  >
                    State
                  </label>
                  <select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                  >
                    <option value="">Select State</option>
                    <option value="NSW">NSW</option>
                    <option value="VIC">VIC</option>
                    <option value="QLD">QLD</option>
                    <option value="SA">SA</option>
                    <option value="WA">WA</option>
                    <option value="TAS">TAS</option>
                    <option value="NT">NT</option>
                    <option value="ACT">ACT</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-semibold text-royal-blue mb-1"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-royal-blue mb-1"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-royal-blue mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-royal-blue mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  required
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                />
              </div>

              <button
                type="submit"
                className="grain-texture w-full text-white border-2 border-gold/50 px-8 py-3 rounded-md text-lg font-semibold hover:text-gold hover:border-gold hover:scale-105 transition-all duration-300 shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.95) 0%, rgba(20, 40, 100, 0.98) 50%, rgba(15, 30, 80, 1) 100%)'
                }}
              >
                Send via Email
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-600 text-center">
              When you submit, your email will open with a pre-filled message addressed to Marina. Simply review and send the email.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
