import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faCircleInfo,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="contact-wrapper mx-auto text-center px-1 py-4 font-bold flex flex-col gap-10">
        <h3 className="my-3 font-bold text-lg md:text-xl">Kontakt</h3>
        <div className="contact-info flex flex-col md:flex-row items-center justify-around">
          <div className="nip flex items-center my-3 gap-2">
            <FontAwesomeIcon icon={faCircleInfo} className="info-icon" />
            <span className="text-lg md:text-xl">
              Greg Net Grzegorz Płowy
              <br /> NIP: 7951144475
            </span>
          </div>
          <div className="localisation flex items-center my-3 gap-2">
            <FontAwesomeIcon icon={faLocationDot} className="local-icon" />
            <span className="text-lg md:text-xl">
              Mikołaja Kopernika 21E <br />
              37-100 Łańcut
            </span>
          </div>
          <div className="phone flex items-center my-3 gap-2">
            <FontAwesomeIcon icon={faPhone} className="phone-icon" />
            <span className="text-lg md:text-xl">
              <a href="tel:662257522">+48 662257522</a>
            </span>
          </div>
          <a
            className="ask px-3 py-2 my-3 uppercase text-center rounded-md text-sm lg:text-xl"
            href="https://forms.office.com/r/KLc4n4TYPq"
            target="_blank"
            rel="noreferrer"
          >
            Zapytaj o wycenę!
          </a>
        </div>
      </div>
    </div>
  );
}
