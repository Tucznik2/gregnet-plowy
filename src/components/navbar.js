import { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Navbar({ menuStatus, closingMenuHandler , navHeader}) {
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
  }, []);

  useEffect(()=>{
    function hadnleScroll(){
      const activeScrollIndex = window.scrollY;
      console.log(activeScrollIndex)
    }
    document.addEventListener('scroll', hadnleScroll);
    return()=>{
      document.removeEventListener('scroll', hadnleScroll)
    }
  })

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
          <li>
            <a href={`#${header.headerID}`} onClick={closingMenuHandler}>
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
};
