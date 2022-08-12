export const Navbar = () => {
    return (
        <nav className='w-full p-2'>
            <div className='nav-wrapper mx-auto flex justify-center'>
                <ul className='flex flex-row font-bold sticky items-center text-xs md:text-base text-center lg:text-lg text-white'>
                    <li className='mx-4 active'>Strona Główna</li>
                    <li className='mx-4'>Usługi</li>
                    <li className='mx-4'>O nas</li>
                    <li className='mx-4'>Pomoc zdalna</li>
                    <li className='mx-4'>Kontakt</li>
                </ul>
            </div>
        </nav>
    );
};