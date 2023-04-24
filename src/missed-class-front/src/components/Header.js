import { Button, Flex, Image, Link, Menu, MenuButton, MenuGroup, MenuItem, MenuList, Text, Tooltip } from "@chakra-ui/react";
import logo from '../icons/logo.svg'

export default function Header() {
    return (
        <Flex width={"100%"} alignItems={"center"} margin={"2rem"} marginBottom={"0"} >
            <Image src={logo} alt="logo" width='200px' />
            <Flex width={"100%"} justifyContent={"space-evenly"}>
                <Link href="/gerenciamento"><Button><Text fontSize={"18px"}>Gerenciamento</Text></Button></Link>
                <Link href="/lista"><Button><Text fontSize={"18px"}>Fazer chamada</Text></Button></Link>
                <Link href="/"><Button><Text fontSize={"18px"}>Sair</Text></Button></Link>
            </Flex>
        </Flex>
    )
}