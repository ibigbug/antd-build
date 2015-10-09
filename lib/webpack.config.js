'use strict';

var path = require('path');
var webpack = require('webpack');
var assign = require('object-assign');

module.exports = function(args) {

  var commonConfig = require('./webpack.common.config');

  var plugins = [];
  if (!args.debug) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
      output: {
        ascii_only: true
      }
    }));
  }

  return assign({}, commonConfig, {
    plugins: commonConfig.plugins.concat(plugins)
  });
};
