---
title: 问题集合
---

## 引用在线图片返回 403
> 在引用豆瓣api中的图片时，发现所有图片请求的状态码都返回 `403`

这种情况是由于 `Referrer-Policy` 首部会监管访问来源信息，决定哪些访问来源信息应该被包含在生成的请求中

[Referrer-Policy MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Referrer-Policy)

### 解决方法
在 `html` 中添加如下标签
```html
<meta name="reference" content="no-reference">
```