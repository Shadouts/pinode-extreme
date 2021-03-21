const path = require('path');
const nodeExternals = require('webpack-node-externals');

const appConfig = {
  mode: 'development',
  target: 'web',
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: [/\.js$/],
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        },
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/
      },
      {
        test: /\.(graphql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader'
      }
    ]
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/components/'),
      Containers: path.resolve(__dirname, 'src/containers/')
    },
    extensions: [ '.js', '.graphql' ]
  }
};

const serverConfig = {
  mode: 'development',
  target: 'node',
  node: {
    __dirname: true
  },
  externals:[ nodeExternals() ],
  entry: {
    server: './src/server.js'
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: [/\.js$/],
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        },
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  }
};

module.exports = [appConfig , serverConfig];
