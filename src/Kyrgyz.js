import './App.css';
import Header from './kyrgyz/header/Header';
import Nav from './kyrgyz/nav/Nav';
import About from './kyrgyz/about/About';
import Experience from './kyrgyz/experience/Experience';
import Services from './kyrgyz/services/Services';
import Portfolio from './kyrgyz/portfolio/Portfolio';
import Testimonials from './kyrgyz/testimonials/Testimonials';
import Contact from './kyrgyz/contact/Contact';
import Footer from './kyrgyz/footer/Footer';

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