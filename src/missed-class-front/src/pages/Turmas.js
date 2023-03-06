import React from "react"
import logo from '../icons/logo.svg'
import styled from "styled-components"

const title = ['Sistema de Chamada','Nome do Professor']

const Opcao = styled.li`
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  min-width: 120px;
  margin: 30px;
`
const Container = styled.ul`
  display: flex;
  justify-content: center;
`
    // const Turmas = () =>{
    function Turmas() {
    return (
      <section className="header">
        <div className="logoleft">
          <img className="small-logo" src={logo} alt="logo" width='100px'/> 
          </div>
          <Container>
            {title.map( (txt) => (
              <Opcao>{txt}</Opcao>
            ))}
           </Container>
           <section font-size="15px">Suas Turmas</section>
      </section>
    );
  }
  
  export default Turmas