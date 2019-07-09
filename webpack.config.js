module.exports = {
  entry: [
    'babel-polyfill',
    './src/'
  ],
  output: {
    filename: 'app.js',
    path: `${__dirname}/dist/`,
    publicPath: '/dist/'
  },
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: [/node_modules/, /dist/] }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    contentBase: __dirname,
    historyApiFallback: true,
    port: 8080
  }
}
