import {
  Configuration,
} from 'webpack';
import * as path from 'path';
import ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCSSExtractPlugin from 'mini-css-extract-plugin';

const config: Configuration = {
  context: path.join(__dirname, '..'),
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '~' : path.join(__dirname, '../src')
    },
  },
  output: {
    path: path.join(__dirname, '../dist/web'),
    filename: '[name].[contenthash].bundle.js',
  },
  module: {
    rules: [{
      test: /\.css$/,
      rules: [
        { loader: MiniCSSExtractPlugin.loader },
        { loader: 'css-loader' },
      ]
    }, {
      test(filePath) {
        return filePath.endsWith('font.scss')
      },
      // test: /global\.scss$/,
      rules: [
        { loader: 'style-loader'},
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: 'font_[local]',
            },
            esModule: false,

          },
        },
        { loader: 'sass-loader' },
      ],
    }, {
      test(filePath) {
        return filePath.endsWith('scss')
          && !filePath.endsWith('font.scss')
      },
      rules: [
        { loader: 'style-loader'},
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[path][name]__[local]',
            },
            esModule: false,

          },
        },
        { loader: 'sass-loader' },
      ],
    }, {
      test: /\.(png|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]?[hash]',
          },
        },
      ],
    }],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: 'write-references',
      }
    }),
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new MiniCSSExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ]
}

export = config;