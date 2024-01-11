const config = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    index: './src/js/index.js',
    // contacts: './src/js/contacts.js',
    // about: './src/js/about.js',
  },
  output: {
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    minimize: false
 },
 
}

module.exports = config
