const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
module.exports = {
  mode: 'development',
  entry: './example/src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(appDirectory, 'dist')
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: './example',
    compress: true,
    clientLogLevel: 'none',
    hot: true,
    port: 3000
  },
  module: {
    rules: [
      {
        oneOf: [
           // Process JS with Babel.
           {
            test: /\.(js|jsx|mjs)$/,
            include: [
                path.resolve(appDirectory, 'example/src'),
                path.resolve(appDirectory, 'src'),
            ],
            loader: require.resolve('babel-loader'),
            options: {
              
              // This is a feature of `babel-loader` for webpack (not Babel itself).
              // It enables caching results in ./node_modules/.cache/babel-loader/
              // directory for faster rebuilds.
                cacheDirectory: true,
                babelrc: true,
            },
          
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
          {
            // Exclude `js` files to keep "css" loader working as it injects
            // its runtime that would otherwise processed through "file" loader.
            // Also exclude `html` and `json` extensions so they get processed
            // by webpacks internal loaders.
            exclude: [/\.html$/, /\.(js|jsx)$/, /\.(css|less)$/, /\.json$/, /\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('file-loader'),
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(appDirectory, 'example/index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  performance: false
};