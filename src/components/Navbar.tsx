import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css";
import logo from "../assets/logo.png";

export const Navbar: React.FC = () => {
  const { user, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(true);

  // 🔹 Alternar la visibilidad del menú
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="top-section">
        <img src={logo} alt="Krusty Krab" className="logo" />

        <div className="right-section">
          <span className="cart-icon">🛒</span>
          {user ? (
            <div className="user-menu">
              <button className="user-button" onClick={toggleMenu}>
                {user.usuario} ⬇
              </button>
              {menuOpen && (
                <div className="dropdown-menu">
                  <Link to="/orders">Ver pedidos</Link>
                  <button onClick={logout}>Cerrar sesión</button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="button">
              Iniciar sesión
            </Link>
          )}
        </div>
      </div>

      <div className="links">
        <Link to="/">HOME</Link>
        <Link to="/menu">VER MENÚ</Link>
      </div>
    </nav>
  );
};
