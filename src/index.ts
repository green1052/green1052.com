import {serve} from "bun";
import index from "./index.html";

const staticFile = (path: string) => () => new Response(Bun.file(path));

const server = serve({
    routes: {
        "/favicon.ico": staticFile("public/favicon.ico"),
        "/avatar.avif": staticFile("public/avatar.avif"),
        "/apple-touch-icon.png": staticFile("public/apple-touch-icon.png"),
        "/icon-192.png": staticFile("public/icon-192.png"),
        "/icon-512.png": staticFile("public/icon-512.png"),
        "/site.webmanifest": staticFile("public/site.webmanifest"),
        "/*": index
    },
    development: process.env.NODE_ENV !== "production" && {
        hmr: true,
        console: true
    }
});

console.log(`🚀 Server running at ${server.url}`);
