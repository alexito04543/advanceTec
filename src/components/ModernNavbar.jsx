import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import "./ModernNavbar.css";

function ModernNavbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`modern-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">AdvanceTec</div>
        <div className={`nav-links ${showMenu ? "active" : ""}`}>
          <Link to="inicio" smooth duration={500}>
            Inicio
          </Link>
          <Link to="servicios" smooth duration={500}>
            Servicios
          </Link>
          <Link to="proyectos" smooth duration={500}>
            Proyectos
          </Link>
          <Link to="contacto" smooth duration={500}>
            Contacto
          </Link>
          <a href="#servicios" className="btn-cta">
            Ver servicios
          </a>
        </div>
        <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
          <FaBars />
        </div>
      </div>
    </nav>
  );
}

export default ModernNavbar;
