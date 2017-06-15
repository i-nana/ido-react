# React 学习进阶

## 🐿 一、 React.js 基本环境安装

### 方式 ①：直接在页面中使用

我们可以在官网 [http://facebook.github.io/react/](http://facebook.github.io/react/)下载最新版，也可以使用cdn库
，比如[BootCDN](http://www.bootcdn.cn/react/)。

我们需要引入三个库：

+ `react.min.js` - React 的核心库
+ `react-dom.min.js` - 提供与 DOM 相关的功能
+ `babel.min.js` - Babel 可以将 ES6 代码转为 ES5 代码，这样我们就能在目前不支持 ES6 浏览器上执行 React 代码。Babel 内嵌了对 JSX 的支持。通过将 Babel 和 babel-sublime 包（package）一同使用可以让源码的语法渲染上升到一个全新的水平。


``` html 
<script src="//cdn.bootcss.com/react/15.5.4/react.min.js"></script>
<script src="//cdn.bootcss.com/react/15.5.4/react-dom.min.js"></script>
<script src="//cdn.bootcss.com/babel-standalone/6.22.1/babel.min.js"></script>
```

---

### 方式 ②：使用官方脚手架 `create-react-app` 创建单页面应用

我们可以使用FaceBook官方推出的[`Create-React-App`](https://github.com/facebookincubator/create-react-app)脚手架，零配置快速搭建基于webpack的React开发环境，它还内置了热更新等功能。

+ 无需配置；
+ 集成了对 React, JSX, ES6 和 Flow 的支持；
+ 集成了开发服务器；
+ 内置了热更新，修改代码保存后浏览器会自动刷新；
+ 在 JavaScript 中可以直接 import CSS 和图片
+ 自动处理 CSS 的兼容问题，无需添加 -webkit 前缀；
+ 集成好了编译命令，编译后直接发布成产品，并且还包含了 sourcemaps。


> You’ll need to have Node >= 6 on your machine.

在此，为提高依赖安装速度，我们可以修改npm源为taobao。使用NPM registry 管理工具nrm切换源。

``` shell
npm config set registry https://registry.npm.taobao.org
```

``` shell
$ sudo npm install -g nrm   // 安装 nrm

$ nrm ls    // 查看registry

* npm ---- https://registry.npmjs.org/
  cnpm --- http://r.cnpmjs.org/
  taobao - https://registry.npm.taobao.org/
  nj ----- https://registry.nodejitsu.com/
  rednpm - http://registry.mirror.cqupt.edu.cn/
  npmMirror  https://skimdb.npmjs.com/registry/
  edunpm - http://registry.enpmjs.org/

$ nrm use taobao  //切换 registry to cnpm
```

全局安装`creact-react-app`完成后，创建应用`react-hi`。最后执行运行命令 `npm start` 即可在浏览器看到运行后的结果。

``` shell
npm install -g create-react-app
create-react-app react-hi 
cd react-hi && npm start
```
---

### 方式 ③：手动创建配置应用

``` shell
mkdir ido-react && cd ido-react

// 初始化，生成package.json文件
npm init 

// 安装 react react-dom react-loader react-scripts
npm install react react-dom --save 

// 安装 babel 等
npm install babelify babel-preset-react babel-preset-es2015 --save

// 安装webpack和webpack-dev-server
npm install webpage --save-dev
npm install webpage-dev-server --save-dev
```

在应用根目录创建`webpack.config.js`文件，并修改代码为

``` javascript
const webpack = require('webpack')
const path = require('path')
module.exports = {
    context: path.join(__dirname),
    entry: "./src/js/index.js",     // 入口文件
    module: {
        loaders: [{
            test: /\.js|jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    output: {
        path: __dirname,
        filename: './src/bundle.js'     // 打包生成的文件
    }
}
```

创建`.babelrc`文件，修改如下：

``` javascript
{
    "presets": [
        "es2015",
        "react"
    ],
    "plugins": []
}
```