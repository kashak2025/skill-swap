import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import LandingPage from './Pages/LandingPage.jsx';
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
import Faqs from './OthrPages/Faqs.jsx';
import AffilateProg from './OthrPages/AffilateProg.jsx';
import PrivacyPolicy from './OthrPages/PrivacyPolicy.jsx';
import Press2 from './OthrPages/Press-2.jsx';

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
          <Route path="/press-2" element={<Press2/>} />

          <Route path="/howitwork" element={<About/>} />
          <Route path="/faqs" element={<Faqs/>} />
          <Route path="/affilateprog" element={<AffilateProg/>} />
          <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
