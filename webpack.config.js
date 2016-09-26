module.exports = {
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
        ]
    },
    resolve: {
        extensions: ["", ".web.js", ".ts", ".tsx", ".js"]
    }
};