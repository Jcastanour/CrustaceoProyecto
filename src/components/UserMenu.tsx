import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import {
  FaUserCircle,
  FaSignOutAlt,
  FaClipboardList,
  FaChevronDown,
} from "react-icons/fa"; // Importamos íconos
import "./UserMenu.css";

export const UserMenu: React.FC = () => {
  const { user, logout } = React.useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // 🔹 Alternar visibilidad del menú
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // 🔹 Cierra el menú si el usuario hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="user-menu" ref={menuRef}>
      <button className="user-button" onClick={toggleMenu}>
        <FaUserCircle className="user-icon" /> {user?.usuario}
        <FaChevronDown className={`dropdown-icon ${menuOpen ? "open" : ""}`} />
      </button>
      {menuOpen && (
        <div className="dropdown-menu">
          <Link to="/orders" onClick={() => setMenuOpen(false)}>
            <FaClipboardList className="menu-icon" /> Ver pedidos
          </Link>
          <button
            onClick={() => {
              logout();
              setMenuOpen(false);
            }}
          >
            <FaSignOutAlt className="menu-icon" /> Cerrar sesión
          </button>
        </div>
      )}
    </div>
  );
};
