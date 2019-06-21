// alert('Hello World!')

require('@babel/runtime/regenerator')
require('@babel/register')
require('webpack-hot-middleware/client?reload=true')
require('./main.css')
require('./index.html')
require('./app.js')
// debugger
// var a = async args => {
//   const {a, b} = args
//   await console.log('Hello Future!', a, b)
//   console.log('Done')
// }

// a({a:1,b:2})


// console.log('Hello World!')