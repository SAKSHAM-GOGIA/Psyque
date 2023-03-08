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
import Blog3 from './components/blog/blog3.js';
import Blog1 from './components/blog/blog1.js';
import Blog2 from './components/blog/blog2.js';
import Forum1 from './components/forum/forum1.js';
import Forum2 from './components/forum/forum2.js';
import Forum3 from './components/forum/forum3.js';
import BlogPage from './components/blogpage/blogpage.js';
import CreateBlog from './components/createblog/createblog.js';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/login/" element = {<Login/>} />
        <Route path = "/communities/" element = {<Communities/>} />
        <Route path = "/communities/blog1" element = {<Blog1/>} />
        <Route path = "/communities/blog2" element = {<Blog2/>} />
        <Route path = "/communities/blog3" element = {<Blog3/>} />
        <Route path = "/communities/forum1" element = {<Forum1/>} />
        <Route path = "/communities/forum2" element = {<Forum2/>} />
        <Route path = "/communities/forum3" element = {<Forum3/>} />
        <Route path = "/communities/blogs" element = {<BlogPage/>} />
        <Route path = "/communities/blogs/createblog" element = {<CreateBlog/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
