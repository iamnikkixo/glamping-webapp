import Hero from './components/Hero';
import About from './components/About';
import Accomodation from './components/Accomodation/Accomodation';
import Experience from './components/Experience/Experience';
import Gallery from './components/Gallery';
import Testimony from './components/Testimony/Testimony';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { ModalProvider } from './utils/ModalContext';
import FormModal from './components/Forms/FormModal';
import ReserveForm from './components/Forms/ReserveForm';

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
      <FormModal title="Reserve Your Tent" modalName="reserveModal">
        <ReserveForm />
      </FormModal>
    </ModalProvider>
  );
}

export default App;
