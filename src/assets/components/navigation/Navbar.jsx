import "./nav.css";

export default function Navbar({ children }) {
  return (
    <div className="navbar">
      <input class="checkbox" type="checkbox" name="" id="" />
      <div class="hamburger-lines">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
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
      {children}
    </div>
  );
}
