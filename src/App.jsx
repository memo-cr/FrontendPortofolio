import Projects from "./assets/components//projects/Projects";
import Tools from "./assets/components/tools/Tools";
import Navbar from "./assets/components/navigation/Navbar";
import Hero from "./assets/components/hero/Hero";
import AboutMe from "./assets/components/about/AboutMe";
import "./index.css";

function App(props) {
  return (
    <div className="body">
      <Navbar />
      {/* <div className="container">
        <Hero />
        <Tools url={props.url} />
        <Projects url={props.url} />
        <AboutMe />
      </div> */}
    </div>
  );
}

export default App;
