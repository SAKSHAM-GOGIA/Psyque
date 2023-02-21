import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/footer/footer.js'
import ScrolltoTop from './ScrollToTop.js';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import Survey from './pages/Survey.js';
import { Fragment } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <ScrolltoTop/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/signup/" element={<Signup />} />
          <Route path="/surveys/" element={<Survey />} />
        </Routes>
        <Footer />
      </Fragment>

    </BrowserRouter>
  );
}

export default App;
