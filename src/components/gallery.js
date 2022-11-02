import { useEffect, useState } from 'react';
import Photo1 from '../images/realizations/01.jpg';
import Photo2 from '../images/realizations/02.jpg';
import Photo3 from '../images/realizations/03.jpg';
import Photo4 from '../images/realizations/04.jpg';
import Photo5 from '../images/realizations/05.jpg';

export default function Gallery() {
  const [fadeProp, setFadeProp] = useState({ fade: 'fade-in' });
  const [imgIndex, setCurrentIndex] = useState(0);
  const images = [Photo1, Photo3, Photo2, Photo4, Photo5];

  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      if (fadeProp.fade === 'fade-in') {
        setFadeProp({
          fade: 'fade-out',
        });
      } else {
        setFadeProp({
          fade: 'fade-in',
        });
      }
    }, 1750);

    return () => clearInterval(fadeTimeout);
  }, [fadeProp]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="about-images w-full grid">
      <div className={`about-img col-span-2 ${fadeProp.fade}`}>
        <img src={images[imgIndex]} alt="realization-1" />
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
  );
}
