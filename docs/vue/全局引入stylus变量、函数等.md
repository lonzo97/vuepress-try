---
title: 全局引入stylus变量、函数
---

::: tip
在创建项目时，由于个人习惯问题，我通常会选择stylus作为css预处理语言，并且会单独建立一个目录去存放 `styl` 文件，这样既可以在每个 `*.vue` 单文件组件中使用 `stylus` 的语法，也可以复用一些 `stylus` 编写的公共样式、变量、函数等
:::

### 引入 `stylus` 文件 的两种情况

**1. 只使用 `stylus` 的缩进、省略大括号、分号的基础语法**

```stylus
.flex
  display: flex
```

这种情况下和正常css的引入基本没有区别，在 `main.js` 全局引入后即可在各个 `*vue` 单文件组件中使用

**2. 使用 `stylus` 的变量、函数等高级语法**

```stylus
// 变量
$theme-color = #42b983 

// 函数
multiline-ellipsis($num = 2) 
  overflow: hidden
  text-overflow: ellipsis
  display: -webkit-box
  -webkit-line-clamp: $num
  -webkit-box-orient: vertical
  white-space: normal !important
  word-wrap: break-word
```

这种情况下在 `main.js` 中全局引入然后在各个 `*.vue`单文件组件中使用时不生效的

## 解决方法

在项目根目录下新增 `vue.config.js` 文件，根据文档提示使用 `css.loaderOptions` 给 `stylus-loader` 传递配置选项，这样就可以在项目中所有地方的 `stylus` 样式使用你定义的变量、函数等（不必在 `main.js` 中引入）
```js
const path = require('path')

module.exports = {
  // 其他配置
  css: {
    loaderOptions: {
      // 这里选择的是stylus，也选择scss、less，但是写法会有差别，需要根据你安装的loader来定
      stylus: {
        import: path.resolve(__dirname, './src/assets/style/index.styl')
      }
    }
  }
  // 其他配置
}
```

### 其他技巧
对于不同种类的样式，可以分开文件管理，然后统一引入一个文件，最后在 `vue.config.js` 引入那一个文件即可
- `mixin.styl` mixin函数相关
```stylus
// ...
```

- `variables.styl` 变量相关
```stylus
// ...
```

- `index.styl` 统一出口
```stylus
@import 'mixin.styl'
@import 'variables.styl'
```

### 参考链接
- [vue-cli css相关](https://cli.vuejs.org/zh/guide/css.html)
- [stylus-loader](https://github.com/shama/stylus-loader)
