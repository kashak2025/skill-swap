import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import LandingPage from './Landing/Hero.jsx';
import About from './Pages/About.jsx';
import Community from './Pages/Community.jsx';
import Market from './Pages/Market.jsx';
import Contact from './Pages/Contact.jsx';
import Signup from './Pages/Signup.jsx';
import Login from './Pages/Login.jsx';

// other pages
import Blog from './OthrPages/Blog.jsx';
import Carrer from './OthrPages/Carrer.jsx';
import Press from './OthrPages/Press.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/community" element={<Community />} />
          <Route path="/market" element={<Market />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login/>} />

          {/* Other Pages */}
          <Route path="/blog" element={<Blog/>} />
          <Route path="/carrer" element={<Carrer/>} />
          <Route path="/press" element={<Press/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
