const autoprefixer = require('autoprefixer')
console.log(1)
module.exports = {
  plugins: [
    autoprefixer({
      browsers: ['last 5 versions']
    })
  ]
}