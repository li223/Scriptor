import React, { FC } from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, CssBaseline } from "@mui/material";
import { Book as BookIcon, Terminal as TerminalIcon, Person as PersonIcon } from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
//import { BrowserRouter, Routes } from 'react-router-dom';

interface Props {
    children: React.ReactNode;
}

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const Layout: FC<Props>  = ({ children }) => {
    return (
        <ThemeProvider theme={darkTheme}>
            <div>
                <Drawer variant="permanent" sx={{
                    justifyContent: 'center',
                    margin: 'auto'
                }}>
                    <List>
                        <ListItem>
                            <ListItemButton href="/">
                                <ListItemIcon><TerminalIcon /></ListItemIcon>
                                <ListItemText primary="Run Command" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem>
                            <ListItemButton href="/commandlibrary">
                                <ListItemIcon><BookIcon /></ListItemIcon>
                                <ListItemText primary="Command Library" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem>
                            <ListItemButton href="/users">
                                <ListItemIcon><PersonIcon /></ListItemIcon>
                                <ListItemText primary="Users" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Drawer>
            </div>
            <CssBaseline />
            <div>
                {children}
            </div>
        </ThemeProvider>
    );
}

export default Layout;