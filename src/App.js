import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/footer/footer.js'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Communities from './pages/Communities.js';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/login/" element = {<Login/>} />
        <Route path = "/communities/" element = {<Communities/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
