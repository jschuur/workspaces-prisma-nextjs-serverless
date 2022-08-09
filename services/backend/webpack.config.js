const path = require('path');

const nodeExternals = require('webpack-node-externals');
const slsw = require('serverless-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  target: 'node',
  stats: 'normal',
  entry: slsw.lib.entries,
  externals: [nodeExternals()],
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  optimization: {
    concatenateModules: false,
  },
  resolve: { extensions: ['.js'] },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: '../../packages/prisma/prisma/schema.prisma',
          to: 'src',
        },
      ],
    }),
  ],
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       use: {
  //         loader: 'babel-loader',
  //         // options: {
  //         //   cacheDirectory: true,
  //         // },
  //       },
  //     },
  //   ],
  // },
  output: {
    libraryTarget: 'commonjs2',
    filename: '[name].js',
    path: path.resolve(__dirname, '.webpack'),
  },
};
