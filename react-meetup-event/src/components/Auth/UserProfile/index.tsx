import React from "react";
import logo from "./../../../media/logo.svg";
import "./index.css";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        imageColumn: {
            marginTop: theme.spacing(8),
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            backgroundColor: "FFFFFF",
        },
        attributeColumn: {
            marginTop: theme.spacing(8),
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "FFFFFF",
        },
        userAvatar: {
            margin: theme.spacing(1),
            marginBottom: theme.spacing(3),
            display: "flex",
            flexDirection: "column",
            width: "200px",
            height: "200px",
            backgroundColor: "black",
        },
        root: {
            width: "100%",
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
        dividerFullWidth: {
            margin: `5px 0 0 ${theme.spacing(2)}px`,
        },
        dividerInset: {
            margin: `5px 0 0 ${theme.spacing(9)}px`,
        },
    })
);

export default function UserProfile() {
    const classes = useStyles();
    return (
        <Container className="User-Profile-container" component="main">
            <Typography variant="h3">User Profile</Typography>
            <CssBaseline />
            <Button variant="outlined">Default</Button>
            <div className={classes.imageColumn}>
                <Avatar className={classes.userAvatar}>
                    <img src={logo} className="App-logo" alt="logo" />
                </Avatar>
                <Button variant="outlined">Default</Button>
            </div>
            <List className={classes.root}>
                <ListItem>
                    <ListItemText primary="Name" secondary="Bobby" />
                </ListItem>
                <Divider component="li" />
                <li>
                    <Typography
                        className={classes.dividerFullWidth}
                        color="textSecondary"
                        display="block"
                        variant="caption"
                    >
                        fullDivider
                    </Typography>
                </li>
                <ListItem>
                    <ListItemText primary="Contact" />
                </ListItem>
                <Divider component="li" variant="inset" />
                <li>
                    <Typography
                        className={classes.dividerInset}
                        color="textSecondary"
                        display="block"
                        variant="caption"
                    >
                        quarterLostDivider
                    </Typography>
                </li>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <BeachAccessIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Email"
                        secondary="meetup@event.com"
                    />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <BeachAccessIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Phone"
                        secondary="02-32164978"
                    />
                </ListItem>
            </List>
        </Container>
    );
}

