'use strict';

const path = require('path');
// const webpack = require('webpack');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const paths = require('./paths');

module.exports = {
  resolve: {

    modules: ['node_modules', paths.appNodeModules].concat(
      // It is guaranteed to exist because we tweak it in `env.js`
      process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
    ),

    extensions: ['.web.js', '.js', '.json', '.web.jsx', '.jsx'],

    alias: {
      'Redux': path.resolve(__dirname, '../src/Redux'),
      'Api$': path.resolve(__dirname, '../src/Api/api.js'),
      'Tool': path.resolve(__dirname, '../src/Tool'),
      'Common': path.resolve(__dirname, '../src/Component/Common'),
      'HOC': path.resolve(__dirname, '../src/HOC'),

      'react-native': 'react-native-web',
    },

    plugins: [
      // Prevents users from importing files from outside of src/ (or node_modules/).
      // This often causes confusion because we only process files within src/ with babel.
      // To fix this, we prevent you from importing files out of src/ -- if you'd like to,
      // please link the files into your node_modules/ and let module-resolution kick in.
      // Make sure your source files are compiled, as they will not be processed in any way.
      new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
    ],
  },
  externals: {
    BMap:'BMap'
  }
}