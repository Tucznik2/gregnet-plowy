import { forwardRef } from 'react';
import Photo1 from '../images/realizations/01.jpg';
import Photo2 from '../images/realizations/02.jpg';
import Photo3 from '../images/realizations/03.jpg';
import Photo4 from '../images/realizations/04.jpg';
import Photo5 from '../images/realizations/05.jpg';

function About(props, ref) {
  return (
    <div id="about" className="about w-full" ref={ref}>
      <div className="about-wrapper mx-auto text-center px-1 py-4">
        <h3 className="my-3 font-bold text-lg md:text-xl">O nas</h3>
        <p className="my-6">
          Greg Net to firma lokalna, działająca w branży od 2008 roku.
          Specjalizuje się w szeroko pojętej obsłudze IT, świadczonej głównie
          dla małych i średnich przedsiębiorstw oraz klientów indywidualnych.
          Realizowane przez nas usługi informatyczne są zawsze na najwyższym
          poziomie, ponieważ analizujemy potrzeby Klienta i wybieramy najlepsze
          rozwiązania.
        </p>
        <h2 className="font-bold text-lg md:text-2xl">
          Niektóre z naszych realizacji
        </h2>
      </div>
      <div className="about-images w-full grid">
        <div className="about-img col-span-2">
          <img src={Photo1} alt="realization-1" />
        </div>
        <div className="about-img sm:col-span-2 sm:row-start-2 sm:col-start-3">
          <img src={Photo2} alt="realization-2" />
        </div>
        <div className="about-img">
          <img src={Photo3} alt="realization-3" />
        </div>
        <div className="about-img">
          <img src={Photo4} alt="realization-4" />
        </div>
        <div className="about-img sm:col-span-2">
          <img src={Photo5} alt="realization-5" />
        </div>
      </div>
    </div>
  );
}

export default forwardRef(About);
