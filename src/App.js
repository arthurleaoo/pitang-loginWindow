// App.js
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login.js";
import AlunoPage from "./components/AlunoPage.js";
import ProfessorPage from "./components/ProfessorPage.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/aluno" element={<AlunoPage />} />
        <Route path="/professor" element={<ProfessorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
