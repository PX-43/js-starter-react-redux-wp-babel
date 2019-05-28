import webpack from 'webpack';
import path from 'path';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  devtool:'source-map',
  entry:[
    path.resolve(__dirname, 'app/index')
  ],
  target:'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  optimization: {
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      inject:true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'app'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react','stage-0']
          }
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader'
      }
    ]
  }
};
