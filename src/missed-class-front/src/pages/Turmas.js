import React from "react"
import logo from '../icons/logo.svg'
import icone_visualizacao from '../icons/icone_visualizacao.png'
import styled from "styled-components"

const title = ['Sistema de Chamada', 'Nome do Professor']

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

const TurmasContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 30px;
  justify-content: space-between ;
  gap: 70px 100px;
  margin-left:  100px;
  margin-right: 100px;
`

const TurmaItem = styled.div`
  border: 1px solid #48BDC2;
  background-color: #48BDC2 ;
  border-radius: 5px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

// const Turmas = () =>{
function Turmas() {
  return (
    <section className="header">
      <div className="logoleft">
        <img className="small-logo" src={logo} alt="logo" width='100px' />
      </div>
      <Container style={{marginBottom: "100px"}}>
        {title.map((txt) => (
          <Opcao style={{fontFamily:"Montagu Slab", fontSize:"25px", paddingLeft:"100px"}}>{txt}</Opcao>
        ))}
      </Container>
      
      <TurmasContainer>
        <TurmaItem>
          <h1>1º ANO</h1>
          <div className="container-icone">
            <img className="icone-visual" src={icone_visualizacao} alt="icone_visualizacao" width='100%'/>
          </div>

        </TurmaItem>
        <TurmaItem>
          <h1>2º ANO</h1>
          <div className="container-icone">
            <img className="icone-visual" src={icone_visualizacao} alt="icone_visualizacao" width='100%'/>
          </div>
        </TurmaItem>
        <TurmaItem>
          <h1>3º ANO</h1>
          <div className="container-icone">
            <img className="icone-visual" src={icone_visualizacao} alt="icone_visualizacao" width='100%'/>
          </div>
        </TurmaItem>
        <TurmaItem>
          <h1>4º ANO</h1>
          <div className="container-icone">
            <img className="icone-visual" src={icone_visualizacao} alt="icone_visualizacao" width='100%'/>
          </div>
        </TurmaItem>
        <TurmaItem>
          <h1>5º ANO</h1>
          <div className="container-icone">
            <img className="icone-visual" src={icone_visualizacao} alt="icone_visualizacao" width='100%'/>
          </div>
        </TurmaItem>
      </TurmasContainer>

    </section>
  );
}

export default Turmas