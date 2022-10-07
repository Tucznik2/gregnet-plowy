/* eslint-disable react/jsx-props-no-spreading */
import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faLocationDot,
  faBars,
  faX,
} from '@fortawesome/free-solid-svg-icons';
import Navbar from './navbar';
import logo from '../images/logo.png';

export default function Header({ navHeader }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [headerH, setHeight] = useState(0);
  const headerRef = useRef();

  function toggleNavHandler() {
    setToggleMenu(!toggleMenu);
  }

  const props = {
    menuStatus: toggleMenu,
    closingMenuHandler: toggleNavHandler,
    headerHeight: headerH,
  };

  useEffect(() => {
    setHeight(headerRef.current.scrollHeight);
  });

  return (
    <header className="w-full" ref={headerRef}>
      <div className="header-wrapper px-1 py-5 h-full mx-auto font-bold flex flex-col md:flex-row items-center justify-around relative">
        <a href="http://gregnet.pl/">
          <img src={logo} alt="gregnet-logo" className="logo h-auto" />
        </a>
        <div className="localisation flex items-center gap-2">
          <FontAwesomeIcon icon={faLocationDot} className="local-icon" />
          <span className="text-sm md:text-base lg:text-lg">
            <a
              href="https://goo.gl/maps/EDsfW98vLKD1jiMZ6"
              target="_blank"
              rel="noreferrer"
            >
              Mikołaja Kopernika 21E <br />
              37-100 Łańcut
            </a>
          </span>
        </div>
        <div className="phone flex items-center gap-2">
          <FontAwesomeIcon icon={faPhone} className="phone-icon" />
          <span className="text-sm md:text-base lg:text-xl">
            <a href="tel:662257522">+48 662257522</a>
          </span>
        </div>
        <a
          className="ask px-3 py-2 uppercase text-center rounded-md text-sm lg:text-lg"
          href="https://forms.office.com/r/KLc4n4TYPq"
          target="_blank"
          rel="noreferrer"
        >
          Zapytaj o wycenę!
        </a>
        <button
          className="absolute right-5 text-xl md:hidden"
          type="button"
          onClick={toggleNavHandler}
        >
          <FontAwesomeIcon icon={!toggleMenu ? faBars : faX} />
        </button>
      </div>
      <Navbar {...props} navHeader={navHeader} />
    </header>
  );
}

Header.propTypes = {
  navHeader: PropTypes.instanceOf(Array).isRequired,
};
