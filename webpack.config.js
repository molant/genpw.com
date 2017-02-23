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
        query: {
          presets: [[
            'env',
            {
              targets: {
                browsers: ['last 2 versions', 'safari >= 7'],
              },
            },
          ]],
        },
      },
      {
        test: /\.modernizrrc.js$/,
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
