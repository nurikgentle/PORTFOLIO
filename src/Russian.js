import './App.css';
import Header from './russian/header/Header';
import Nav from './russian/nav/Nav';
import About from './russian/about/About';
import Experience from './russian/experience/Experience';
import Services from './russian/services/Services';
import Portfolio from './russian/portfolio/Portfolio';
import Testimonials from './russian/testimonials/Testimonials';
import Contact from './russian/contact/Contact';
import Footer from './russian/footer/Footer';

function Russian() {
  return (
    <div>
      <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </>
    </div>
  );
}

export default Russian;