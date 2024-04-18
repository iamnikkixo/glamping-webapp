import Section from './Section';
import Heading from './Heading';
import { gallery } from '../constants/index';

const Gallery = () => {
  return (
    <Section id="gallery">
      <div className="container z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center"
          title="Gallery"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.map((list, index) => (
            <div key={index} className="grid gap-4">
              {list.map((item) => (
                <div key={item.id}>
                  <img
                    className="h-full w-full rounded-lg"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Gallery;
