import React, { useMemo, useState } from "react";
import logo from "../icons/logo.svg";
import styled from "styled-components";

const LogoImg = styled.img`
  width: 220px;
`;

function Login() {

  const [password, setPassword] = useState("mackenzie");

  return (
    <div className="Login">
      <header>
        <LogoImg src={logo} alt="logo" />
      </header>
      <p>Entrar</p>
      <div className="Boxes">
        <div className="Campo">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="Animation">
            <a href={password == "mackenzie" ? "/lista" : "/"}>
              <button className="btn" type="button">
                Confirmar
              </button>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
