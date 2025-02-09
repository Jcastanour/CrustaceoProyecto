import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { UserMenu } from "./UserMenu"; // Importamos el nuevo componente
import "./Navbar.css";
import logo from "../assets/logo.png";

export const Navbar: React.FC = () => {
  const { user } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="top-section">
        <img src={logo} alt="Krusty Krab" className="logo" />

        <div className="right-section">
          <span className="cart-icon">🛒</span>
          {user ? (
            <UserMenu />
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
