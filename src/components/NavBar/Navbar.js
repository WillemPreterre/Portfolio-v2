import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img
          class="fit-picture"
          src="/wp-logo.png"
          alt="Willem Préterre"
          style={{width: "70px", height: "70px"}}
        />
      </Link>
      <div className="nav-links">
        {isHome ? <a href="#home">Accueil</a> : <Link to="/">Accueil</Link>}
        <a href="#projects">Projets</a>
        {isHome ? (
          <a href="#contact">Contact</a>
        ) : (
          <Link to="/#contact">Contact</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
