import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/Auth.css"; // Usamos estilos compartidos con Register

export const Login: React.FC = () => {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    const success = login(correo, password);
    if (success) {
      navigate("/");
    } else {
      setError("Correo o contraseña incorrectos.");
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">INICIO DE SESIÓN</h2>

      {error && <p className="auth-error">{error}</p>}

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

      <button onClick={handleLogin} className="auth-button">
        Iniciar sesión
      </button>

      <p className="auth-link" onClick={() => navigate("/register")}>
        ¿No tienes cuenta? <span>Regístrate</span>
      </p>
    </div>
  );
};
