import React from "react"
import styled from "styled-components"
import Header from "../components/Header"
import { Flex } from "@chakra-ui/react"

const title = ['Sistema de Chamada', 'Nome do Professor']

const Opcao = styled.li`
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  margin: 30px;
  
  width: 100%;
  min-width: 120px;
  max-width: 1024px;
  
`
const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  max-width: 1024px;
`
const Sub = styled.section`
  display: flex;
  justify-content: center;
  font-size: 18px;

  width: 100%;
  max-width: 1024px;
`
const Boxes1 = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  grid-column-gap: 100px;
  margin-top: 50px;

  width: 100%;
  max-width: 1024px;
`
const Box1 = styled.section`
  width: 180px;
  padding: 20px;
  border-radius: 10px;
  border: 0px solid;
  box-shadow: 2px 3px 3px rgb(111, 107, 107);
  background-color:  #48BDC2;
}
`
const Box2 = styled.section`
  width: 180px;
  padding: 20px;
  border-radius: 10px;
  border: 0px solid;
  box-shadow: 2px 3px 3px rgb(111, 107, 107);
  background-color:  #48BDC2;
`
const Box3 = styled.section`
  width: 180px;
  padding: 20px;
  border-radius: 10px;
  border: 0px solid;
  box-shadow: 2px 3px 3px rgb(111, 107, 107);
  background-color:  #48BDC2;
}
`
const Boxes2 = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  grid-column-gap: 100px;
  margin-top: 50px;

  width: 100%;
  max-width: 1024px;
`

const Box4 = styled.section`
  width: 180px;
  padding: 20px;
  border-radius: 10px;
  border: 0px solid;
  box-shadow: 2px 3px 3px rgb(111, 107, 107);
  background-color:  #48BDC2;
`
const Box5 = styled.section`
  width: 180px;
  padding: 20px;
  border-radius: 10px;
  border: 0px solid;
  box-shadow: 2px 3px 3px rgb(111, 107, 107);
  background-color:  #48BDC2;
}
`

// const Turmas = () =>{
function Turmas() {
  return (
    <Flex justifyContent={"center"}>

    <div className="container">
      <Header/>
      <Container>
        {title.map((txt) => (
          <Opcao>{txt}</Opcao>
        ))}
      </Container>
      <Sub>Suas Turmas</Sub>
      <div className='box'>
        <Boxes1>
          <Box1>1 Ano</Box1>
          <Box2>2 Ano</Box2>
          <Box3>3 Ano</Box3>
        </Boxes1>
        <Boxes2>
          <Box4>4 Ano</Box4>
          <Box5>5 Ano</Box5>
        </Boxes2>
      </div>
    </div>
    </Flex>
  );
}

export default Turmas