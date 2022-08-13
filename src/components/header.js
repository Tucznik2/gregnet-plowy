import { Navbar } from './navbar';
import logo from '../images/logo.png';
import loc from '../images/local.png';
import phone from '../images/phone.png';

export const Header = () => {
    return (
        <header className='w-full'>
            <div className='header-wrapper px-1 py-5 h-full mx-auto font-bold flex items-center justify-around'>
                <a href='gregnet.pl'><img src={logo} alt='gregnet-logo' className='logo h-full' /></a>
                <div className='localisation flex items-center'>
                    <img className='local-icon h-full mx-2' src={loc} alt='local-icon' />
                    <span className='text-sm md:text-base lg:text-lg'>
                        Mikołaja Kopernika 21E <br />
                        37-100 Łańcut
                    </span>
                </div>
                <div className='phone flex items-center'>
                    <img className='phone-icon h-full mx-2' src={phone} alt='local-icon' />
                    <span className='text-sm md:text-base lg:text-xl'>
                        +48 662257522
                    </span>
                </div>
                <a className='ask px-3 py-2 uppercase text-center rounded-md text-sm lg:text-lg' href='https://forms.office.com/r/KLc4n4TYPq' target="_blank" rel='noreferrer'>Zapytaj o wycenę!</a>
            </div>
            <Navbar />
        </header>
    );
};