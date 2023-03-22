import { Button, Flex, Image, Link, Menu, MenuButton, MenuGroup, MenuItem, MenuList, Text, Tooltip } from "@chakra-ui/react";
import logo from '../icons/logo.svg'

export default function Header() {
    return (
        <Flex width={"100%"} alignItems={"center"} margin={"2rem"} marginBottom={"0"} >
            <Image src={logo} alt="logo" width='200px' />
            <Flex width={"100%"} justifyContent={"space-evenly"}>
                <Link href="/gerenciamento"><Button><Text fontSize={"18px"}>Gerenciamento</Text></Button></Link>
                <Tooltip label="Não disponível - em desenvolvimento" fontSize='md'>
                    <Button isDisabled><Text fontSize={"18px"}>Minhas turmas</Text></Button>
                </Tooltip>
                <Menu>
                    <MenuButton as={Button}>
                        Perfil
                    </MenuButton>
                    <MenuList>
                        <MenuGroup>
                            <Link href="/"><MenuItem><Text fontSize={"18px"}>Sair</Text></MenuItem></Link>
                        </MenuGroup>
                    </MenuList>
                </Menu>
            </Flex>
        </Flex>
    )
}