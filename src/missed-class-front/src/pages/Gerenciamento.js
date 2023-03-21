import { Grid, Flex, Image, Tab, Tabs, TabList, TabPanel, TabPanels, Text, useDisclosure, FormControl, Input, GridItem, FormLabel } from "@chakra-ui/react";
import ModalCriar from "../components/ModalCriar";

import logo from '../icons/logo.svg'

export default function Gerenciamento() {

    const addProfs = useDisclosure();
    const addDisciplinas = useDisclosure();
    const addTurmas = useDisclosure();
    const addAlunos = useDisclosure();

    return (
        <Grid width={"100%"} height={"60%"}>
            <GridItem margin={"4rem"} marginBottom={"0"} alignItems={"start"}>
                <Flex width={"100%"} alignItems={"center"}>
                    <Image src={logo} alt="logo" width='200px' />
                    <Flex width={"75%"} justifyContent={"center"}><Text fontSize={24}>Gerenciador</Text></Flex>

                </Flex>
            </GridItem>
            <Flex margin={"4rem"} marginBottom={"0"}>
                <Tabs width={"100%"}>
                    <TabList>
                        <Tab>Professores</Tab>
                        <Tab>Disciplinas</Tab>
                        <Tab>Turmas</Tab>
                        <Tab>Alunos</Tab>
                    </TabList>

                    <TabPanels >
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
    )
}