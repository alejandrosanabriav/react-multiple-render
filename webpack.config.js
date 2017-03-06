'use strict';

module.exports = {
  entry: {
  	index: './source/index.js',
  },
  output: {
  	path: './dist/',
    filename: '[name].js'
  },
  module: {
  	loaders: [
			{ 
				test: /\.js$/, 
				exclude: /node_modules/, 
				loader: 'babel-loader' 
			} 
		]
  }
};

