import path from 'path';

module.exports = {
    entry: 'index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),

    }
}