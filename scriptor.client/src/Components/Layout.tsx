import React, { FC } from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, CssBaseline } from "@mui/material";
import { Book as BookIcon, Terminal as TerminalIcon, Person as PersonIcon, Settings as SettingsIcon } from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import UserIcon from './UserIcon';

interface Props {
    children: React.ReactNode;
}

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const Layout: FC<Props> = ({ children }) => {
    return (
        <ThemeProvider theme={darkTheme}>
            <div>
                <Drawer variant="permanent" sx={{
                    justifyContent: 'center',
                    margin: 'auto'
                }}>
                    <List sx={{
                        height: "100%"
                    }}>
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

                        <ListItem>
                            <ListItemButton href="/settings">
                                <ListItemIcon><SettingsIcon /></ListItemIcon>
                                <ListItemText primary="Settings" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <UserIcon />
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