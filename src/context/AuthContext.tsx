import React, { createContext, useState, useEffect, ReactNode } from "react";

// 🔹 Interfaz para definir cómo es un usuario
interface Usuario {
  usuario: string;
  correo: string;
}

// 🔹 Interfaz del contexto de autenticación
interface AuthContextType {
  user: Usuario | null;
  login: (correo: string, password: string) => boolean;
  register: (usuario: string, correo: string, password: string) => void;
  logout: () => void;
}

// 🔹 Crear el contexto con valores iniciales vacíos
export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => false,
  register: () => {},
  logout: () => {},
});

// 🔹 Proveedor de autenticación que envuelve toda la aplicación
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Lista de usuarios registrados (guardados en localStorage)
  const [users, setUsers] = useState<Usuario[]>(
    JSON.parse(localStorage.getItem("users") || "[]").length > 0
      ? JSON.parse(localStorage.getItem("users") || "[]")
      : [{ usuario: "UsuarioPrueba", correo: "prueba@correo.com" }]
  );

  // Usuario logueado (guardado en localStorage)
  const [user, setUser] = useState<Usuario | null>(
    JSON.parse(localStorage.getItem("user") || "null")
  );

  // 🔹 Guardar usuarios en `localStorage` cuando cambian
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // 🔹 Función para iniciar sesión
  const login = (correo: string, password: string): boolean => {
    const foundUser = users.find((u) => u.correo === correo);
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem("user", JSON.stringify(foundUser));
      return true;
    }
    return false;
  };

  // 🔹 Función para registrar un nuevo usuario
  const register = (usuario: string, correo: string, password: string) => {
    const newUser: Usuario = { usuario, correo };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  // 🔹 Función para cerrar sesión
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
