const path = require('path');

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: './dist/js',
    filename: 'main.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules|bower_components/,
        loader: 'babel',
      },
      {
        test: /\.modernizrrc$/,
        loader: 'modernizr',
      },
    ],
  },
  resolve: {
    alias: {
      modernizr$: path.resolve(__dirname, './.modernizrrc'),
    },
  },
};
