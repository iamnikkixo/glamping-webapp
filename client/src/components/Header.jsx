import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { navigation } from '../constants';
import MenuSvg from '../assets/svg/MenuSvg';
import Button from '../components/Button';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import Logo from '../assets/images/logo-white.svg';
import { useModal } from '../utils/ModalContext';

const Header = () => {
  const { toggleModal } = useModal();
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNav = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`absolute top-0 left-0 w-full z-50  ${
        openNavigation ? 'bg-gray-900' : 'bg-none'
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a href="#hero" className="flex items-center">
          <img src={Logo} className="w-12 md:w-14" alt="Logo" />
          <h1 className="inline-block ml-2 font-poppins text-white text-lg md:text-base">
            Starlight Haven
          </h1>
        </a>

        <nav
          className={`${
            openNavigation ? 'flex' : 'hidden'
          } fixed top-[6rem] left-0 right-0 bottom-0 bg-gray-900 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-poppins uppercase text-white transition-colors text-sm font-medium hover:text-orange-500 px-6 py-6 md:py-8 lg:-mr-0.25 ${
                  item.url === pathname.hash
                    ? 'z-2 lg:text-orange-500'
                    : 'text-white'
                } lg:leading-5 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>
        <Button
          onClick={toggleModal}
          className="uppercase font-medium text-sm text-white hidden lg:flex"
        >
          Reserve Now
        </Button>
        <Button
          className="ml-auto lg:hidden white "
          px="px-3"
          onClick={toggleNav}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
