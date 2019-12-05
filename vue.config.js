
const CompressionPlugin = require('compression-webpack-plugin')
module.exports = {
  publicPath: './',
  lintOnSave: 'error',
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  },
  productionSourceMap: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new CompressionPlugin({
            test: /\.js$|\.html$|.\css/, // 匹配文件名
            threshold: 10240, // 对超过10k的数据压缩
            deleteOriginalAssets: false // 不删除源文件
          })
        ]
      }
    }
  },
  chainWebpack: config => {
    config
      // 添加环境变量
      .plugin('define')
      .tap(([env]) => {
        env['process.env'] = {
          ...env['process.env'],
          API: `"${process.env.API}"`,
          uaa: `"${process.env.uaa}"`,
          fire: `"${process.env.fire}"`,
          console: `"${process.env.console}"`,
          websocket: `"${process.env.websocket}"`
        }
        return [env]
      })
      .end()
      // 支持office文档文件导入
      .module.rule('library')
      .test(/\.(xlsx|xls|docx|doc|pptx|ppt)(\?.*)?$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'library/[name].[hash:8].[ext]'
      })
      .end()
  }
}
