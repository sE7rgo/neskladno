import React from "react";
import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./routes/about";
import Main from "./routes/main";
import Welcome from "./routes/welcome";

function App() {
  return (
    <Router>
      <div className="app h-screen w-full bg-slate-50 p-6 transition-colors duration-500 ease-in-out dark:bg-slate-900">
        <Routes>
          <Route path="/shoz-prydumaj" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Welcome />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
