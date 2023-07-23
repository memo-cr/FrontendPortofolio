import "../../styles/nav.css";

export default function Navbar({ children }) {
  return (
    <div>
      <section className="navbar">
        <input className="checkbox" type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>

        <div className="menu">
          <div id="menu-items">
            <a className="menu-item">/home</a>
            <a className="menu-item">/tools</a>
            <a className="menu-item">/projects</a>
            <a className="menu-item">/about-me</a>
          </div>
          <div id="menu-background"></div>
        </div>
      </section>
      {children}
    </div>
  );
}
