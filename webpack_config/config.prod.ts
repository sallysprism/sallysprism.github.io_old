import {
  Configuration,
} from 'webpack';
import baseConfig from './config.base';

const config: Configuration = {
  ...baseConfig,
  mode: 'production',
  entry: [
    './src/index.tsx',
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
  ]
}

export = config;