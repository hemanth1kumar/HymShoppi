const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
var historyApiFallback = require("connect-history-api-fallback");
const app = express();
const config = require("./webpack.dev.config");

const compiler = webpack(config);

const devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        chunks: false,
        hash: false,
        modules: false,
        version: false,
        assets: false,
        entrypoints: false,
        builtAt: false,
    },
});

//Enable "webpack-dev-middleware"
app.use(devMiddleware);

app.use(historyApiFallback());

app.use(devMiddleware);

//Enable "webpack-hot-middleware"
app.use(webpackHotMiddleware(compiler));

app.use(express.static('./public'));

app.listen(8000, () => console.log('server listening on port 8000\n'))