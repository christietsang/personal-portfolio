import Topbar from "./components/topbar/topbar";
import Contact from "./components/contact/contact";
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio";
import Testimonials from "./components/testimonials/testimonials";
import Works from "./components/works/works";
import "./app.scss"


function App() {
  return (
    <div className="app">
      <Topbar/>
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
