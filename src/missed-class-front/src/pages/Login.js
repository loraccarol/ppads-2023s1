import React from "react"

import logo from '../icons/logo.svg'

///function Login() {
  const Login = () =>{
    return (
      <div className='Login'>
        <header className='Logo-img'>
          <img src={logo} className='logo 'alt="logo" />
        </header>
        <p>
          Fazer Login
        </p>
        <div className='Boxes'>
         <div className='Campo'>
            <label htmlFor='user'>Usuário</label>
            <input  type='usuario' placeholder="Drt"/>
          </div> 
          {/* <FormControl width='50%' isRequired>
            <FormLabel>Usuário</FormLabel>
            <Input placeholder='drt'/>
          </FormControl> */}
          <div className='Campo'>
          <label htmlFor='password'>Senha</label> 
            <input  type='senha' placeholder="Senha"/>
          </div>
          <p><button className='btn' type='submit'>Entrar</button></p>
        </div>
        
       
        
      </div>
    );
  }
  
  export default Login