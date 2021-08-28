import React from "react";
import "./index.css";

import Login from "./Login";
import Register from "./Register";
import TabPanel from "./TabPanel";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
        // marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // minWidth: "30%",
        // width: 500,
    },
}));

function a11yProps(index: any) {
    return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`,
    };
}

const Auth = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    return (
        <div className="App">
            <header className="App-header">
                {/* <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a> */}
                <Paper className={classes.root}>
                    <AppBar
                        className="Auth-header"
                        position="static"
                        color="default"
                    >
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            centered
                        >
                            <Tab label="Login" {...a11yProps(0)} />
                            <Tab label="Register" {...a11yProps(1)} />
                        </Tabs>
                    </AppBar>

                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <Login />
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <Register />
                    </TabPanel>
                </Paper>
                {/* <Test /> */}
            </header>
        </div>
    );
};

export default Auth;
