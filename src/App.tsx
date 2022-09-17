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

function CustomListText(props: { url?: string, text: string }) {
    const openUrl = useCallback(() => {
        if (props.url !== undefined)
            window.open(props.url, "_blank");
    }, [props]);

    return (
        <ListItem>
            <ListItemText onClick={openUrl} primary={props.text}/>
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
                        <Avatar alt="green1052" src="/images/avatar.webp"/>
                        &nbsp;
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
                작은 발걸음을
                <br/>
                큰 발걸음으로
            </Typography>

            <Typography pt={5} ml={15} variant="h5">
                조금 조금씩 개발의 길에 발걸음을 내디디고 있는
                <br/>
                초보 개발자 green1052입니다.
            </Typography>

            <Typography pt={5} ml={15} variant="h5" sx={{fontWeight: "bold"}}>
                지나온 길

                <Typography pt={1}>
                    클릭으로 이동할 수 있습니다.
                </Typography>


                <List>
                    <CustomListText url="https://github.com/List-KR/List-KR" text="현 List-KR Maintainers"/>
                    <CustomListText url="https://github.com/Saebasol" text="현 Saebasol 개발자"/>
                </List>

                <h6>
                    <a style={{color: "black"}} href="https://github.com/green1052" target="_blank">
                        자세한 내용은 Github를 참조해주세요
                    </a>
                </h6>
            </Typography>
        </Box>
    );
}

export default App;