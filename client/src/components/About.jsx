import Section from './Section';
import Heading from './Heading';
import { about, aboutExtra } from '../constants/index';
import GroupImage from '../assets/images/group.jpg';

const About = () => {
  return (
    <Section id="about">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center"
          title="About Us"
        />
        <div className="flex flex-wrap gap-8 md:gap-0 lg:gap-x-12">
          <div className="flex lg:flex-1 flex-col justify-center">
            {about.map((item, index) => (
              <div
                key={item.id}
                className={`${
                  index !== about.length - 1 ? 'mb-12 ' : 'md:mb-20'
                }`}
              >
                <h2 className="h2 mb-4">{item.subheader}</h2>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 md:mt-0 lg:flex-1">
            <img className="rounded-xl" src={GroupImage} alt="group photo" />
            <div className="grid grid-cols-3 gap-5 mt-14">
              {aboutExtra.map((item) => (
                <div
                  key={item.id}
                  className="h-20 flex flex-col items-center justify-center py-6 even:border-l-2 even:border-r-2"
                >
                  <h2 className="uppercase font-poppins font-medium  text-2xl lg:text-3xl text-orange-500">
                    {item.category}
                  </h2>
                  <p className="mt-4 md:mt-6 text-xl md:text-2xl font-medium font-poppins text-gray-800">
                    {item.value}{' '}
                    {item.icon ? (
                      <span>
                        <i className={`text-yellow-500 ${item.icon}`} />
                      </span>
                    ) : null}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
