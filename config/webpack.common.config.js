const webpack = require('webpack');
const WebpackChunkHash = require('webpack-chunk-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const devMode = process.env.NODE_ENV !== 'production';

const commonEnv = {};

const commonConfiguration = {
  entry: './src/index',

  output: {
    path      : path.join(__dirname, '../build/'),
    filename  : devMode ? '[name].js' : '[name].[chunkhash].js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules   : [
      path.join(__dirname, '../src'),
      'node_modules',
    ],
  },

  module: {
    rules: [
      {
        test   : /\.(js|jsx)$/,
        loaders: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        use : [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader : 'css-loader',
            options: {
              minimize: {
                safe: true,
              },
            },
          },
          {
            loader : 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer')({
                  browsers: ['last 2 versions'],
                }),
              ],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|eot|ttf|woff|woff2|svg).*$/,
        use : [
          {
            loader : 'file-loader',
            options: {
              name: 'images/[name].[ext]',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new WebpackChunkHash({ algorithm: 'md5' }),
    new CopyWebpackPlugin([
      {
        from: './src/images',
        to  : 'images',
      },
      {
        from: './src/translations',
        to  : 'translations',
      },
      {
        from: './src/dataMock',
        to  : 'translations',
      },
    ]),
    new HtmlWebpackPlugin({
      inject  : 'body',
      filename: 'index.html',
      template: './src/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': Object.assign({}, commonEnv, {
        NODE_ENV: JSON.stringify(devMode ? 'development' : 'production'),
      }),
    }),
    new webpack.ProvidePlugin({
      React        : 'react',
      Component    : ['react', 'Component'],
      PureComponent: ['react', 'PureComponent'],
      PropTypes    : 'prop-types',
      connect      : ['react-redux', 'connect'],
      translate    : ['react-i18next', 'translate'],
    }),
  ],
};

module.exports = {
  commonEnv: Object.assign({}, commonEnv),
  commonConfiguration,
};
