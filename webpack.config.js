module.exports = {
  entry: __dirname + '/challenge_1/client/app.jsx',
  output: {
    path: __dirname + '/challenge_1/public/',
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
            // plugins: [new HtmlWebpackPlugin({ template: './client/index.html' })]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  watch: true,
  mode: 'development'
};