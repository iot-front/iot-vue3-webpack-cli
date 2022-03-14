### 目录结构

```
├─ README.md
├─ dist               # 打包dist
├─ public             # 静态资源
├─ src                # 源码
│  ├─ @types          # ts 声明
│  ├─ apis            # 接口请求
│  ├─ assets          # 公共资源文件
│  ├─ components      # 公共组件
│  ├─ locales         # 国际化
│  ├─ plugins         # 插件
│  ├─ router          # 路由
│  ├─ store           # 全局store管理
│  └─ views           # 所有业务页面
├─ .env.dev.build     # 开发环境
├─ .env.dev.serve     # 开发环境本地
├─ .env.prod.build    # 生产环境
├─ .env.prod.serve    # 生产环境本地
├─ .eslintrc.js       # eslint
├─ tsconfig.json      # ts 编译配置
└─ vue.config.js      # vue-cli 配置

```

## HighLight

项目采用技术:

- vue3 + composition api
- typescript
- sass (dart sass)

vue next 系列:

- [element-plus](https://github.com/element-plus/element-plus)
- [vue-router-next](https://github.com/vuejs/vue-router-next)
- [vuex-4.0](https://github.com/vuejs/vuex)
- [vue-vue-i18n-next](https://github.com/panter/vue-i18next)

## Setup

```shell
  npm install
```

```shell
  yarn serve
```

```shell
  npm run serve
```

多环境命令查看 package.json script:

```shell
    "serve": "cross-env NODE_ENV=development dotenv -e .env.dev.serve vue-cli-service serve",
    "build": "cross-env NODE_ENV=production  dotenv -e .env.dev.build vue-cli-service build",
    "serve:prod": "cross-env NODE_ENV=development dotenv -e .env.prod.serve vue-cli-service serve",
    "build:prod": "cross-env NODE_ENV=production  dotenv -e .env.prod.build vue-cli-service build",
```

### eslint

```shell
    yarn  lint
```

or

```shell
    npm run lint
```
### 代码提交

```shell
  使用
  全局安装cz：npm install -g commitizen
  git add .
  git cz     
  git push
```
提交自动检测：

```shell
"gitHooks": {
  "pre-commit": "lint-staged"
},
"lint-staged": {
  "*.{js,jsx,vue,ts,tsx}": [
  "vue-cli-service lint",
  "prettier --config .prettierrc.json --write",
  "eslint --cache --fix",
  "git add ."
  ]
}
```

## Browsers support

Modern browsers and Internet Explorer 10+.

| IE / Edge | Firefox | Chrome | Safari |
| - | - | - | - |
| IE10, IE11, Edge | last 3 versions | last 3 versions | last 3 versions |  

