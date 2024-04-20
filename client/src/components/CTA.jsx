import Section from './Section';
import { useModal } from '../utils/ModalContext';

const CTA = () => {
  const { toggleModal } = useModal();

  return (
    <Section className="px-10 lg:px-20 font-poppins text-white">
      <div className="py-10 px-5 mx-auto max-w-screen-xl md:py-12 lg:px-6 bg-gradient-to-tr from-indigo-800 to-indigo-900 rounded-[2.5rem] lg:rounded-[3.5rem]">
        <div className="mx-auto max-w-screen-md text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-6">
            Unwind at Starry Haven Retreat
          </h2>
          <h2 className="mb-5 md:mb-6 lg:mb-8 text-2xl md:text-3xl lg:text-4xl font-bold">
            Plan Your Glamp-tastic Getaway Today!
          </h2>

          <button
            onClick={() => toggleModal('reserveModal')}
            className="btn-white"
          >
            Reserve Now
          </button>
        </div>
      </div>
    </Section>
  );
};

export default CTA;
