import { X, Shield, FileText, AlertCircle } from 'lucide-react';

interface ComplianceProps {
  isOpen: boolean;
  onClose: () => void;
}

const Compliance = ({ isOpen, onClose }: ComplianceProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity" onClick={onClose}></div>

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-4xl bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 rounded-2xl shadow-2xl border border-gold/20 transform transition-all">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>

          <div className="relative p-8 md:p-12">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-lg bg-navy-800/50 hover:bg-gold/20 text-gray-300 hover:text-gold transition-all duration-300 border border-gold/20 hover:border-gold/40 group"
              aria-label="Close"
            >
              <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-gold/30 to-gold/10 rounded-xl border border-gold/30">
                  <Shield size={32} className="text-gold" strokeWidth={2} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Compliance & Regulatory Information
                </h2>
              </div>
              <div className="h-1 w-24 bg-gradient-to-r from-gold to-transparent rounded-full"></div>
            </div>

            <div className="space-y-6 text-gray-200">
              <section className="bg-navy-800/30 p-6 rounded-xl border border-gold/10">
                <div className="flex items-start gap-3 mb-4">
                  <Shield size={20} className="text-gold mt-1 flex-shrink-0" />
                  <h3 className="text-xl font-semibold text-gold">Operating Standards</h3>
                </div>
                <p className="leading-relaxed">
                  Apex Prime Capital operates with transparency, integrity, and responsibility in accordance with applicable Australian laws and industry standards.
                </p>
              </section>

              <section className="bg-navy-800/30 p-6 rounded-xl border border-gold/10">
                <div className="flex items-start gap-3 mb-4">
                  <FileText size={20} className="text-gold mt-1 flex-shrink-0" />
                  <h3 className="text-xl font-semibold text-gold">AFCA Membership</h3>
                </div>
                <p className="leading-relaxed mb-3">
                  The founder of Apex Prime Capital, Marina Oliveira, is a member of the Australian Financial Complaints Authority (AFCA).
                </p>
                <div className="bg-navy-900/50 p-4 rounded-lg border border-gold/20 inline-block">
                  <p className="text-gold font-semibold">AFCA Membership Number: 119001</p>
                </div>
                <p className="leading-relaxed mt-3">
                  AFCA provides an independent external dispute resolution service for eligible complaints, ensuring additional consumer protection.
                </p>
              </section>

              <section className="bg-navy-800/30 p-6 rounded-xl border border-gold/10">
                <div className="flex items-start gap-3 mb-4">
                  <Shield size={20} className="text-gold mt-1 flex-shrink-0" />
                  <h3 className="text-xl font-semibold text-gold">AML/CTF Training</h3>
                </div>
                <p className="leading-relaxed">
                  The founder has completed formal training in Anti-Money Laundering and Counter-Terrorism Financing (AML/CTF) through a Registered Training Organisation (RTO), demonstrating knowledge of regulatory obligations, client identification procedures, and risk management practices.
                </p>
              </section>

              <section className="bg-navy-800/30 p-6 rounded-xl border border-gold/10">
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle size={20} className="text-gold mt-1 flex-shrink-0" />
                  <h3 className="text-xl font-semibold text-gold">Important Disclaimer</h3>
                </div>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    The information provided on this website is general in nature and is intended for informational purposes only. It does not constitute financial, legal, or credit advice. Financial products and credit solutions may not be suitable for all individuals or circumstances.
                  </p>
                  <p>
                    Apex Prime Capital provides financial guidance and support in accordance with regulatory requirements and industry best practices. Where applicable, services are delivered in association with authorised partners and are subject to relevant approvals, disclosures, and eligibility criteria.
                  </p>
                  <p className="font-semibold text-gold">
                    Clients are encouraged to seek independent professional advice before making any financial or credit decisions. Full disclosures, terms, and conditions will be provided prior to the delivery of any financial service or the formalisation of any credit arrangement.
                  </p>
                </div>
              </section>
            </div>

            <div className="mt-8 pt-6 border-t border-gold/20 text-center">
              <button
                onClick={onClose}
                className="px-8 py-3 bg-gradient-to-r from-gold to-amber-600 text-navy-900 font-semibold rounded-lg hover:from-amber-500 hover:to-gold transition-all duration-300 shadow-lg hover:shadow-gold/30 hover:scale-105 transform"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compliance;
