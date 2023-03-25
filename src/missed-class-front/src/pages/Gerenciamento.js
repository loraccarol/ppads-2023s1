import { Text, Grid, Flex, Tab, Tabs, TabList, TabPanel, TabPanels, useDisclosure, FormControl, Input, GridItem, FormLabel, Button, Menu, MenuButton, Portal, MenuList, MenuItem, MenuDivider, NumberInput, NumberInputField, Select } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import DataGridData from "../components/DataGridData";
import Header from "../components/Header";
import ModalCriar from "../components/ModalCriar";
import { api } from "../service/api";
import { TipoFuncao } from "../service/enum/TipoFuncao";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Gerenciamento() {

    const [professoresList, setProfessoresList] = useState([]);
    const [professor, setProfessor] = useState({
        drt: 0,
        nome: "",
        tipoFuncao: 0
    })

    const [turmasList, setTurmasList] = useState([]);
    const [turma, setTurma] = useState({
        ano: 0,
        codigo: "",
    })

    const [disciplinasList, setDisciplinasList] = useState([]);
    const [disciplina, setDisciplina] = useState({
        codigo: 0,
        nome: ""
    })

    const [alunosList, setAlunosList] = useState([]);
    const [aluno, setAluno] = useState({
        tia: 0,
        nome: "",
        turmaId: 0
    })

    const addProfs = useDisclosure();
    const addDisciplinas = useDisclosure();
    const addTurmas = useDisclosure();
    const addAlunos = useDisclosure();

    useMemo(() =>{
        api.get('/professores/').then((response) => {
            setProfessoresList(response.data)
        })

        api.get('/turmas/').then((response) => {
            setTurmasList(response.data)
        })

        api.get('/disciplinas/').then((response) => {
            setDisciplinasList(response.data)
        })

        api.get('/alunos/').then((response) => {
            setAlunosList(response.data)
        })
    }, [])

    const handleChangeProf = (e) => {
        const value = e.target.value;
        setProfessor({
            ...professor,
            [e.target.name]: value
        });
    };

    const handleChangeTurma = (e) => {
        const value = e.target.value;
        setTurma({
            ...turma,
            [e.target.name]: value
        });
    };

    const handleChangeDisciplina = (e) => {
        const value = e.target.value;
        setDisciplina({
            ...disciplina,
            [e.target.name]: value
        });
    };

    const handleChangeAluno = (e) => {
        const value = e.target.value;
        setAluno({
            ...aluno,
            [e.target.name]: value
        });
    };

    const handleCriarProf = (event) => {
        event.preventDefault();

        const profData = {
            drt: professor.drt,
            nome: professor.nome.toUpperCase(),
            tipoFuncao: professor.tipoFuncao
        };

        api.post('/professores/criar/professor', profData).then((response) => {
            professoresList.push(response.data)
            addProfs.onClose()
        });
    }

    const handleCriarTurma = (event) => {
        event.preventDefault();

        const turmaData = {
            ano: turma.ano,
            codigo: turma.codigo.toUpperCase()
        };

        api.post('/turmas/criar/turma', turmaData).then((response) => {
            turmasList.push(response.data)
            addTurmas.onClose()
        });
    }

    const handleCriarDisciplina = (event) => {
        event.preventDefault();

        const disciplinaData = {
            codigo: disciplina.codigo,
            nome: disciplina.nome.toUpperCase()
        };

        api.post('/disciplinas/criar/disciplina', disciplinaData).then((response) => {
            disciplinasList.push(response.data)
            addDisciplinas.onClose()
        });
    }

    const handleCriarAluno = (event) => {
        event.preventDefault();

        const alunoData = {
            tia: aluno.tia,
            nome: aluno.nome.toUpperCase(),
            turmaId: aluno.turmaId
        };

        api.post(`/alunos/criar/${aluno.turmaId}`, alunoData).then((response) => {
            alunosList.push(response.data)
            addAlunos.onClose()
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
                               <Text>AÇÃO</Text>
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

    const turmaColumns = [ 
        { field: 'ano', headerName: 'Ano', flex: 2 },
        { field: 'codigo', headerName: 'Código', flex: 2 },
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
    ]

    let turmaRows = []
    turmasList.map(turma => {
        turmaRows.push({
            id: turma.id,
            ano: turma.ano,
            codigo: turma.codigo
        })
    })

    const disciplinaColumns = [
        { field: 'id', headerName: 'Código', flex: 2 },
        {
            field: 'nome',
            headerName: 'Nome',
            flex: 3
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
                               <Text>AÇÃO</Text>
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

    let disciplinaRows = []
    disciplinasList.map(disciplina => {
        disciplinaRows.push({
            id: disciplina.codigo,
            nome: disciplina.nome
        })
    })

    const alunoColumns = [
        { field: 'id', headerName: 'TIA', flex: 2 },
        {
            field: 'nome',
            headerName: 'Nome',
            flex: 3
        },
        {
            field: 'turmaId',
            headerName: 'Turma',
            flex: 2
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
                               <Text>AÇÃO</Text>
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

    let alunoRows = []
    alunosList.map(aluno => {
        alunoRows.push({
            id: aluno.tia,
            nome: aluno.nome,
            turmaId: aluno.turma.codigo
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
                                        <Flex as={"form"} onSubmit={handleCriarDisciplina} flexDirection={"column"}>
                                            <FormControl>
                                                <FormLabel>Código:</FormLabel>
                                                <NumberInput>
                                                    <NumberInputField name="codigo" onChange={handleChangeDisciplina} />
                                                </NumberInput>
                                            </FormControl>
                                            <FormControl mt={2}>
                                                <FormLabel>Nome:</FormLabel>
                                                    <Input name="nome" onChange={handleChangeDisciplina} />
                                            </FormControl>
                                            <FormControl mt={5} mb={4}>
                                                <Button width={"100%"} type="submit" backgroundColor={"#C3E3E8"}>Criar</Button>
                                            </FormControl>
                                        </Flex>
                                    } isopen={addDisciplinas.isOpen} open={addDisciplinas.onOpen} close={addDisciplinas.onClose} />
                                </Flex>
                                <DataGridData {...disciplina} colunas={disciplinaColumns} linhas={disciplinaRows} />
                            </TabPanel>
                            <TabPanel>
                                <Flex justifyContent={"flex-start"}>
                                    <ModalCriar title={"Nova Turma"} body={
                                        <Flex as={"form"} onSubmit={handleCriarTurma} flexDirection={"column"}>
                                            <FormControl>
                                                <FormLabel>Ano:</FormLabel>
                                                <NumberInput>
                                                    <NumberInputField name="ano" onChange={handleChangeTurma} />
                                                </NumberInput>
                                            </FormControl>
                                            <FormControl>
                                                <FormLabel>Código:</FormLabel>
                                                <Input name="codigo" onChange={handleChangeTurma}/>
                                            </FormControl>
                                            <FormControl mt={5} mb={4}>
                                                <Button width={"100%"} type="submit" backgroundColor={"#C3E3E8"}>Criar</Button>
                                            </FormControl>
                                        </Flex>
                                        
                                    } isopen={addTurmas.isOpen} open={addTurmas.onOpen} close={addTurmas.onClose} />
                                </Flex>
                                <DataGridData {...turma} colunas={turmaColumns} linhas={turmaRows} />
                            </TabPanel>
                            <TabPanel>
                                <Flex justifyContent={"flex-start"}>
                                    <ModalCriar title={"Novo Aluno"} body={
                                        <Flex  as={"form"} onSubmit={handleCriarAluno} flexDirection={"column"}>
                                            <FormControl>
                                                <FormLabel>TIA:</FormLabel>
                                                <NumberInput>
                                                    <NumberInputField name="tia" onChange={handleChangeAluno} />
                                                </NumberInput>
                                            </FormControl>
                                            <FormControl>
                                                <FormLabel >Nome:</FormLabel>
                                                <Input name="nome" onChange={handleChangeAluno} />
                                            </FormControl>
                                            <FormControl mt={2}>
                                                <FormLabel>Turma:</FormLabel>
                                                <Select name="turmaId" onChange={handleChangeAluno} placeholder='Selecionar'>
                                                    {turmasList.map(turma => {
                                                        return (
                                                            <option key={turma.id} value={turma.id}>{turma.codigo}</option>
                                                        )
                                                    })}
                                                </Select>
                                            </FormControl>
                                            <FormControl mt={5} mb={4}>
                                                <Button width={"100%"} type="submit" backgroundColor={"#C3E3E8"}>Criar</Button>
                                            </FormControl>
                                        </Flex>
                                    } isopen={addAlunos.isOpen} open={addAlunos.onOpen} close={addAlunos.onClose} />
                                </Flex>
                                <DataGridData {...aluno} colunas={alunoColumns} linhas={alunoRows} />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Flex>
            </Grid>
        </Flex>
    )
}