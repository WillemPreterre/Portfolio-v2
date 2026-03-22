import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 style={{ color: "#fff" }} className="logo">Mon Portfolio</h2>
      <div className="nav-links">
        <a href="#home">Accueil</a>
        <a href="#projects">Projets</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;