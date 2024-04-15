import './css-html/App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
import { Login } from './pages/LoginRegister';
import { Register } from './pages/LoginRegister';
import SearchResults from './pages/SearchResults';
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

        </Routes>
        {/*<Routes>
          <Route path="/" element={<SOME OTHER ROUTE ETC.... />} />
        </Routes>*/}
      </Router>
      <Footer />
    </>
  );
}

export default App;
