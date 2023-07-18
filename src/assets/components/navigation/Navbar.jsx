import "./nav.css";

export default function Navbar() {
  return (
    <div id="menu">
      <div id="menu-items">
        <a className="menu-item">/home</a>
        <a className="menu-item">/tools</a>
        <a className="menu-item">/projects</a>
        <a className="menu-item">/about-me</a>
      </div>
      <div id="menu-background"></div>
    </div>
  );
}
