import React, { FC } from 'react';

import { Divider, Box, Drawer } from "@mui/material";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, CssBaseline, Avatar } from "@mui/material";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Book as BookIcon, Terminal as TerminalIcon, Person as PersonIcon, Storage as ServerIcon } from '@mui/icons-material';

interface Props {
    children: React.ReactNode;
}

const drawerWidth = 250;

const Layout: FC<Props> = ({ children }) => {
    return (
        <ThemeProvider theme={createTheme({
            palette: {
                mode: 'dark',
            }
        })}>
            <Box sx={{ display: "flex", marginLeft: "-90px" }}>
                <CssBaseline />
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0
                    }}
                    variant="permanent"
                    anchor="left">
                    <h2>Scriptor</h2>
                    <Divider />
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
                            <ListItemButton href="/servers">
                                <ListItemIcon><ServerIcon /></ListItemIcon>
                                <ListItemText primary="Servers" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Avatar
                        src="https://avatars.githubusercontent.com/u/27295070?v=4"
                        alt="Icon"
                        sx={{
                            height: 100,
                            width: 100,
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginBottom: 3
                        }}
                    />
                </Drawer>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, padding: 3 }}
                >
                    {children}
                </Box>
            </Box>
        </ThemeProvider >
    );
}

export default Layout;