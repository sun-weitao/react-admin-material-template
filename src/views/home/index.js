import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Toolbar, Drawer, List } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Home() {
    const classes = useStyles();
    const [state, setState] = useState(false)

    const toggleDrawer = (event) => {
        setState(!state)
    };
    const a = [1,2,3,4];
    return (
        <div className="home">
            <AppBar position="static">
                <Toolbar>
                    <IconButton 
                        edge="start" 
                        onClick={toggleDrawer} 
                        className={classes.menuButton} 
                        color="inherit" 
                        aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" 
                    className={classes.title}>首頁</Typography>
                </Toolbar>
            </AppBar>

            <React.Fragment>
                <Drawer open={state} onClose={toggleDrawer}>
                    xxxxxxxxxxxxxxxxxxxx
                    {a.map(e => {
                        return <div>{e}</div>
                    })}
                </Drawer>
            </React.Fragment>
        </div>
    )
}
