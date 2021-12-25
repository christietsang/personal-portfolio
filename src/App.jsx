import Topbar from "./components/topbar/topbar";
import Menu from "./components/intro/menu/Menu";
import Contact from "./components/contact/contact";
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio";
import Testimonials from "./components/testimonials/testimonials";
import Works from "./components/works/works";
import "./app.scss"
import React, {useState } from "react";


function App() {
  const [menuOpen, setMenuOpen] = useState(true)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="section">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
