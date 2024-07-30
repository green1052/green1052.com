import React from "react";
import App from "./App.jsx";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {createRoot} from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
    palette: {
        mode: "dark"
    }
});

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
    <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <App/>
        </ThemeProvider>
    </React.StrictMode>
);