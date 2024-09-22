'use strict';
const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  mode: 'development',
  entry: {
    lod: './src/lod/index.ts',
    client: './src/client.ts'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true // Disable full type checking for performance
        },
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    // resolve.fallback: Prevents Webpack from trying to polyfill fs and path modules for a browser environment, which would generate unnecessary code for frontend.
    fallback: {
      "fs": false,
      "path": false
    }
  },
  // externals: Declares grpc-web and google-protobuf as CommonJS modules, so Webpack knows not to attempt to bundle them as ESModules.
  externals: {
    "grpc-web": 'commonjs grpc-web',
    "google-protobuf": 'commonjs google-protobuf'
  }
};