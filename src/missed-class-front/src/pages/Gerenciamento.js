import { Text, Grid, Flex, Tab, Tabs, TabList, TabPanel, TabPanels, useDisclosure, FormControl, Input, GridItem, FormLabel, Button, Menu, MenuButton, Portal, MenuList, MenuItem, MenuDivider, NumberInput, NumberInputField, Select } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import DataGridData from "../components/DataGridData";
import Header from "../components/Header";
import ModalCriar from "../components/ModalCriar";
import { api } from "../service/api";
import { TipoFuncao } from "../service/enum/TipoFuncao";

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

    const handleChangeProf = (e) => {
        const value = e.target.value;
        setProfessor({
            ...professor,
            [e.target.name]: value
        });
    };

    const handleCriarProf = (event) => {
        event.preventDefault();

        const profData = {
            drt: professor.drt,
            nome: professor.nome,
            tipoFuncao: professor.tipoFuncao
        };

        api.post('/professores/criar/professor', profData).then((response) => {
            professoresList.push(response.data)
            addProfs.onClose()
        });
    }

    const profColumns = [
        { field: 'id', headerName: 'DRT', flex: 2 },
        {
            field: 'nome',
            headerName: 'Nome',
            flex: 3
        },
        {
            field: 'tipoFuncao',
            headerName: 'Função',
            flex: 1.5,
            renderCell: (params) => {
                return (
                    <>
                        <Text>{params.row.tipoFuncao === TipoFuncao.Professor1 ? "PROF. PRINCIPAL" : 
                        params.row.tipoFuncao === TipoFuncao.Professor2 ? "PROF. ESPECÍFICO" : " - "}</Text>
                    </>
                )
            }
        },
        {
            field: 'acao',
            headerName: 'Ação',
            flex: 1,
            renderCell: (params) => {
                return (
                    <>

                        <Menu>
                            <MenuButton
                                as={Button}
                                backgroundColor={"#C3E3E8"}
                                p={5}
                                borderRadius={"10px"}
                                _hover={{ bg: '#3ea8ac' }}
                                transition={"1s"}
                                width={"80%"}
                            >
                                AÇÃO
                            </MenuButton>
                            <Portal>
                                <MenuList backgroundColor={"#C3E3E8"} p={10} borderRadius={"10px"}>
                                    <MenuItem _hover={{ bg: '#3ea8ac' }} transition={"1s"} borderRadius="10px" padding={"5px"}>Editar</MenuItem>
                                    <MenuItem _hover={{ bg: '#3ea8ac' }} transition={"1s"} borderRadius="10px" padding={"5px"}>Deletar</MenuItem>
                                </MenuList>
                            </Portal>
                        </Menu>
                    </>

                )
            }
        }
    ];

    let profRows = []
    professoresList.map(professor => {
        profRows.push({
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
                                        <Flex as={"form"} onSubmit={handleCriarProf} flexDirection={"column"}>
                                            <FormControl>
                                                <FormLabel>DRT:</FormLabel>
                                                <NumberInput>
                                                    <NumberInputField name="drt" onChange={handleChangeProf} />
                                                </NumberInput>
                                            </FormControl>
                                            <FormControl mt={2}>
                                                <FormLabel>Nome:</FormLabel>
                                                <Input
                                                    name="nome"
                                                    onChange={handleChangeProf} />
                                            </FormControl>
                                            <FormControl mt={2}>
                                                <FormLabel>Tipo Função:</FormLabel>
                                                <Select name="tipoFuncao" onChange={handleChangeProf} placeholder='Selecionar'>
                                                    <option value='0'>PROF. PRINCIPAL</option>
                                                    <option value='1'>PROF. ESPECÍFICO</option>
                                                </Select>
                                            </FormControl>
                                            <FormControl mt={5} mb={4}>
                                                <Button width={"100%"} type="submit" backgroundColor={"#C3E3E8"}>Criar</Button>
                                            </FormControl>
                                        </Flex>
                                    } isopen={addProfs.isOpen} open={addProfs.onOpen} close={addProfs.onClose} />
                                </Flex>
                                <DataGridData {...professor} colunas={profColumns} linhas={profRows} />
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