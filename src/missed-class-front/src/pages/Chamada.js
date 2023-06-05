import React from "react";
import Header from "../components/Header";
import { Flex, Grid, GridItem, Button, Select, Input } from "@chakra-ui/react";
import { api } from "../service/api";
import { useMemo, useState } from "react";
import DataGridData from "../components/DataGridData";
import Swal from "sweetalert2";
import { DataGrid } from "@mui/x-data-grid";

export default function Chamada() {

  const [faltantes, setFaltantes] = useState([]);
  const [date, setDate] = useState();
  const [professoresList, setProfessoresList] = useState([]);
  const [disciplinasList, setDisciplinasList] = useState([]);
  const [turmasList, setTurmasList] = useState([]);
  const [alunosList, setAlunosList] = useState([]);
  const [aula, setAula] = useState({
      chamada: null,
      data: date,
      disciplinaCodigo: null,
      turmaId: localStorage.getItem("turmaId")
  })
  const today = new Date().toISOString().split('T')[0]; // Obtém a data atual no formato 'yyyy-mm-dd'

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

    api.get("/disciplinas/").then((response) => {
      setDisciplinasList(response.data);
    });
  }, []);
  
  const handleCheck = (event) => {
    var updatedList = [...faltantes];
    if (event.target.checked) {
      updatedList = [...faltantes, event.target.value];
    } else {
      updatedList.splice(faltantes.indexOf(event.target.value), 1);
    }
    setFaltantes(updatedList);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setAula({
        ...aula,
        [e.target.name]: value
    });
  };

  const handleCriarAulaEFaltas = () => {
    
    if (aula.chamada == null || aula.data == null || aula.disciplinaCodigo == null) {
      Swal.fire({
        customClass: {
          container: "swal",
        },
        title: "ERRO", 
        text: "Verifique se todas as informações estão preenchidas.",
        icon: "error",
        showCancelButton: true,
        confirmButtonText: "Confirmar",
        confirmButtonColor: "black",
        cancelButtonText: "Cancelar",
        reverseButtons: true,
      })
    }


    api.post('/aulas/aula/criar', aula)
    .then((response) => {
      const promises = [];
  
      for (var i = 0; i < faltantes.length; i++) {
        const faltaData = {
          aulaId: response.data.id,
          alunoTia: faltantes[i]
        };
  
        const promise = api.post('/faltas/falta/criar', faltaData)
          .then((respondeF) => {
            console.log(respondeF.status);
          })
          .catch((error) => {
            console.error(error);
          });
  
        promises.push(promise);
      }
  
      Promise.all(promises)
        .then(() => {
          console.log('Todos os POSTs foram concluídos');
        })
        .catch((error) => {
          console.error('Ocorreu um erro durante a execução das requisições:', error);
        });
    });
  
  
  }

  const alunosColumns = [
    {
      field: "checkboxInput",
      headerName: " ",
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            <input type="checkbox" value={params.row.id} onChange={handleCheck} />
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

  function lancarFaltas() {
    Swal.fire({
      customClass: {
        container: "swal",
      },
      title: "Deseja lançar faltas?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      confirmButtonColor: "black",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        handleCriarAulaEFaltas();
        window.location.href = "/relatorio";
      }
    });
  }

  return (
    <Flex justifyContent={"center"}>
      <Grid width={"70%"} height={"50%"}>
        <GridItem>
          <Header />
        </GridItem>
        <GridItem marginTop={2}>
          <Flex width={"100%"} justifyContent={"center"}>
            <Flex margin={2}>
              Professor:{" "}
              {
                professoresList.find(
                  (professor) =>
                    professor.drt === Number(localStorage.getItem("professor"))
                )?.nome
              }
            </Flex>
            <Flex name="turmaId" margin={2}>
              Turma:{" "}
              {turmasList.find((turma) => turma.id === Number(turmaId))?.codigo}
            </Flex>
          </Flex>
          <Flex width={"100%"} justifyContent={"space-around"}>

           <Flex borderRadius={"8px"} background={"white"} width={"30%"}>
              <Input name="data" type="date" max={today} onChange={handleChange}/>
            </Flex>

            <Select name="chamada" background={"white"} width={"30%"} onChange={handleChange}>
              <option>Selecione a chamada</option>
              <option value={'1'}>Chamada 1</option>
              <option value={'2'}>Chamada 2</option>
            </Select> 

            <Select name="disciplinaCodigo" background={"white"} width={"30%"} onChange={handleChange}>
              <option>Selecione a disciplina</option>
              {disciplinasList.map((disciplina) => {
                return (
                  <option key={disciplina.codigo} value={disciplina.codigo}>{disciplina.nome}</option>
                )
              })}
            </Select> 

          </Flex>
        </GridItem>
        {alunosRows && (
          <GridItem>
            <DataGridData colunas={alunosColumns} linhas={alunosRows} /> 
          </GridItem>
        )}
        <GridItem margin={"2em"}>
          <Flex justifyContent={"flex-end"} width={"100%"}>
            <Button type="submite" onClick={() => lancarFaltas()}>Lançar faltas</Button>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
}
