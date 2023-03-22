import React from "react"
import logo from '../icons/logo.svg'
import styled from 'styled-components'

const LogoImg = styled.img`
  width: 220px;
`

///function Login() {
  const Login = () =>{
    return (
      <div className='Login'>
        <header>
          <LogoImg src={logo} alt="logo"/>
        </header>
        <p>
          Fazer Login
        </p>
        <div className='Boxes'>
         <div className='Campo'>
            <label htmlFor='user'>Usuário</label>
            <input  type='number' placeholder="Drt"/>
          </div> 
          {/* <FormControl width='50%' isRequired>
            <FormLabel>Usuário</FormLabel>
            <Input placeholder='drt'/>
          </FormControl> */}
          <div className='Campo'>
          <label htmlFor='password'>Senha</label> 
            <input type='password' placeholder="Senha"/>
            <p className="Animation">
            <a href='/gerenciamento'>
            <button className='btn' type='button' value='Turmas'>Entrar</button>
            </a>
            </p>
          </div>
          {/* <p><button className='btn' type='submit'>Entrar</button></p> */}
        </div>
        
       
        
      </div>
    );
  }
  
  export default Login