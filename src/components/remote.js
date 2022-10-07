import { forwardRef } from 'react';
import arrow from '../images/arrow-next-2825.png';
import logo from '../images/logo-przezroczyste.png';

function Remote(props, ref) {
  return (
    <div id="remote" className="remote w-full" ref={ref}>
      <div className="remote-wrapper mx-auto text-center relative px-1 py-4">
        <h3 className="my-3 font-bold text-lg md:text-xl">Pomoc zdalna</h3>
        <h2 className="font-bold text-lg md:text-2xl">
          Kliknij tutaj aby skorzystać z pomocy zdalnej (desktop)
        </h2>
        <img className="arrow-pointer absolute" src={arrow} alt="arrow" />
        <a href=" https://get.teamviewer.com/afdumes" target="_blank">
          <img className="logo absolute" src={logo} alt="logo" />
        </a>
      </div>
    </div>
  );
}

export default forwardRef(Remote);
