var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './chapters/src.js'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  // resolve: {
  //   root: __dirname,
  //   modulesDirectories: [
  //     'node_modules',
  //     './chapters'
  //   ],
  //   alias: {
  //
  //   },
  //   extensions: ['','.js']
  // },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
