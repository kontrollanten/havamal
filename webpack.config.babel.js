import path from 'path';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const env = process.env.NODE_ENV || 'production';

let plugins = [
  new CopyWebpackPlugin([{ from: './public' }]),
  new HtmlWebpackPlugin({
    inject: false,
    template: 'src/index.html',
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(env)
    }
  })
];

const loaderOptionsConfig = {
  options: {
    sassLoader: {
      includePaths: [
        './node_modules'
      ]
    }
  }
};

const devConfig = {};
if (env === 'production') {
  loaderOptionsConfig.minimize = true;
  plugins.push(
    new webpack.DefinePlugin({
      'process.env.GA_TRACKING_ID': JSON.stringify(process.env.GA_TRACKING_ID),
    })
  );
} else {
  plugins = plugins.concat([
    new webpack.HotModuleReplacementPlugin()
  ]);
  devConfig.devtool = 'cheap-module-source-map';
  devConfig.entry = [
    require.resolve('react-dev-utils/webpackHotDevClient'),
    './src/js/index.js'
  ];
  devConfig.devServer = {
    compress: true,
    clientLogLevel: 'none',
    contentBase: path.resolve('./dist'),
    publicPath: '/',
    quiet: true,
    hot: true,
    watchOptions: {
      ignored: /node_modules/
    },
    historyApiFallback: true,
  };
}

plugins.push(new MiniCssExtractPlugin());
plugins.push(new webpack.LoaderOptionsPlugin(loaderOptionsConfig));

export default Object.assign({
  entry: './src/js/index.js',
  mode: env,
  output: {
    path: path.resolve('./dist'),
    filename: 'index.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.scss', '.css', '.json']
  },
  plugins,
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'sass-loader',
            options: {
              outputStyle: 'compressed',
              includePaths: [
                './node_modules'
              ]
            }
          }
        ]
      }
    ]
  }
}, devConfig);
