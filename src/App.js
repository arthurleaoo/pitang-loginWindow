import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/login.js";
import DashAluno from "./pages/DashAluno/AlunoPage.js";
import DashProf from "./pages/DashProf/ProfessorPage.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/aluno" element={<DashAluno />} />
        <Route path="/professor" element={<DashProf />} />
      </Routes>
    </Router>
  );
};

export default App;
