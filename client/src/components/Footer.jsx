import { socials, contacts, navigation } from '../constants/index';
import { useLocation } from 'react-router-dom';
import Section from './Section';
import FooterBackground from '../assets/images/starrynight2-modified.jpg';
import Logo from '../assets/images/logo-white.svg';

const Footer = () => {
  const pathname = useLocation();

  return (
    <footer id="footer" className="font-poppins text-white pt-10">
      <Section
        backgroundImage={FooterBackground}
        className="w-full px-7 py-10 xl:py-10"
      >
        <div className="container relative">
          <div className="flex flex-col">
            <div className="flex flex-col  md:flex-row md:gap-[5rem] lg:gap-[10rem] ">
              <div>
                <a href="#hero" className="flex items-center mb-4">
                  <img src={Logo} className="w-16 md:w-24 " alt="Logo" />
                  <h1 className="inline-block ml-2 font-poppins text-white text-2xl md:text-3xl font-semibold">
                    Starlight Haven
                  </h1>
                </a>
                <div>
                  {contacts.map((item) => (
                    <a key={item.id} className="block py-1" href={item.href}>
                      <i className={`${item.icon} mr-3`} />
                      <span>{item.detail}</span>{' '}
                    </a>
                  ))}
                </div>
              </div>

              <div className="block sm-block border-b-2 my-5 md:hidden" />

              <div>
                <h2 className="h2 md:mt-8 mb-5 md:mb-8 text-white">
                  Quick Links
                </h2>
                <div className="grid grid-cols-3 gap-4 md:gap-x-20 lg:gap-x-28 font-medium">
                  {navigation.map((item) => (
                    <div
                      key={item.id}
                      className={` transition-colors hover:text-orange-500  ${
                        item.url === pathname.hash
                          ? 'z-2 lg:text-orange-500'
                          : 'text-white'
                      }
                  `}
                    >
                      <a href={item.url}>{item.title}</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-b-2 my-5 lg:my-8" />
            <div className="flex flex-col md:flex-row">
              <div className="mb-3 md:mb-0 flex-1">
                <span className="text-sm">
                  © 2024 Starlight Glamping Retreat. All rights reserved.
                </span>
                <i className="fas fa-facebok" />
              </div>
              <div className="flex-1 md:text-end">
                {socials.map((item) => (
                  <a href={item.href} className="px-2 text-md" key={item.id}>
                    <i className={item.icon} />
                  </a>
                ))}
                <p className="text-sm inline-block">
                  Website by<span className="font-bold"> Nikki</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </footer>
  );
};

export default Footer;
