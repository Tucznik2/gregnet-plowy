import { forwardRef } from 'react';
import Gallery from './gallery';

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
      <Gallery />
    </div>
  );
}

export default forwardRef(About);
