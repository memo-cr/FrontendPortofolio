import Projects from "./assets/components//projects/Projects";
import Tools from "./assets/components/tools/Tools";
import Navbar from "./assets/components/navigation/Navbar";
import Hero from "./assets/components/hero/Hero";
import "./assets/styles/index.css";

function App(props) {
  return (
    <Navbar>
      <div className="main">
        <Hero />
        <Tools url={props.url} />
        <Projects url={props.url} />
      </div>
    </Navbar>
  );
}

export default App;
