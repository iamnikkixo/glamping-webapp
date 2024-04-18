import Section from '../Section';
import Heading from '../Heading';
import { amenities } from '../../constants/index';
import AmenityCard from './AmenityCard';
import ActivitiesCarousel from './ ActivitiesCarousel';

const Experience = () => {
  return (
    <Section id="experience">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center"
          title="Experience"
        />
        <div className="mb-16">
          <h2 className="h2 mb-12 lg:mb-16">Activities</h2>
          <ActivitiesCarousel />
        </div>

        <div>
          <h2 className="h2 mb-12 lg:mb-16">Amentities</h2>
          <div className="grid grid-cols-4 gap-2 md:gap-4 lg:gap-8">
            {amenities.map((item) => (
              <AmenityCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
