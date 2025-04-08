import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

// Components
import HomePage from "./components/HomePage";

import WelcomePage from "./components/WelcomePage";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPlaying(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[#FEFAE0]">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/HomePage" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
