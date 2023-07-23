import Projects from "./assets/components//projects/Projects";
import Tools from "./assets/components/tools/Tools";
import Navbar from "./assets/components/navigation/Navbar";
import Hero from "./assets/components/hero/Hero";
import AboutMe from "./assets/components/about/AboutMe";
import "./assets/styles/index.css";

function App(props) {
  return (
    // <Navbar>
    <div className="main">
      <Hero />
      <Tools url={props.url} />
      <Projects url={props.url} />
      <AboutMe />
    </div>
    // </Navbar>
  );
}

export default App;
