import logo from '../images/logo-przezroczyste.png';
import camera1 from '../images/kamera.png';
import camera2 from '../images/kamera-2.png';

export const Billboard = () => {
    return (
        <div className="billboard w-full rela">
            <img src={camera1} alt='black-camera' className='black-camera w-2/4 absolute hidden lg:block' />
            <img src={camera2} alt='white-camera' className='white-camera w-2/4 absolute hidden lg:block' />
            <div className='billboard-wrapper mx-auto px-1 py-4 gap-10 text-center'>
                <div className='copy t flex flex-col gap-3 mx-auto'>
                    <img src={logo} alt='gregnet-logo' />
                    <span className='uppercase md:text-xl'>Montaż Monitoringu i Serwis Komputerowy</span>
                </div>
                <div className='egagement flex flex-col items-center gap-5'>
                    <span className='text-lg'>Nie zwlekaj! Zapytaj o wycenę już teraz</span>
                    <a className='ask px-3 py-2 uppercase rounded-md text-sm lg:text-lg font-bold' href='https://forms.office.com/r/KLc4n4TYPq' target="_blank" rel='noreferrer'>Zapytaj o wycenę!</a>
                </div>
            </div>
        </div >
    );
};