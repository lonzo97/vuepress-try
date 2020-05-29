---
title: Date
---
## 创建Date类型
### 不传参: 返回当前时间对象
```js
let d = new Date()
// Mon May 25 2020 14:37:41 GMT+0800 (中国标准时间)
```
### 传入一个参数
  - 时间戳: 返回从1970年1月1日经过该时间戳后的时间对象
```js
let d = new Date(1000000000)
// Sun Sep 09 2001 09:46:40 GMT+0800 (中国标准时间)
```

  - 表示时间戳的字符串: 返回该时间戳字符串表示的时间对象
```js
let d = new Date('2020-05-20')
// Wed May 20 2020 08:00:00 GMT+0800 (中国标准时间)

let d2 = new Date('2020-5-20 08:24:24')
// Wed May 20 2020 08:24:24 GMT+0800 (中国标准时间)
```

### 传入两个及以上的参数
::: tip 提示
1. 年份和月份是必要参数,其余参数(日、时、分、秒、毫秒)可选，没有传入的话则除日默认为1，其余参数默认为0;
2. 月的范围是0~11，即0表示一月;
3. 若传入的参数超出合理范围(如13月, 32天, 25时, 78分),相邻的数值会被调整;
4. 此时的时间参数代表的都是当地时间，若需要使用世界协调时UTC,则使用new Date(Date.UTC(...))
:::
```js
let d = new Date(2020, 4)
// Mon May 01 2020 00:00:00 GMT+0800 (中国标准时间) 

let d2 = new Date(2020, 4, 20, 13, 14)
// Wed May 20 2020 13:14:00 GMT+0800 (中国标准时间)

let d3 = new Date(2020, 13)
// Mon Feb 01 2021 00:00:00 GMT+0800 (中国标准时间)
```

## Date方法

### Date.now()
返回自1970-1-1 00:00:00 UTC(世界标准时间)至今所经过的毫秒数
```js
Date.now()
// 1590391001365
```
### Date.parse()
解析一个表示日期的字符串，并返回自1970-1-1 00:00:00至今所经过的毫秒数
```js
Date.parse('2020-1-1')
// 1577836800000
```
### Date.UTC()
接受与构造函数一样的参数，并返回并返回自1970-1-1 00:00:00 UTC至今所经过的毫秒数
```js
Date.UTC(2020,4,20,13,14)
// 1589980440000
```
::: danger 注意
由于浏览器差异和不一致性，尽量不要使用Date构造函数和Date.parse解析日期字符串
:::

## 时间格式化
> 在业务中我们经常会碰到各种时间格式化的场景，所以我们需要获取详细到时间每一项的信息，而每个Date实例都能够继承在Date类型的prototype上正好定义的一系列方法,我们可以在此基础上进行方法封装
```js
// 对于小于10的参数进行转换
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const formatDate = date => {
  let year = date.getFullYear()         // 年
  let month = date.getMonth() + 1       // 月(0-11，所以需要加1)
  let day = date.getDate()              // 日(1-31)
  let hour = date.getHours()            // 时(0-23)
  let minute = date.getMinutes()        // 分(0-59)
  let second = date.getSeconds()        // 秒(0-59)
  let mSecond = date.getMilliseconds()  // 毫秒(0-999)
  let weekDay = date.getDay()           // 星期(0-6, 0代表星期天)

  return [year, month, day].map(formatNumber).join('-')   // 这里转换的格式是: 2020-5-20
}
```
### Date的toString()、valueOf()
Date对象是继承自Object的，但其自身的toString()、valueOf()都覆盖了Object的prototype的对应方法
- toString()返回表示该日期的字符串
```js
new Date().toString()
// "Mon May 25 2020 16:31:44 GMT+0800 (中国标准时间)"
```
- valueOf()返回自1970-1-1 00:00:00 UTC至今所经过的毫秒数
```js
new Date().valueOf()
// 1590395516538

Date.now() === new Date().valueOf()
// true
```

#### 参考链接
[MDN Date](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date)

#### 时间格式化插件
[moment.js](http://momentjs.cn/)

[day.js](https://day.js.org/zh-CN/)
