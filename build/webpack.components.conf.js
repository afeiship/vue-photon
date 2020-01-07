const path = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const mapEntries = require('@feizheng/webpack-mpa-entries');
const entry = mapEntries('./packages/**/index.vue', ['./packages', 'index.vue']);
const baseConfg = require('./webpack.base.conf');


module.exports = (inEnv) => {
  return merge(baseConfg(inEnv), {
    mode: 'production',
    entry,
    output: {
      path: path.resolve(__dirname, '..', 'dist/lib'),
      filename: '[name]/index.js',
      library: '[name]',
      libraryTarget: 'umd'
    },
    externals: {
      '@feizheng/noop': '@feizheng/noop',
      'object-assign': 'object-assign'
    },
    plugins: [new CleanWebpackPlugin()]
  });
};
