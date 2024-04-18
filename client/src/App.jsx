import Hero from './components/Hero';
import About from './components/About';
import Accomodation from './components/Accomodation/Accomodation';
import Experience from './components/Experience/Experience';
import Gallery from './components/Gallery';
import Testimony from './components/Testimony/Testimony';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { ModalProvider } from './utils/ModalContext';
import ReserveModal from './components/ReserveModal';

function App() {
  return (
    <ModalProvider>
      <div className="overflow-hidden">
        <Hero />
      </div>
      <About />
      <Accomodation />
      <Experience />
      <Gallery />
      <Testimony />
      <CTA />
      <Footer />
      <ReserveModal />
    </ModalProvider>
  );
}

export default App;
