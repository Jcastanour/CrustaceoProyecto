// frontend/src/App.tsx
import React from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./views/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Menu } from "./views/Menu";

export const App: React.FC = () => {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </Router>
    </div>
  );
};
