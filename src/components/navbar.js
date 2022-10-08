import { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Navbar({
  menuStatus,
  closingMenuHandler,
  headerHeight,
  navHeader,
}) {
  const navRef = useRef();
  const [screenWidth, setScreenWidth] = useState();
  const [activeIndex, setActiveIndex] = useState(0);
  const [navHeight, setHeight] = useState();

  function active(sectionPositionArr, headerH) {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      return 4;
    }
    if (
      window.scrollY + headerH >
        sectionPositionArr[1].headerRef.current.offsetTop &&
      window.scrollY + headerH <=
        sectionPositionArr[2].headerRef.current.offsetTop
    ) {
      return 1;
    }
    if (
      window.scrollY + headerH >
        sectionPositionArr[2].headerRef.current.offsetTop &&
      window.scrollY + headerH <=
        sectionPositionArr[3].headerRef.current.offsetTop
    ) {
      return 2;
    }
    if (
      window.scrollY + headerH >
        sectionPositionArr[3].headerRef.current.offsetTop &&
      window.scrollY + headerH <=
        sectionPositionArr[4].headerRef.current.offsetTop
    ) {
      return 3;
    }
    return 0;
  }

  useEffect(() => {
    function changeWidth() {
      setScreenWidth(window.innerWidth);
    }
    changeWidth();
    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  useEffect(() => {
    function hadnleScroll() {
      const index = active(navHeader, headerHeight);
      setActiveIndex(index);
    }
    document.addEventListener('scroll', hadnleScroll);
    return () => {
      document.removeEventListener('scroll', hadnleScroll);
    };
  });

  useEffect(() => {
    const height = () => {
      if (menuStatus && screenWidth < 768) {
        return navRef.current.scrollHeight + 8;
      }
      if (screenWidth > 768) {
        return navRef.current.scrollHeight;
      }
      return 0;
    };
    setHeight(height());
  }, [menuStatus, screenWidth]);

  return (
    <nav
      className="w-full md:py-2"
      ref={navRef}
      style={
        menuStatus
          ? { paddingTop: '.5rem', height: `${navHeight}px` }
          : { height: `${navHeight}px` }
      }
    >
      <div className="nav-wrapper mx-auto flex justify-center">
        <ul className="flex md:flex-row flex-col font-bold sticky items-center text-sm md:text-base text-center lg:text-lg text-white gap-4 md:gap-8">
          {navHeader.map((header, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index}>
              <a
                href={`#${header.headerID}`}
                onClick={closingMenuHandler}
                className={activeIndex === index ? 'active' : ''}
              >
                {header.headerTitle}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  menuStatus: PropTypes.bool.isRequired,
  closingMenuHandler: PropTypes.func.isRequired,
  navHeader: PropTypes.instanceOf(Array).isRequired,
  headerHeight: PropTypes.number.isRequired,
};
