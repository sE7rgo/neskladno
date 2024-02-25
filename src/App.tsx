import React, { useState } from "react";
import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { AppDataContext, AppDataType, Difficulty } from "./context/AppDataContext";
import About from "./routes/about";
import Main from "./routes/main";
import Welcome from "./routes/welcome";

const min = 60000;

function App() {
  const [duration, setDuration] = useState<AppDataType["duration"]>(30),
    [pace, setPace] = useState(5),
    [difficulty, setDifficulty] = useState<AppDataType["difficulty"]>(Difficulty.Letter),
    [link, setLink] = useState<AppDataType["link"]>("");

  const handleDurationClick = () => {
    // adding 5 min onClick. Max 60 min, min 5 min
    duration >= 60 ? setDuration(5) : setDuration(prev => prev + 5);
  };
  const handleDifficultyClick = () => {
    // increasing difficulty
    difficulty >= 3 ? setDifficulty(Difficulty.Letter) : setDifficulty(prev => prev + 1);
  };
  const handleLinkInsert = (link: string) => {
    setLink(link);
  };

  return (
    <Router>
      <div className="app h-screen w-full bg-slate-50 p-6 transition-colors duration-500 ease-in-out dark:bg-slate-900">
        <AppDataContext.Provider value={{ duration, pace, difficulty, link }}>
          <Routes>
            <Route path="/game" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/"
              element={
                <Welcome
                  duration={duration}
                  onDurationClick={handleDurationClick}
                  difficulty={difficulty}
                  onDifficultyClick={handleDifficultyClick}
                  link={link}
                  onLinkInsert={handleLinkInsert}
                />
              }
            />
          </Routes>
        </AppDataContext.Provider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
