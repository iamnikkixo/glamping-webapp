import Section from '../Section';
import Heading from '../Heading';
import { accommodations } from '../../constants/index';
import TentCard from './TentCard';

const Accomodation = () => {
  return (
    <Section id="accomodation">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center"
          title="Accomodation"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-10">
          {accommodations.map((item) => (
            <TentCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Accomodation;
