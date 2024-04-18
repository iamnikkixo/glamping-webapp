import Section from '../Section';
import Slider from 'react-slick';
import { testimonials } from '../../constants/index';
import TestimonyCard from './TestimonyCard';

const Testimony = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Section id="testimony" className="lg:px-20">
      <div className="container relative z-2">
        <div className="flex justify-center items-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8 max-w-sm sm:max-w-2xl lg:max-w-full mx-auto">
          <div className="w-full lg:w-2/5">
            <h1 className="text-center lg:text-start text-4xl font-poppins font-semibold mb-6 ">
              Testimonial
            </h1>
            <h2 className="text-center lg:text-start font-poppins text-xl md:text-2xl lg:text-4xl font-semibold text-gray-800 leading-[3.25rem]">
              2k+ Customers gave their{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-orange-500 to-amber-500">
                Feedback
              </span>
            </h2>
          </div>
          <div className="w-full lg:w-3/5">
            <div className="slider-container">
              <Slider {...settings}>
                {testimonials.map((item) => (
                  <TestimonyCard item={item} key={item.id} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimony;
