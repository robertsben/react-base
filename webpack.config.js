const path = require('path')
const webpack = require('webpack')

const PUBLIC_DIR = path.resolve(__dirname + '/public')
const APP_DIR = path.resolve(__dirname + '/src')
const DEV_SERVER_PORT = 3333

module.exports = {
  entry: {
    main: [
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://localhost:${DEV_SERVER_PORT}`,
      'webpack/hot/only-dev-server',
      APP_DIR + '/index.jsx'
    ],
    vendor: ['react', 'react-dom', 'react-hot-loader']
  },
  output: {
    path: PUBLIC_DIR,
    filename: '[name].js',
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    inline: true,
    contentBase: PUBLIC_DIR,
    hot: true,
    port: DEV_SERVER_PORT,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  plugins: [
    /* For HMR, obviously */
    new webpack.HotModuleReplacementPlugin(),

    /* For named modules in HMR outputs */
    new webpack.NamedModulesPlugin(),

    /* Names the chunks rather than IDing them when code splitting (helps with caching) */
    new webpack.NamedChunksPlugin(),

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
