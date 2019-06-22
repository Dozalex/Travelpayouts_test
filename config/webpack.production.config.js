const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const commonExportsObject = require('./webpack.common.config');

const {
  commonConfiguration,
} = commonExportsObject;

const localExports = {
  mode   : 'production',
  devtool: 'hidden-source-map',

  plugins: [
    new CleanWebpackPlugin(['build'], { root: path.resolve(__dirname, '..') }),
    new MiniCssExtractPlugin({
      filename     : '[name].[chunkhash].css',
      chunkFilename: '[id].css',
    }),
    new CompressionPlugin({
      asset    : '[path].gz[query]',
      algorithm: 'gzip',
      test     : /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio : 0.8,
    }),
  ].concat(commonConfiguration.plugins),

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            inline: false,
          },
        },
      }),
    ],
  },
};

module.exports = Object.assign({}, commonConfiguration, localExports);
