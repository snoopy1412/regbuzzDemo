var config = require('./webpack.config.js')

config.entry = {
  'vue-component': './components/index.js',
}

config.output = {
  filename: './static/[name].js',
  library: 'VueComponent'
}


module.exports = config
