import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      {/* Sección superior con logo y carrito/botón */}
      <div className="top-section">
        <Link to="/">
          <img src={logo} alt="Krusty Krab" className="logo" />
        </Link>

        {/* Carrito y botón de sesión alineados a la derecha */}
        <div className="right-section">
          <span className="cart-icon">🛒</span>
          <button className="button">Iniciar sesión</button>
        </div>
      </div>

      {/* Enlaces centrados debajo */}
      <div className="links">
        <Link to="/">HOME</Link>
        <Link to="/menu">VER MENÚ</Link>
      </div>
    </nav>
  );
};
