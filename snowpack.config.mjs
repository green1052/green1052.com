/** @type {import("snowpack").SnowpackUserConfig } */
export default {
    mount: {
        public: "/",
        src: "/dist",
        static: "/static",
        "node_modules/@fontsource/roboto/files": "/files"
    },
    plugins: [
        "@snowpack/plugin-react-refresh",
        "@snowpack/plugin-typescript"
    ],
    routes: [],
    optimize: {
        bundle: true,
        minify: true
    },
    packageOptions: {},
    devOptions: {},
    buildOptions: {}
};