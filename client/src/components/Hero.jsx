import Section from './Section';
import Header from './Header';
import HeroImage from '../assets/images/starrynight.jpg';
import { useModal } from '../utils/ModalContext';

const Hero = () => {
  const { toggleModal } = useModal();

  return (
    <Section className="pt-[7rem]" id="hero" backgroundImage={HeroImage} height>
      <Header />
      <div className="container relative px-10 py-20">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="font-poppins font-semibold uppercase text-4xl leading-9 md:text-5xl md:leading-[3.25rem] lg:text-6xl lg:leading-[4rem] text-white">
            Experience the Wilderness in Comfort at{' '}
            <span className="inline relative text-transparent bg-clip-text bg-gradient-to-tr from-orange-300 to-orange-500 ">
              Starlight Haven Glamping
            </span>
          </h1>
          <p className="text-white font-mono text-sm leading-tight md:text-base md:leading-tight lg:text-base max-w-3xl mx-auto mt-5 mb-5 md:mb-6 lg:mt-6 lg:mb-7 ">
            Discover the beauty of the night under a star-studded sky in a
            luxury tent.
          </p>
          <button onClick={toggleModal} className="btn-white">
            Reserve Now
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
