export default function Navbar() {
  return (
    <nav className="w-full p-2">
      <div className="nav-wrapper mx-auto flex justify-center">
        <ul className="flex flex-row font-bold sticky items-center text-xs md:text-base text-center lg:text-lg text-white">
          <li className="mx-4 active">
            <a href="#top">Strona Główna</a>
          </li>
          <li className="mx-4">
            <a href="#services">Usługi</a>
          </li>
          <li className="mx-4">
            <a href="#about">O nas</a>
          </li>
          <li className="mx-4">
            <a href="#remote">Pomoc zdalna</a>
          </li>
          <li className="mx-4">
            <a href="#contact">Kontakt</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
