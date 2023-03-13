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
const Sub = styled.section`
  font-size: 19px;
`
const Boxes1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:50px;
`
const Box1 = styled.section`
  margin: auto;
  margin-right: 50px;
  width: 180px;
  padding: 20px;
  border-radius: 10px;
  border: 0px solid;
  box-shadow: 2px 3px 3px rgb(111, 107, 107);
  background-color:  #48BDC2;
}
`
const Box2 = styled.section`
  margin: auto;
  margin-left: 50px;
  width: 180px;
  padding: 20px;
  border-radius: 10px;
  border: 0px solid;
  box-shadow: 2px 3px 3px rgb(111, 107, 107);
  background-color:  #48BDC2;
`
const Boxes2 = styled.div`
  align-items: center;
`

    // const Turmas = () =>{
    function Turmas() {
    return (
      <div className="header">
        <div className="logoleft">
          <img className="small-logo" src={logo} alt="logo" width='100px'/> 
          </div>
          <Container>
            {title.map( (txt) => (
              <Opcao>{txt}</Opcao>
            ))}
           </Container>
           <Sub>Suas Turmas</Sub>
          <Boxes1>
          <Box1>1 Ano</Box1>
           <Box2>2 Ano</Box2>
          </Boxes1>
          <Boxes2>
          <Box3>3 Ano</Box3>
           <Box4>4 Ano</Box4>
           <Box5>5 Ano</Box5>
          </Boxes2>
           
      </div>
    );
  }
  
  export default Turmas