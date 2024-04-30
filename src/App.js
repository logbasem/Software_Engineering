import './css-html/App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
import ProfileSettings from './pages/ProfileSettings';
import { Login } from './pages/LoginRegister';
import { Register } from './pages/LoginRegister';
import SearchResults from './pages/SearchResults';
import Product from './pages/Product';
import About from './pages/About';
import Header from './pages/Header';
import Footer from './pages/Footer';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/profile-settings" element={<ProfileSettings />} />
          {/*<Route path="//location-settings" element={<LocationSettings />} />
          <Route path="/manage-lists" element={<ManageLists />} />
          <Route path="/faq" element={<FAQ />} />*/}
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
