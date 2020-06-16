---
title: react-router相关
---

## `react-router` 分类

**1. react-router**

实现了路由的核心功能

**2. react-router-dom**

基于 `react-router`，加入了在浏览器运行环境下的一些功能

**3. react-router-native**

基于 `react-router`，加入了在 `react-native` 环境下的一些功能

### 路由组件

#### 路由器
- BrowserRouter
使用常规的 `URL` 路径，需要正确配置服务器的路径

- HashRouter
使用 `URL` 中的 `hash`，路径中会包含 `#` 符号

#### 路线匹配器
- Route
匹配当前路径

- Switch
渲染由 `Route` 或 `Redirect` 匹配的内容

#### 导航
- Link
用来创建链接，会被渲染为 `<a>` 标签

- NavLink
特殊类型的 `Link`

- Redirect
重定向

## 安装
> 以 `react-router-dom` 为例

```bash
npm install react-router-dom --save
```

## 使用
> 一个简单的例子
```js
// APP.js
import { Link, Route, Switch, HashRouter as Router } from 'react-router-dom'
import React from 'react'

function APP() {
  return (
    <Router>
      <Link to="/">首页</Link>
      <Link to="/page1">导航1</Link>
      <Link to="/page2">导航2</Link>
      <Switch>
        <Route exact path="/">首页</Route>
        <Route path="/page1">页面1</Route>
        <Route path="/page2">页面2</Route>
      </Switch>
    </Router>
  )
}
```

## 参考链接
[react-router](https://reacttraining.com/react-router/web/guides/quick-start)
