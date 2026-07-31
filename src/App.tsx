import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Compliance from './components/Compliance';

function App() {
  const [isComplianceOpen, setIsComplianceOpen] = useState(false);

  return (
    <div className="min-h-screen smooth-scroll">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Contact />
      <FAQ />
      <Footer onComplianceClick={() => setIsComplianceOpen(true)} />
      <Compliance isOpen={isComplianceOpen} onClose={() => setIsComplianceOpen(false)} />
    </div>
  );
}

export default App;
