import path from 'path';

module.exports = {
  entry: './examples/index.dev.js',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      '@syndicode/react-dumbledore': path.resolve(__dirname, 'src'),
    },
  },
};
