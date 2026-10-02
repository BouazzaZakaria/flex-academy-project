import { StickyNav } from './components/sections/StickyNav';
import { Hero } from './components/sections/Hero';
import { PathSplit } from './components/sections/PathSplit';
import { FoundersProof } from './components/sections/FoundersProof';
import { LaunchOffer } from './components/sections/LaunchOffer';
import { WebinarAgenda } from './components/sections/WebinarAgenda';
import { ScaleProgramme } from './components/sections/ScaleProgramme';
import { ComparisonTable } from './components/sections/ComparisonTable';
import { Testimonials } from './components/sections/Testimonials';
import { Pricing } from './components/sections/Pricing';
import { FAQ } from './components/sections/FAQ';
import { ChecklistCapture } from './components/sections/ChecklistCapture';
import { FinalCTA } from './components/sections/FinalCTA';
import { Footer } from './components/sections/Footer';
import { MobileBottomCTA } from './components/ui/MobileBottomCTA';
import { ModalProvider, useModal } from './context/ModalContext';
import { Modal } from './components/ui/Modal';
import { WebinarFlow } from './components/flows/WebinarFlow';
import { StrategyCallFlow } from './components/flows/StrategyCallFlow';

const ModalManager = () => {
  const { activeModal, closeModal } = useModal();
  return (
    <Modal isOpen={activeModal !== 'none'} onClose={closeModal}>
      {activeModal === 'webinar' && <WebinarFlow />}
      {activeModal === 'strategy' && <StrategyCallFlow />}
    </Modal>
  );
};

function App() {
  return (
    <ModalProvider>
      <div className="min-h-screen flex flex-col font-sans bg-cream text-neutral-900 selection:bg-accent/30 selection:text-white">
        <StickyNav />
        <main className="flex-grow">
          <Hero />
          <PathSplit />
          <FoundersProof />
          <LaunchOffer />
          <WebinarAgenda />
          <ScaleProgramme />
          <ComparisonTable />
          <Testimonials />
          <Pricing />
          <FAQ />
          <ChecklistCapture />
          <FinalCTA />
        </main>
        <Footer />
        <MobileBottomCTA />
        <ModalManager />
      </div>
    </ModalProvider>
  );
}

export default App;
