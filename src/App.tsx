import React, { useState } from "react";
import "./App.css";
import Landing from "./views/Landing/Landing";
import Experiences from "./views/Experiences/Experiences";
import Projects from "./views/Projects/Projects";
import Skills from "./views/Skills/Skills";
import { Navbar } from "./components/Navbar/Navbar";
import Footer from "./views/Footer/Footer";

function App() {
  const [view, setView] = useState<number>();

  const updateCurrentView = (view: number) => {
    setView(view);
  };

  return (
    <div className="relative font-roboto">
      <div className="flex justify-center">
        {/* <Navbar view={view} updateCurrentView={updateCurrentView} /> */}
      </div>
      <Landing updateCurrentView={updateCurrentView} />
      <Experiences />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
