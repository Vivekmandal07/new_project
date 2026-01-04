
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingModal from './components/BookingModal';
import CreatePackageModal from './components/CreatePackageModal';
import DestinationsSection from './components/DestinationsSection';
import PackageSection from './components/PackageSection';
import GallerySection from './components/GallerySection';
import ContactExpertModal from './components/ContactExpertModal';
import AiTravelAssistant from './components/AiTravelAssistant';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { INTERNATIONAL_DESTINATIONS, DOMESTIC_DESTINATIONS } from './constants';

const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'booking' | 'create' | 'expert' | null>(null);
  const [view, setView] = useState<'home' | 'destinations' | 'packages' | 'gallery' | 'contact' | 'about'>('home');

  // Simple scroll management for pseudo-routing
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setView('home'); 
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <Navbar setView={setView} scrollTo={scrollTo} onLogin={() => alert('Login functionality (Demo)')} />
      
      <main className="flex-grow pt-20">
        <Hero 
          onBookNow={() => setActiveModal('booking')} 
          onCreatePackage={() => setActiveModal('create')}
          onContactExpert={() => setActiveModal('expert')}
        />

        <AiTravelAssistant onBookNow={() => setActiveModal('booking')} />

        <div id="destinations">
          <DestinationsSection title="International Destinations" destinations={INTERNATIONAL_DESTINATIONS} />
          <DestinationsSection title="Domestic Destinations" destinations={DOMESTIC_DESTINATIONS} />
        </div>

        <div id="packages">
          <PackageSection />
        </div>

        <div id="gallery">
          <GallerySection />
        </div>

        <div id="about">
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <h2 className="text-4xl font-bold mb-8">About Way2GoHolidays</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                At Way2GoHolidays, we believe that travel is more than just visiting a new place; it's about creating memories that last a lifetime. Based in New Delhi, we specialize in crafting bespoke travel experiences tailored to your dreams. Whether it's the romantic streets of Paris, the tranquil backwaters of Kerala, or a custom-built adventure, we've got you covered.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />

      {/* Modals */}
      {activeModal === 'booking' && <BookingModal onClose={() => setActiveModal(null)} />}
      {activeModal === 'create' && <CreatePackageModal onClose={() => setActiveModal(null)} />}
      {activeModal === 'expert' && <ContactExpertModal onClose={() => setActiveModal(null)} />}
    </div>
  );
};

export default App;
