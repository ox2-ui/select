const path = require('path');

const config = {
  module: {
    loaders: [
      {
        test: /\.css?$/,
        loaders: ['style', 'css'],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.json$/,
        loader: 'json',
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.woff$/,
        loader: 'url?limit=50000',
        include: path.resolve(__dirname, '../'),
      },
    ],
  },
};

module.exports = config;
