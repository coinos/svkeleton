console.log('## init files if necessary ... ##')

const fs = require('fs-extra')

if( !fs.existsSync('./src/routes') ) {

  console.log('copy src dir...')

  fs.copySync('./src-copy', './src')
  
  console.log('copied missing src dir')

} else {
  console.log('src dir already exists')
}

if(!fs.existsSync('./src/app.postcss')) {
  fs.copySync('./src-copy/app.postcss', './src/app.postcss')
  console.log('copied app.postcss')
}

if( !fs.existsSync('./static/favicon.png') ) {

  console.log('copy static dir...')

  fs.copySync('./static-copy', './static')
  
  console.log('copied missing static dir')

} else {
  console.log('static dir already exists')
}