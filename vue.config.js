const { resolve } = require('path');
const { name } = require('./package');
const path = require('path');
const WebpackBar = require('webpackbar');
const dayjs = require('dayjs');
const time = dayjs().format('YYYY-M-D HH:mm:ss');
// js压缩插件，开启多进程构建，删除console，删除debugger
const TerserPlugin = require('terser-webpack-plugin');
// 开启文件缓存，优化构建速度
// const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
// js压缩插件，开启gzip压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin');

process.env.VUE_APP_UPDATE_TIME = time;
const title = 'vue3Project';
// gzip
const compress = new CompressionWebpackPlugin({
  // 目标资源文件名
  // filename: '[path].gz[query]',
  // 压缩算法
  algorithm: 'gzip',
  // 仅处理大于此大小的资源
  threshold: 10240,
  // 仅处理压缩性能优于此比率的资源
  minRatio: 0.8,
  // 是否删除原始资源
  deleteOriginalAssets: false
});
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: true,
  // transpileDependencies: ['vue-echarts', 'resize-detector'], //指定需要编译的模块-适配ie（es6）
  productionSourceMap: false,
  devServer: {
    hot: true,
    port: '8989',
    open: true,
    noInfo: false,
    overlay: {
      warnings: true,
      errors: true
    },
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {
      '/apiprod': {
        target: 'https://www.haigeek.com',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/apiprod': ''
        },
        headers: {
          host: 'https://www.haigeek.com',
          origin: 'https://www.haigeek.com',
          referer: 'https://www.haigeek.com'
        }
      }
    }
  },
  pluginOptions: {
    // 提取公共样式和变量
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, 'src/asets/style/var.scss')]
    }
  },
  /**
   * 解决 vue-i18n 警告
   * You are running the esm-bundler build of vue-i18n.
   * It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle.
   * */
  configureWebpack() {
    return {
      // 剔除比较大的依赖包，使用cdn引入
      // externals: {
      //   vue: 'Vue',
      //   'vue-router': 'vueRouter',
      //   vuex: 'vuex',
      //   'element-plus': 'ELEMENT',
      //   lodash: 'lodash',
      //   axios: 'axios',
      //   qs: 'qs'
      // },
      resolve: {
        alias: {
          '@': resolve('src'),
          '*': resolve(''),
          Assets: resolve('src/assets'),
          'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
        },
        modules: [resolve('src'), resolve('node_modules')]
      },
      module: {
        rules: [
          {
            test: /\.(json5?|ya?ml)$/, // target json, json5, yaml and yml files
            loader: '@intlify/vue-i18n-loader',
            include: [
              // Use `Rule.include` to specify the files of locale messages to be pre-compiled
              path.resolve(__dirname, 'src/lang')
            ]
          }
        ]
      },
      plugins: [
        new WebpackBar({
          name: title
        }),
        compress
        // new HardSourceWebpackPlugin()
      ],
      output: {
        //把子应用打包成umd库格式（必须）
        library: `${name}-[name]`,
        libraryTarget: 'umd',
        jsonpFunction: `webpackJsonp_${name}`
      }
    };
  },
  // 配置
  chainWebpack: config => {
    // 返回一个将会被合并的对象
    if (process.env.NODE_ENV === 'production') {
      return {
        optimization: {
          minimizer: [
            // 多进程打包优化
            new TerserPlugin({
              cache: true,
              parallel: true,
              terserOptions: {
                output: {
                  comments: false
                },
                compress: {
                  drop_console: true,
                  warnings: false,
                  drop_debugger: true
                }
              }
            })
          ]
        }
      };
    }
  }
};
