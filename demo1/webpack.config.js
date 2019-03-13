const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    chunkFilename: '[id].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: ['css-loader']
        })
        // use: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: '[name]_[contenthash].css'
    })
  ]
};
