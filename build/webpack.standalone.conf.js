const baseConfg = require('./webpack.base.conf');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (inEnv) => {
  return merge(baseConfg(inEnv), {
    mode: 'production',
    entry: './src/index.js',
    output: {
      filename: 'vue-photon.js',
      library: 'VuePhoton',
      libraryTarget: 'umd'
    },
    externals: {
      '@feizheng/noop': '@feizheng/noop',
      'object-assign': 'object-assign'
    },
    plugins: [new CleanWebpackPlugin()]
  });
};
