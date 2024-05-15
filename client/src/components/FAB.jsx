import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const FAB = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);

      const footerElement = document.getElementById('footer');
      if (footerElement) {
        const footerOffset = footerElement.offsetTop;
        const scrollPosition = window.scrollY + window.innerHeight;
        setAtBottom(scrollPosition >= footerOffset);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTarget = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTarget = () => {
    if (atBottom) {
      scrollToTarget('about');
    } else {
      scrollToTarget('footer');
    }
  };

  return (
    isVisible && (
      <Link
        to="about"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        className={`fixed fas ${
          atBottom ? 'fa-arrow-up' : 'fa-arrow-down'
        } bottom-10 right-10 bg-blue-500 text-white px-4 py-[14px] rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 z-50`}
        onClick={handleScrollToTarget}
      />
    )
  );
};

export default FAB;
