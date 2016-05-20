var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './app/router.js'
  ],
  output: {
    path: require("path").resolve("./dist"),
    filename: './bundle.js',
    sourceMapFilename: "./bundle.map",
    publicPath: '/'
  },
  devtool: '#source-map',
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
    // new webpack.IgnorePlugin(/ReactContext|react\/addons/)
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015', 'react-hmre', 'stage-0']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
      }
    ],
    resolve: {
      root: path.resolve('./app'),
      extensions: ['', '.js', '.jsx']
    }
  }
}
