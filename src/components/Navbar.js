import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Mon Portfolio</h2>
      <div className="nav-links">
        <Link to="/">Accueil</Link>
        <Link to="/projects">Projets</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;