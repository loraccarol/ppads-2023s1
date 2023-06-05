import { Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import logo from '../icons/logo.svg'
import { useLocation } from "react-router-dom";

export default function Header() {

    const location = useLocation();

    return (
        <Flex width={"100%"} alignItems={"center"} margin={"2rem"} marginBottom={"0"} >
            <Image src={logo} alt="logo" width='200px' />
            <Flex width={"100%"} justifyContent={"space-evenly"}>
                <Link href="/gerenciamento"><Button background={location.pathname == "/gerenciamento" ? "#d5d5d5" : "#EDF2F7"}><Text fontSize={"18px"}>Gerenciamento</Text></Button></Link>
                <Link href="/lista"><Button background={location.pathname == "/lista" ? "#d5d5d5" : "#EDF2F7"}><Text fontSize={"18px"}>Fazer chamada</Text></Button></Link>
                <Link href="/relatorio"><Button background={location.pathname == "/relatorio" ? "#d5d5d5" : "#EDF2F7"}><Text fontSize={"18px"}>Relatório</Text></Button></Link>
                <Link href="/"><Button><Text fontSize={"18px"}>Sair</Text></Button></Link>
            </Flex>
        </Flex>
    )
}