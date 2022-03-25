import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import {createTheme, ThemeProvider} from "@mui/material/styles";

const darkTheme = createTheme({
    palette: {
        mode: "dark"
    }
});

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
            <App/>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// @ts-ignore
if (import.meta.hot) import.meta.hot.accept();