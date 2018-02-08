var webpack = require('webpack');
var path = require('path');

/**
 * We use webpack to generate the browser build
 */
var config = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'ckmeans.min.js',
    library: 'ckmeans',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [new webpack.optimize.UglifyJsPlugin()]
};

module.exports = config;
