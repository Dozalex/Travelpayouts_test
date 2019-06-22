const webpack = require('webpack');

const commonExportsObject = require('./webpack.common.config');

const {
  commonConfiguration,
} = commonExportsObject;

const localExports = {
  devtool: 'eval-source-map',
  mode   : 'development',

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ].concat(commonConfiguration.plugins),

  optimization: {
    namedModules  : true,
    noEmitOnErrors: true,
  },

  devServer: {
    contentBase: './build',
    historyApiFallback: true,
    hot: true,
    host: 'localhost',
    port: 3000,
    proxy: {
      '/api': 'http://localhost:8000',
    },
  },
};

module.exports = Object.assign({}, commonConfiguration, localExports);
