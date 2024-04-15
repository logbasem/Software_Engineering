import './css-html/App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
import Header from './pages/Header';
import Footer from './pages/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
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
