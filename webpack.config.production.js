const webpack = require('webpack')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PUBLIC_DIR = path.resolve(__dirname + '/public')
const APP_DIR = path.resolve(__dirname + '/src')

module.exports = {
  entry: {
    main: APP_DIR + '/index.jsx',
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: PUBLIC_DIR,
    filename: '[name].[chunkhash].js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    /* Clean up the build dirs */
    new CleanWebpackPlugin(['build', PUBLIC_DIR + '/*.js']),

    /* set node env to prod, for minimised vendor builds etc. */
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),

    /* For minimising js */
    new webpack.optimize.UglifyJsPlugin({minimize: true}),

    /* For generating a HTML file and injecting generated bundles */
    new HtmlWebpackPlugin({
      title: 'Counter',
      template: require('html-webpack-template'),
      appMountId: 'app'
    }),

    /* Prod recommended version of NamedModulesPlugin */
    new webpack.HashedModuleIdsPlugin(),

    /* Creates the vendor code split (see: entry.vendor) */
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor']
    }),

    /*
    Creates the webpack runtime code split (extracts uses of modules from src files
    so we don't regenerate vendor every time we make a change in src - webpack witchcraft)
    */
    new webpack.optimize.CommonsChunkPlugin({
      name: ['runtime']
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
