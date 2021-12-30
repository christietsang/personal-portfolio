import Topbar from "./components/topbar/Topbar";
import Menu from "./components/intro/menu/Menu";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Resume from "./components/resume/Resume";
import "./app.scss";
import React, { useState } from "react";
import AboutMe from "./components/aboutme/AboutMe"


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="section">
        <Intro/>
        <Portfolio/>
        <AboutMe/>
        <Resume/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
