import Content from "./assets/components/projects/Content";
import Navbar from "./assets/components/navigation/Navbar";
import Hero from "./assets/components/hero/Hero";

function App(props) {
  return (
    <Navbar>
      <main>
        <Hero />
        <Content url={props.url} type={true} />
        <Content url={props.url} type={false} />
      </main>
    </Navbar>
  );
}

export default App;
