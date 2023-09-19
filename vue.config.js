const { defineConfig } = require('@vue/cli-service')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: config => {
    // 扩展文件类型
     config.resolve.extensions = [
       '.tsx',
       '.ts',
       '.mjs',
       '.js',
       '.jsx',
       '.vue',
       '.json',
       '.wasm'
     ]
     // 添加ts加载rules
     config.module.rules.push({
       test: /\.tsx?$/i,
       use: [{
         loader: 'ts-loader',
         options: {
           appendTsSuffixTo: [/\.vue$/]
         }
       }],
       exclude: /node_modules/
     })
   },
   chainWebpack(config) {
    // 禁用系统内部对svg的处理@/assets/icons
    config.module.rule('svg').exclude.add(resolve('./src/assets/icons/svg'))
    // 新建规则处理svg文件
    config.module
      .rule('icons')
      .test(/\.svg$/) // 添加匹配规则
      .include.add(resolve('./src/assets/icons/svg')) // 添加我们要处理的文件路径
      .end() // 上面的add方法改变了上下文，调用end()退回到include这一级
      .use('svg-sprite-loader') // 使用"svg-sprite-loader"这个依赖
      .loader('svg-sprite-loader') // 选中这个依赖
      .options({
        symbolId: 'icon-[name]' // 这个配置是这个包的配置不属于webpack，可以查看相关文档，symbolId指定我们使用svg图片的名字
      }) // 传入配置
  },
  devServer: {
    client: {
      overlay: false
    }
  },
})
