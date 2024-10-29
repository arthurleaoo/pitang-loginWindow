import React, { useState } from "react";
import './login.css'
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await authService.login(email, password);
      const { token } = data;

      localStorage.setItem("authToken", token);

      navigate("/dashboard");
    } catch (err) {
      setError("Erro de autenticação ou credenciais inválidas.");
      console.error(err);
    }
  };

  return (
    <div className="container">
      <img id='img-login' src='./image.png'></img>
      <h1>Login</h1>
      <form className="formRegist" onSubmit={handleLogin}>
        <div>
          <input id='email' type="email" placeholder="Digite seu E-mail" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <input id='password' type="password" placeholder="Digite sua senha" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        {error && <p style={{ color: "white" }}>⚠️ {error}</p>}
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
export default Login;
