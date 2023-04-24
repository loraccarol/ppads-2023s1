import { Link, Text, Grid, Flex, GridItem, Button } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { api } from "../service/api";
import Header from "../components/Header";
import DataGridData from "../components/DataGridData";

export default function ListaProfs() {
  const [professoresList, setProfessoresList] = useState([]);

  useMemo(() => {
    localStorage.removeItem("professor");

    api.get("/professores/").then((response) => {
      setProfessoresList(response.data);
    });
  }, []);

  const profColumns = [
    { field: "id", headerName: "DRT", flex: 2 },
    {
      field: "nome",
      headerName: "Nome",
      flex: 3,
    },
    {
      field: "acao",
      headerName: "Ação",
      flex: 1.5,
      renderCell: (params) => {
        return (
          <>
            <Link href="/turmas">
              <Button
                backgroundColor={"#C3E3E8"}
                p={5}
                borderRadius={"10px"}
                _hover={{ bg: "#3ea8ac" }}
                transition={"1s"}
                width={"100%"}
                onClick={() => localStorage.setItem("professor", params.row.id)}
              >
                <Text>SELECIONAR</Text>
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  let profRows = [];
  professoresList.map((professor) => {
    profRows.push({
      id: professor.drt,
      nome: professor.nome,
      tipoFuncao: professor.tipoFuncao,
    });
  });

  return (
    <Flex justifyContent={"center"}>
      <Grid width={"70%"} height={"60%"}>
        <GridItem>
          <Header />
        </GridItem>
        <GridItem marginTop={2}>Selecione o professor</GridItem>
        {professoresList && (
          <GridItem>
            <DataGridData colunas={profColumns} linhas={profRows} />
          </GridItem>
        )}
      </Grid>
    </Flex>
  );
}
