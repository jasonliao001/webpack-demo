const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // JS 执行入口文件
  entry: './main.js',
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: 'bundle.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        // 使用 PostCSS 处理 CSS 文件
        test: /\.less$/,
        // ', 'postcss-loader'
        use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      filename: path.join(__dirname, './dist/index.html'),
      template: path.join(__dirname, './index.html')
    })
  ]
};
