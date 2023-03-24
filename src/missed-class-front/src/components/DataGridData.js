import { DataGrid } from "@mui/x-data-grid";
import { createTheme, ThemeProvider } from "@mui/material";
import { Flex } from "@chakra-ui/react";

export default function DataGridData({ colunas, linhas }) {

    const MuiTheme = createTheme({
        components: {
            MuiDataGrid: {
                styleOverrides: {
                    root: {
                        borderRadius: 10,
                        backgroundColor: '#f0f0f0',
                        color: "#C1C2C5",
                        padding: 10,
                    },
                },
            },
        },
    });

    return (
        <ThemeProvider theme={MuiTheme}>
            <Flex marginTop={"2rem"} height={"30em"}>
                <DataGrid columns={colunas} rows={linhas} />
            </Flex>
        </ThemeProvider>
    )
}