const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
    ],
  },

  devServer: {
    open: true,
    port: 6289,
  },

  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ]
};

module.exports = config;
