import { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Navbar({ props }) {
  const navRef = useRef();
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    function changeWidth() {
      setScreenWidth(window.innerWidth);
    }
    changeWidth();
    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  });

  const navHeight = () => {
    if (props && screenWidth < 768) {
      return {
        height: `${navRef.current.scrollHeight + 8}px`,
      };
    }
    if (screenWidth > 768) {
      return {
        height: `${navRef.current.scrollHeight + 8}px`,
        maxHeight: '47px',
      };
    }
    return { height: '0px' };
  };

  return (
    <nav className="w-full" ref={navRef} style={navHeight()}>
      <div className="nav-wrapper mx-auto flex justify-center">
        <ul className="flex md:flex-row flex-col font-bold sticky items-center text-sm md:text-base text-center lg:text-lg text-white gap-4 md:gap-8 p-2">
          <li>
            <a href="#top">Strona Główna</a>
          </li>
          <li>
            <a href="#services">Usługi</a>
          </li>
          <li>
            <a href="#about">O nas</a>
          </li>
          <li>
            <a href="#remote">Pomoc zdalna</a>
          </li>
          <li>
            <a href="#contact">Kontakt</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  props: PropTypes.bool.isRequired,
};
