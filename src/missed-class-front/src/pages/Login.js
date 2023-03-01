import React from "react"
import logo from '../icons/logo.svg'

///function Login() {
  const Login = () =>{
    return (
      <div className='App'>
        <header className='Logo-img'>
          <img src={logo} className='logo 'alt="logo" />
        </header>
        <p>
          Fazer Login
        </p>
        <div className='Boxes'>
          <p> <input class='Campo' type='usuario' placeholder="Digite o seu nome de usuário"/></p>
          <p> <input class='Campo' type='senha' placeholder="Digite a sua senha"/></p>
        </div>

        <p><button class='btn' type='submit'>Entrar</button></p>
       
        
      </div>
    );
  }
  
  export default Login