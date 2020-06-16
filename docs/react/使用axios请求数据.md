---
title: 使用axios请求数据
---

## 安装
```bash
npm install axios
```

## 使用
### 封装请求方法
```js
// cloudMusic.js
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000/',  // 这里是一个本地代理线上云音乐服务地址
  withCredentials: true   // 跨域
})

const cloudMusic = function (url = '', params = {}) {
  params = {
    ...params
  }
  return new Promise((resolve, reject) => {
    http.get(
      url,
      { params })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}
// 获取轮播图
export function getBanner () {
  return cloudMusic('/banner')
}
```

### 组件内使用
::: tip 提示
ajax请求方法应该在 `componentDidMounted` 生命周期内使用，这样才能在请求数据到达时使用 `setState` 更新数据
:::
```js
// banner.js
import React, { Component } from 'react'
import { getBanner } from './cloudMusic'

class Banner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // 初始数据
      banners: []
    }
  }
  render() {
    return (
      
    )
  }
  componentDidMount() {
    // 发起ajax请求
    getBanner().then(res => {
      let banners = res.data.banners
      this.setState({
        banners
      })
    })
  }
}

export default Banner
```

## 参考链接
- [React 使用Ajax请求数据](https://www.html.cn/create-react-app/docs/fetching-data-with-ajax-requests/)

- [Axios文档](http://www.axios-js.com/zh-cn/docs/)

- [React Ajax FAQ](http://react.html.cn/docs/faq-ajax.html)