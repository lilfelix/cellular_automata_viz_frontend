const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  mode: 'development',
  entry: './src/index.ts', // Single entry point
  output: {
    filename: 'bundle.js', // Single output file
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true, // Disable full type checking for performance
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      'grpc-web': path.resolve(__dirname, 'node_modules/grpc-web'),
      'google-protobuf': path.resolve(__dirname, 'node_modules/google-protobuf'),
    },
    fallback: {
      fs: false,
      path: false,
    },
  },
  target: 'web', // Ensure Webpack is targeting the web platform
};