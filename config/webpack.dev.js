const path = require('path')
import webpack from 'webpack'
const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  // 入口：有并且可以有多个
  entry: {
    // main: [
    //   'babel-polyfill','./src/main.js'
    // ],
    // main: [
    //   'core-js/fn/promise',
    //   './src/main.js'
    // ],
    main: [
      './src/main.js'
    ],
  },
  // 打包环境：开发 & 生产
  mode:'development',
  // 出口：有且只能有一个
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  // 本地服务器
  devServer: {
    contentBase: 'dist', // 不加此项，'/'路径默认展示文件路径目录。
    overlay: true, // 在页面上打印报错
    hot: true,
  },
  // 本地服务器调试工具
  devtool: 'source-map',
  module: {
    rules: [
      // js loaders
      {
        test:/\.js$/,
        use:[
          {
            loader:'babel-loader',
          }
        ],
        exclude:/node_modules/,
      },
      // css loaders
      {
        test:/\.css$/,
        use:[
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      // html loaders
      {
        test:/\.html$/,
        use:[
          // {
          //   loader:'file-loader',
          //   options:{
          //     name: '[name].html', // 3.重新起名
          //   }
          // },
          // {
          //   loader: 'extract-loader', // 2.从bundle.js中分离资源
          // },
          {
            loader:'html-loader', // 1.找到html文件
            options:{
              attr:['img:stc']
            }
          }
        ]
      },
      // pug loader
      {
        test:/\.pug$/,
        use:[
          {
            loader:'pug-loader'
          }
        ]
      },
      // image loader
      {
        test:/\.(jpg|git|png)/,
        use:[
          {
            loader:'file-loader',
            options:{
              name:'images/[name]-[hash:8].[ext]',
              // name:'images/[name].[ext]',
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      // template:'./src/index.html'
      // template:'./src/index.ejs',
      template:'./src/index.pug',
      title:"米斯特吴",
    })
  ]
}