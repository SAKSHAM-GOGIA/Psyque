
// import Aboutus from './components/Aboutus/Aboutus.js';
import Navbar from './components/Navbar/Navbar.js';
// import Services from './components/services/services.js';
// import OurFeatures from './components/ourfeatures/ourfeatures.js';
import Footer from './components/footer/footer.js'
// import Hero from './components/Hero/Hero.js';
// import Loginpage from './components/login-page/loginpage.js';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home.js';
import Login from './pages/Login.js';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/login/" element = {<Login/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
