/** @type {import("snowpack").SnowpackUserConfig } */
export default {
    mount: {
        public: "/",
        src: "/dist",
        static: "/static"
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