import services from '../images/uslugiiii.svg';

export const Services = () => {
    return (
        <div className='services w-full'>
            <div className='services-wrapper mx-auto text-center px-1 py-4'>
                <h3 className='my-3 font-bold text-lg md:text-xl'>Usługi</h3>
                <h2 className='font-bold text-lg md:text-2xl'>Jakie usługi świadczymy</h2>
                <p className='my-6'>Projektujemy oraz instalujemy profesjonalne systemy monitoringu wizyjnego. Z naszych usług korzystają samorządy, instytucje oświatowe, a także liczne firmy prywatne i klienci indywidualni. Dzięki temu oferujemy sprawdzone rozwiązania, wsparte wiedzą i doświadczeniem. Zapewniamy kompleksowe systemy alarmowe z zastosowaniem najlepszej jakości sprzętów, a naszym Klientom proponujemy nowoczesne i skuteczne rozwiązania. Zajmujemy się serwisem komputerowym, instalujemy wszystkie typy systemów Windows oraz niezbędne sterowniki i oprogramowania .Oferujemy zdalną pomoc w rozwiązywaniu państwa problemów związanych z branżą IT.</p>
                <img src={services} alt='services' />
            </div>
        </div>
    );
};