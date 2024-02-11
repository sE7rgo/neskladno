import './App.css';

import {
  Link, Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import About from './routes/about';
import Main from './routes/main';
import Welcome from './routes/welcome';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Welcome</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/shoz-prydumaj">Main</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/shoz-prydumaj' element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Welcome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
