import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import logo from '../images/logo-przezroczyste.png';

export default function Footer() {
  return (
    <footer>
      <div className="footer-wrapper flex flex-col mx-auto px-1 py-3 justify-between gap-5">
        <div className="main-footer flex items-center justify-between">
          <img src={logo} alt="gregnet-logo" className="logo" />
          <a href="https://www.facebook.com/Greg-Net-334371619984403/">
            <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />
          </a>
        </div>
        <div className="credentials text-center flex items  justify-between text-white text-xs sm:text-base font-bold">
          <div>
            <p>&copy; 2022 GregNet</p>
          </div>
          <div>Design by Michał Płowy & Code by Filip Kula</div>
        </div>
      </div>
    </footer>
  );
}
