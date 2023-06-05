import { Flex, Grid, GridItem } from "@chakra-ui/react";
import Header from "../components/Header";
import DataGridData from "../components/DataGridData";
import { useMemo, useState } from "react";
import { api } from "../service/api";

export default function Relatorio() {

    const [aulasList, setAulasList] = useState([]);
    const [faltasList, setFaltasList] = useState([]);
    const [alunosList, setAlunosList] = useState([]);
    const [turmasList, setTurmasList] = useState([]);

    useMemo(() =>{
        api.get('/aulas/').then((response) => {
            setAulasList(response.data)
        })

        api.get('/faltas/').then((response) => {
            setFaltasList(response.data)
        })

        api.get('/alunos/').then((response) => {
            setAlunosList(response.data)
        })

        api.get('/turmas/').then((response) => {
            setTurmasList(response.data)
        })
    }, [])

    let rows = [];
    faltasList.map((falta) => {
      const aulaCorrespondente = aulasList.find((aula) => aula.id === falta.aulaId);
      const alunoCorrespondente = alunosList.find((aluno) => aluno.tia === falta.alunoTia);
      const turmaCorrespondente = turmasList.find((turma) => turma.id === aulaCorrespondente.turmaId);
    
      if (aulaCorrespondente) {
        rows.push({
          id: falta.id,
          aula: aulaCorrespondente.id,
          alunoTia: falta.alunoTia,
          alunoNome: alunoCorrespondente.nome,
          data: aulaCorrespondente.data,
          chamada: aulaCorrespondente.chamada,
          turma: aulaCorrespondente.turmaId,
          turmaCodigo: turmaCorrespondente.codigo
        });
      }
    });


    const columns = [ 
        { field: 'alunoTia', headerName: 'Tia', flex: 2 },
        { field: 'alunoNome', headerName: 'Nome', flex: 2 },
        { field: 'data', headerName: 'Aula', flex: 2, renderCell: (params) => {
            const dateObj = new Date(params.value);
            const formattedDate = `${dateObj.getDate()}-${dateObj.getMonth() + 1}-${dateObj.getFullYear()}`;
            return (
                <>
                    {formattedDate}
                </>
            )
        }},
        { field: 'chamada', headerName: 'Chamada', flex: 2},
        { field: 'turmaCodigo', headerName: 'Turma', flex: 2},
    ]

    return (
        <Flex justifyContent={"center"}>
            <Grid width={"70%"} height={"50%"}>
                <GridItem>
                    <Header />
                </GridItem>
                <GridItem>
                    <DataGridData colunas={columns} linhas={rows}/>
                </GridItem>
            </Grid>
            
        </Flex>
    )
}