import { Grid, Flex, Tab, Tabs, TabList, TabPanel, TabPanels, useDisclosure, FormControl, Input, GridItem, FormLabel, Button } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import DataGridData from "../components/DataGridData";
import Header from "../components/Header";
import ModalCriar from "../components/ModalCriar";
import { api } from "../service/api";

export default function Gerenciamento() {

    const [professoresList, setProfessoresList] = useState([]);
    const [professor, setProfessor] = useState({
        drt: 0,
        nome: "",
        tipoFuncao: 0
    })

    const addProfs = useDisclosure();
    const addDisciplinas = useDisclosure();
    const addTurmas = useDisclosure();
    const addAlunos = useDisclosure();

    useMemo(() => 
    api.get('/professores/').then((response) => {
        setProfessoresList(response.data)
    }), [])


    const handleCriarProf = (event) => {
        event.preventDefault();

        let drt = 131230;
        let nome = "kasjdlaskdal"
        let tipoFuncao =1
        api.post('/professores/criar/professor', {
          drt,
          nome,
          tipoFuncao
        })
      }

    const columns = [
        { field: 'id', headerName: 'DRT', flex: 2 },
        {
            field: 'nome',
            headerName: 'Nome',
            flex: 2,
            editable: true,
        },
        {
            field: 'tipoFuncao',
            headerName: 'Função',
            flex: 2,
            editable: true,
        }
    ];

    let rows = []
    professoresList.map(professor => {
        rows.push({
            id: professor.drt,
            nome: professor.nome,
            tipoFuncao: professor.tipoFuncao
        })
    })

    return (
        <Flex justifyContent={"center"}>
            <Grid width={"70%"} height={"60%"}>
                <GridItem>
                    <Header />


                </GridItem>
                <Flex margin={"2rem"} marginBottom={"0"}>
                    <Tabs width={"100%"}>
                        <TabList>
                            <Tab>Professores</Tab>
                            <Tab>Disciplinas</Tab>
                            <Tab>Turmas</Tab>
                            <Tab>Alunos</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Flex justifyContent={"flex-start"} >
                                    <ModalCriar title={"Novo Professor"} body={
                                        <Flex flexDirection={"column"}>
                                            <FormControl>
                                                <FormLabel>DRT:</FormLabel>
                                                <Input />
                                            </FormControl>
                                            <FormControl>
                                                <FormLabel>Nome:</FormLabel>
                                                <Input />
                                            </FormControl>
                                            <FormControl>
                                                <FormLabel>Tipo Função:</FormLabel>
                                                <Input />
                                            </FormControl>
                                            <FormControl>
                                                <Button type="submit" onClick={handleCriarProf}>Criar</Button>
                                            </FormControl>
                                        </Flex>
                                    } isopen={addProfs.isOpen} open={addProfs.onOpen} close={addProfs.onClose} />
                                </Flex>
                                <DataGridData colunas={columns} linhas={rows} />
                            </TabPanel>
                            <TabPanel>
                                <Flex justifyContent={"flex-start"}>
                                    <ModalCriar title={"Nova Disciplina"} body={
                                        <Flex>
                                            <FormControl>
                                                <FormLabel>Nome:</FormLabel>
                                                <Input />
                                            </FormControl>
                                        </Flex>
                                    } isopen={addDisciplinas.isOpen} open={addDisciplinas.onOpen} close={addDisciplinas.onClose} />
                                </Flex>
                            </TabPanel>
                            <TabPanel>
                                <Flex justifyContent={"flex-start"}>
                                    <ModalCriar title={"Nova Turma"} body={
                                        <Flex>
                                            <FormControl>
                                                <FormLabel>Código:</FormLabel>
                                                <Input />
                                            </FormControl>
                                        </Flex>
                                    } isopen={addTurmas.isOpen} open={addTurmas.onOpen} close={addTurmas.onClose} />
                                </Flex>
                            </TabPanel>
                            <TabPanel>
                                <Flex justifyContent={"flex-start"}>
                                    <ModalCriar title={"Novo Aluno"} body={
                                        <Flex>
                                            <FormControl>
                                                <FormLabel>Nome:</FormLabel>
                                                <Input />
                                            </FormControl>
                                        </Flex>
                                    } isopen={addAlunos.isOpen} open={addAlunos.onOpen} close={addAlunos.onClose} />
                                </Flex>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Flex>
            </Grid>
        </Flex>
    )
}