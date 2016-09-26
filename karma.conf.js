var webpackConfig = require("./webpack.config");

module.exports = function (config) {
    config.set({
        browsers: ["PhantomJS"],
        frameworks: ["jasmine"],
        files: ["test/main.ts"],
        reporters: ["progress"],
        preprocessors: { "**/*.ts": ["webpack"] },
        webpack: webpackConfig
    });
}