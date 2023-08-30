import Content from "./assets/components/projects/Content";
import Hero from "./assets/components/hero/Hero";
import styles from "./assets/styles/styles.module.css";
function App(props) {
  return (
    <main className={styles.main}>
      <Hero />
      <Content url={props.url} type={true} />
      <Content url={props.url} type={false} />
    </main>
  );
}

export default App;
