import { Grid, Flex, Tab, Tabs, TabList, TabPanel, TabPanels, useDisclosure, FormControl, Input, GridItem, FormLabel } from "@chakra-ui/react";
import DataGridData from "../components/DataGridData";
import Header from "../components/Header";
import ModalCriar from "../components/ModalCriar";

export default function Gerenciamento() {

    const addProfs = useDisclosure();
    const addDisciplinas = useDisclosure();
    const addTurmas = useDisclosure();
    const addAlunos = useDisclosure();

    const columns = [
        { field: 'id', headerName: 'ID', flex: 2 },
        {
            field: 'firstName',
            headerName: 'First name',
            flex: 2,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            flex: 2,
            editable: true,
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            flex: 2,
            editable: true,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            flex: 2,
            valueGetter: (params) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];
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
                                <Flex justifyContent={"flex-start"}>
                                    <ModalCriar title={"Novo Professor"} body={
                                        <Flex>
                                            <FormControl>
                                                <FormLabel>Nome:</FormLabel>
                                                <Input />
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