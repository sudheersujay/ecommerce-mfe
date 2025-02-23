import path from 'path';
import { fileURLToPath } from 'url';
import webpack from 'webpack';
import ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin.js'; // Correct Import

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index',
  mode: 'development',
  devServer: {
    port: 3002,
    historyApiFallback: true,
  },
  output: {
    publicPath: 'http://localhost:3002/',
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'basket',
      filename: 'remoteEntry.js',
      exposes: {
        './Basket': './src/components/Basket',
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: false },
        'react-dom': { singleton: true, eager: true, requiredVersion: false },
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
