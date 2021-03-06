import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import React, {useCallback} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

function CustomMenuItem(props: {
    keyValue: string,
    text: string,
    onClickEvent: any
}) {
    return (
        <Button
            key={props.keyValue}
            sx={{my: 2, color: "white", display: "block"}}
            onClick={props.onClickEvent}
        >
            {props.text}
        </Button>
    );
}

function CustomListText(props: { text: string }) {
    return (
        <ListItem disableGutters>
            <ListItemText primary={props.text}/>
        </ListItem>
    );
}

function App() {
    const clickOpenGithub = useCallback(() => {
        window.open("https://github.com/green1052", "_blank");
    }, []);

    return (
        <Box m="-8px" sx={{width: "100vw", height: "100vh"}}>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Avatar alt="green1052" src="/static/images/avatar.webp"/>
                        &nbsp;
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{mr: 2, display: {xs: "none", md: "flex"}}}
                        >
                            green1052
                        </Typography>

                        <Box sx={{flexGrow: 1, display: {xs: "none", md: "flex"}}}>
                            <CustomMenuItem keyValue="Github" text="Github" onClickEvent={clickOpenGithub}/>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Typography pt={10} align="center" variant="h2">
                Hello, World!
            </Typography>

            <Typography pt={5} ml={15} variant="h4" sx={{fontWeight: "bold"}}>
                ?????? ????????????
                <br/>
                ??? ???????????????
            </Typography>

            <Typography pt={5} ml={15} variant="h5">
                ?????? ????????? ????????? ?????? ???????????? ???????????? ??????
                <br/>
                ?????? ????????? green1052?????????.
            </Typography>

            <Typography pt={20} ml={15} variant="h5" sx={{fontWeight: "bold"}}>
                ????????? ???

                <List>
                    <CustomListText text="??? List-KR Maintainers"/>
                    <CustomListText text="??? Saebasol ?????????"/>
                </List>

                <h6>
                    <a style={{color: "black"}} href="https://github.com/green1052" target="_blank">
                        ????????? ????????? Github??? ??????????????????
                    </a>
                </h6>
            </Typography>
        </Box>
    );
}

export default App;