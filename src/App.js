
import Aboutus from './components/Aboutus/Aboutus.js';
import Navbar from './components/Navbar/Navbar.js';
import Services from './components/services/services.js';
import OurFeatures from './components/ourfeatures/ourfeatures.js';
import Footer from './components/footer/footer.js'
import Hero from './components/Hero/Hero.js';
import Loginpage from './components/login-page/loginpage.js';

function App() {
  return (
    <>
      <Navbar />
      {/* <Hero/>
      <Aboutus/>
      <Services/>
      <OurFeatures/> */}
      <Loginpage />

      <Footer />
    </>
  );
}

export default App;
