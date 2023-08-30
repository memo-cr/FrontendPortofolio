import styles from "../../styles/styles.module.css";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a className={styles.navtext}>home</a>
      <a className={styles.navtext}>about me</a>
      <a className={styles.navtext}>projects</a>
    </nav>
  );
}
