import { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Navbar({ menuStatus, closingMenuHandler }) {
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
    if (menuStatus && screenWidth < 768) {
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
            <a href="#top" onClick={closingMenuHandler}>
              Strona Główna
            </a>
          </li>
          <li>
            <a href="#services" onClick={closingMenuHandler}>
              Usługi
            </a>
          </li>
          <li>
            <a href="#about" onClick={closingMenuHandler}>
              O nas
            </a>
          </li>
          <li>
            <a href="#remote" onClick={closingMenuHandler}>
              Pomoc zdalna
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closingMenuHandler}>
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  menuStatus: PropTypes.bool.isRequired,
  closingMenuHandler: PropTypes.func.isRequired,
};
