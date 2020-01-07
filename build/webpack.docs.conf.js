const baseConfg = require('./webpack.base.conf');
const path = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (inEnv) => {
  return merge(baseConfg(inEnv), {
    mode: 'production',
    entry: './public/main.js',
    output: {
      path: path.resolve(__dirname, '..', 'docs'),
      filename: '[name].[hash:6].js'
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../public/index.ejs')
      })
    ]
  });
};
