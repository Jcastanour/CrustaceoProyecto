import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/Auth.css"; // Usamos estilos compartidos con Register

export const Register: React.FC = () => {
  const [usuario, setUsuario] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = () => {
    if (usuario.trim() && correo.trim() && password.trim()) {
      register(usuario, correo, password);
      navigate("/");
    } else {
      setError("Completa todos los campos.");
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">REGISTRAR</h2>

      {error && <p className="auth-error">{error}</p>}

      <label>Usuario:</label>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />

      <label>Correo:</label>
      <input
        type="email"
        placeholder="Correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />

      <label>Contraseña:</label>
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleRegister} className="auth-button">
        Registrarse
      </button>

      <p className="auth-link" onClick={() => navigate("/login")}>
        ¿Ya tienes cuenta? <span>Inicia sesión</span>
      </p>
    </div>
  );
};
