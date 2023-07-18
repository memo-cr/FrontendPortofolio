import Projects from "./assets/components//projects/Projects";
import Tools from "./assets/components/tools/Tools";

function App(props) {
  return (
    <div>
      <Tools url={props.url} />
      <Projects url={props.url} />
    </div>
  );
}

export default App;
