import { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Navbar({ menuStatus, closingMenuHandler, navHeader }) {
  const navRef = useRef();
  const [screenWidth, setScreenWidth] = useState();
  const [activeIndex, setActiveIndex] = useState(0);

  function nearestIndex(
    currentPosition,
    sectionPositionArray,
    startIndex,
    endIndex
  ) {
    if (startIndex === endIndex) return startIndex;
    if (startIndex === endIndex - 1) {
      if (
        Math.abs(
          sectionPositionArray[startIndex].headerRef.current.offsetTop -
            currentPosition +
            40
        ) <
        Math.abs(
          sectionPositionArray[endIndex].headerRef.current.offsetTop -
            currentPosition +
            40
        )
      )
        return startIndex;
      return endIndex;
    }
    const nextNearest = (startIndex + endIndex) / 2;
    const a = Math.abs(
      sectionPositionArray[nextNearest].headerRef.current.offsetTop -
        currentPosition +
        40
    );
    const b = Math.abs(
      sectionPositionArray[nextNearest + 1].headerRef.current.offsetTop -
        currentPosition +
        40
    );
    if (a < b) {
      return nearestIndex(
        currentPosition,
        sectionPositionArray,
        startIndex,
        nextNearest
      );
    }
    return nearestIndex(
      currentPosition,
      sectionPositionArray,
      nextNearest,
      endIndex
    );
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
      const index = nearestIndex(
        window.scrollY,
        navHeader,
        0,
        navHeader.length - 1
      );
      setActiveIndex(index);
    }
    document.addEventListener('scroll', hadnleScroll);
    return () => {
      document.removeEventListener('scroll', hadnleScroll);
    };
  }, []);

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
};
