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
  return (
    <div className="App">
      <Header />
      <main>
        <Billboard />
        <Divider />
        <Services />
        <Divider />
        <About />
        <Divider />
        <Remote />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
