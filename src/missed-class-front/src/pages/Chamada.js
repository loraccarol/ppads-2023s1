import React from "react";
import Header from "../components/Header";
import {
  Flex,
  Grid,
  GridItem,
  Button
} from "@chakra-ui/react";
import { api } from "../service/api";
import { useMemo, useState } from "react";
import DataGridData from "../components/DataGridData";

export default function Chamada() {
  const [professoresList, setProfessoresList] = useState([]);
  const [turmasList, setTurmasList] = useState([]);
  const [alunosList, setAlunosList] = useState([]);
  const [faltantes, setFaltantes] = useState([]);

  let turmaId = localStorage.getItem("turmaId");

  useMemo(() => {
    api.get("/professores/").then((response) => {
      setProfessoresList(response.data);
    });

    api.get("/turmas/").then((response) => {
      setTurmasList(response.data);
    });

    api.get("/alunos/" + turmaId).then((response) => {
      setAlunosList(response.data);
    });
  }, []);

  const alunosColumns = [
    {
      field: "falta",
      headerName: " ",
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            <input type="checkbox" onClick={() => faltantes.push(params.row)} />
          </>
        );
      },
    },
    { field: "id", headerName: "TIA", flex: 2 },
    {
      field: "nome",
      headerName: "Nome",
      flex: 3,
    },
  ];

  let alunosRows = [];
  alunosList.map((professor) => {
    alunosRows.push({
      id: professor.tia,
      nome: professor.nome,
    });
  });

  return (
    <Flex justifyContent={"center"}>
      <Grid width={"70%"} height={"50%"}>
        <GridItem>
          <Header />
        </GridItem>
        <GridItem marginTop={2}>
          <Flex width={"100%"} justifyContent={"center"}>
            <Flex margin={2}>
              Professor:
              {
                professoresList.find(
                  (professor) =>
                    professor.drt == Number(localStorage.getItem("professor"))
                )?.nome
              }
            </Flex>
            <Flex margin={2}>
              Turma:{" "}
              {turmasList.find((turma) => turma.id == Number(turmaId))?.codigo}
            </Flex>
          </Flex>
        </GridItem>
        {alunosRows && (
          <GridItem>
            <DataGridData colunas={alunosColumns} linhas={alunosRows} />
          </GridItem>
        )}
        <GridItem>
          <Button>Lançar faltas</Button>
        </GridItem>
      </Grid>
    </Flex>
  );
}
