import {
  Configuration,
  HotModuleReplacementPlugin,
} from 'webpack';
import ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import baseConfig from './config.base';

const config: Configuration = {
  ...baseConfig,
  devtool: 'eval-source-map',
  mode: 'development',
  entry: [  // 모든 웹팩 시작
    'webpack-hot-middleware/client',
    './src/index.tsx',  // <-- 여기 시작
  ],
  module: {
    ...baseConfig.module,
    rules: [
      ...(baseConfig.module?.rules || []),
      {
        test: /\.tsx?$/,
        rules: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                'react-refresh/babel'
              ]
            }
          },
          {
            loader: 'ts-loader',
            options: {
              compiler: 'ttypescript',
            }
          },
        ],
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [
    ...(baseConfig.plugins || []),
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ]
}

export = config;