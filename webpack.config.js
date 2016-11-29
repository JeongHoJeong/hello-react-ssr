var path = require('path')

module.exports = {
  entry: './build/client.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  resolve: {
    root: [
      path.resolve('./build')
    ]
  }
}
