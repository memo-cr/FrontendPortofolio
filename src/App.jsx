import Projects from "./projects/Projects";
import Tools from "./tools/Tools";

function App(props) {
  return (
    <div>
      {props.url}
      <Tools url={props.url} />
      <Projects url={props.url} />
    </div>
  );
}

export default App;
