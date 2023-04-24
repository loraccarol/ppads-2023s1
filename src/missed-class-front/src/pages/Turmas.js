import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { Flex, Box, IconButton, Text, Link, Grid, GridItem } from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import { api } from "../service/api";
import { useMemo, useState } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1024px;
  margin-top: 2em
`;
const Sub = styled.section`
  display: flex;
  justify-content: center;
  font-size: 18px;

  width: 100%;
  max-width: 1024px;
  margin-top: 1em
`;

function Turmas() {
  const [professoresList, setProfessoresList] = useState([]);
  const [turmasList, setTurmasList] = useState([]);

  useMemo(() => {
    localStorage.removeItem("turmaId");

    api.get("/professores/").then((response) => {
      setProfessoresList(response.data);
    });

    api.get("/turmas/").then((response) => {
      setTurmasList(response.data);
    });
  }, []);

  return (
    <Flex justifyContent={"center"}>
      <div className="container">
        <Header />
        <Container>
          {
            professoresList.find((professor) => professor.drt == Number(localStorage.getItem("professor")))?.nome
          }
        </Container>
        <Sub>Selecione uma turma</Sub>
        <Grid marginTop={"5em"} w={"100%"} templateColumns='repeat(4, 1fr)' gap={5}>
          {turmasList &&
            turmasList.map((turma) => {
              return (
                <GridItem
                  key={turma.codigo}
                  backgroundColor={"#48bdc2"}
                  borderRadius={"8px"}
                  boxShadow={
                    "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"
                  }
                >
                  <Flex justifyContent={"center"} alignItems={"center"} padding={"10px"}>
                    <Text margin={2}>
                      {turma.codigo + " - " + turma.ano + "° ANO"}
                    </Text>
                    <Link href={"/chamada/" + turma.id}>
                      <IconButton
                        size="sm"
                        icon={<ViewIcon />}
                        onClick={() => localStorage.setItem("turmaId", turma.id)}
                      />
                    </Link>
                  </Flex>
                </GridItem>
              );
            })}
        </Grid>
      </div>
    </Flex>
  );
}

export default Turmas;
