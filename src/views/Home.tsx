// frontend/src/views/Home.tsx
import React from "react";
import "../styles/Home.css";
import { Slider } from "../components/Slider";

export const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>¡Bienvenido a Burger Queen!</h1>
      <Slider />
    </div>
  );
};
