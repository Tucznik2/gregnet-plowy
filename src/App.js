import {useRef} from 'react';
import './App.css';
import Header from './components/header';
import Billboard from './components/billboard';
import Divider from './components/divider';
import Services from './components/services';
import About from './components/about';
import Remote from './components/remote';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  const billboardRef = useRef();
  const servicesRef = useRef();
  const aboutRef = useRef();  
  const remoteRef = useRef();
  const contactRef = useRef();
  const navHeader = [
    {
      headerTitle: "Strona główna",
      headerRef: billboardRef,
      headerID: "top"
    },
    {
      headerTitle: "Usługi",
      headerRef: servicesRef,
      headerID: "services"
    },
    {
      headerTitle: "O nas",
      headerRef: aboutRef,
      headerID: "about"
    },
    {
      headerTitle: "Pomoc zdalna",
      headerRef: remoteRef,
      headerID: "remote"
    },
    {
      headerTitle: "Kontakt",
      headerRef: contactRef,
      headerID: "contact"
    },
  ]

  return (
    <div className="App">
      <Header navHeader={navHeader}/>
      <main>
        <Billboard ref={billboardRef} />
        <Divider />
        <Services ref={servicesRef} />
        <Divider />
        <About ref={aboutRef}/>
        <Divider />
        <Remote ref={remoteRef}/>
        <Divider />
        <Contact ref={contactRef}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
