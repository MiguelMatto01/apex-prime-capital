import { Mail, Linkedin, MessageCircle, MapPin, Shield, Instagram } from 'lucide-react';
import TikTokIcon from './TikTokIcon';

interface FooterProps {
  onComplianceClick: () => void;
}

const Footer = ({ onComplianceClick }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative text-white grain-texture" style={{
      background: 'linear-gradient(180deg, rgba(15, 30, 80, 1) 0%, rgba(20, 40, 100, 0.98) 30%, rgba(30, 58, 138, 0.95) 100%)'
    }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid md:grid-cols-4 gap-6 lg:gap-8 mb-6">
          <div>
            <img
              src="/no_padding_transparent_logo.png"
              alt="Apex Prime Capital - Melbourne Financial Services"
              className="h-24 w-auto mb-3 drop-shadow-lg"
            />
            <p className="text-gray-200 leading-relaxed mb-3">
              Financial consultancy based in Melbourne dedicated to providing clear objective and responsible financial guidance guided by transparency ethics and commitment.
            </p>
            <p className="text-sm text-gray-300">
              <span className="text-gold font-semibold">Service Area:</span> Melbourne, Victoria, Australia
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gold mb-3 relative inline-block">
              Quick Links
              <div className="absolute -bottom-1.5 left-0 w-12 h-0.5 bg-gold"></div>
            </h4>
            <div className="space-y-1.5 mt-4">
              <button
                onClick={() => {
                  const element = document.getElementById('home');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="block text-gray-200 hover:text-gold transition-colors hover:translate-x-2 transform duration-300"
              >
                → Home
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('about');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="block text-gray-200 hover:text-gold transition-colors hover:translate-x-2 transform duration-300"
              >
                → About Us
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="block text-gray-200 hover:text-gold transition-colors hover:translate-x-2 transform duration-300"
              >
                → Services
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="block text-gray-200 hover:text-gold transition-colors hover:translate-x-2 transform duration-300"
              >
                → Contact
              </button>
            </div>
            <div className="mt-4 pt-4 border-t border-gold/20">
              <button
                onClick={onComplianceClick}
                className="flex items-center gap-2 text-gray-200 hover:text-gold transition-colors group"
              >
                <Shield size={16} className="text-gold group-hover:scale-110 transition-transform" />
                <span className="group-hover:translate-x-1 transform duration-300">Compliance & Regulatory information</span>
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gold mb-3 relative inline-block">
              Follow Us
              <div className="absolute -bottom-1.5 left-0 w-12 h-0.5 bg-gold"></div>
            </h4>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.instagram.com/apexprimecapital.au/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-gold/30 to-gold/10 rounded-lg flex items-center justify-center border border-gold/30 group-hover:scale-110 transition-transform">
                  <Instagram size={18} className="text-gold" strokeWidth={2} />
                </div>
              </a>
              <a
                href="https://www.tiktok.com/@apexprimecapital.au"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-gold/30 to-gold/10 rounded-lg flex items-center justify-center border border-gold/30 group-hover:scale-110 transition-transform">
                  <TikTokIcon size={18} className="text-gold" />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/apexprimecapital/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-gold/30 to-gold/10 rounded-lg flex items-center justify-center border border-gold/30 group-hover:scale-110 transition-transform">
                  <Linkedin size={18} className="text-gold" strokeWidth={2} />
                </div>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gold mb-3 relative inline-block">
              Contact Details
              <div className="absolute -bottom-1.5 left-0 w-12 h-0.5 bg-gold"></div>
            </h4>
            <div className="space-y-3 mt-4">
              <div className="flex items-center gap-3 group">
                <div className="w-12 h-12 bg-gradient-to-br from-gold/30 to-gold/10 rounded-lg flex items-center justify-center border border-gold/30 group-hover:scale-110 transition-transform flex-shrink-0">
                  <Mail size={20} className="text-gold" strokeWidth={2} />
                </div>
                <a
                  href="mailto:marina@apexprimecapital.com.au"
                  className="text-gray-200 hover:text-gold transition-colors whitespace-nowrap text-base"
                >
                  marina@apexprimecapital.com.au
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-12 h-12 bg-gradient-to-br from-gold/30 to-gold/10 rounded-lg flex items-center justify-center border border-gold/30 group-hover:scale-110 transition-transform flex-shrink-0">
                  <MessageCircle size={20} className="text-gold" strokeWidth={2} />
                </div>
                <a
                  href="https://wa.me/61451292291"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-gold transition-colors text-base"
                >
                  +61 451 292 291
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-12 h-12 bg-gradient-to-br from-gold/30 to-gold/10 rounded-lg flex items-center justify-center border border-gold/30 group-hover:scale-110 transition-transform flex-shrink-0">
                  <MapPin size={20} className="text-gold" strokeWidth={2} fill="currentColor" />
                </div>
                <span className="text-gray-200 text-base">Melbourne, Australia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/20 pt-4">
          <div className="compliance-info space-y-1.5 text-xs text-gray-300 leading-relaxed max-w-5xl mx-auto">
            <p className="text-center md:text-left">
              Apex Prime Capital operates under accreditation from Oxcel Finance.
              All services follow the regulatory guidelines applicable in Australia.
            </p>
            <p className="text-center md:text-left">
              The information presented is general in nature and does not replace
              individualised financial advice.
            </p>
            <p className="text-center md:text-left">
              Apex Prime Capital follows compliance practices aligned with Oxcel Finance
              guidelines, respecting privacy, data protection, and ethical standards in
              the Australian financial sector.
            </p>
          </div>

          <div className="mt-5 text-center">
            <div className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 border border-gold/20">
              <p className="text-gray-300 text-sm">&copy; {currentYear} Apex Prime Capital. All rights reserved.</p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
