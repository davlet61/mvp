import { resolve } from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import CopyPlugin from 'copy-webpack-plugin';
import { EnvironmentPlugin } from 'webpack';

export const mode = 'development';
export const entry = {
  main: resolve(__dirname, './src/index.js'),
};
export const output = {
  path: resolve(__dirname, './dist'),
  filename: '[name].bundle.js',
};
export const plugins = [
  new CleanWebpackPlugin(),
  new Dotenv(),
  new CopyPlugin({
    patterns: [
      { from: 'public' },
    ],
  }),
  new EnvironmentPlugin({ 'process.env.ACCESS_KEY': 'ACCESS_KEY' }),
];
export const module = {
  rules: [
    // JavaScript
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
    // Fonts and SVGs
    {
      test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
      type: 'asset/inline',
    },
    // Images
    {
      test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
      type: 'asset/resource',
    },
    // CSS, PostCSS, and Sass
    {
      test: /\.(scss|css)$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
    },
  ],
};
