import './css-html/App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from './pages/Homepage';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        {/*<Routes>
          <Route path="/" element={<SOME OTHER ROUTE ETC.... />} />
        </Routes>*/}
      </Router>
    </>
  );
}

export default App;
