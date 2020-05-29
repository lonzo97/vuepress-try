---
title: ES6
---
### 计算属性
以字面量创建对象时，可以直接将 [] 的计算结果当做属性名
``` js
var i = 0
var obj = {
    ['NO' + ++i]: i;
    ['NO' + ++i]: i;
    ['NO' + ++i]: i
}

// obj { NO1: 1, NO2: 2, NO3: 3 }
```
### 参数解构
- 在vuex的action函数的应用
```js
actions: {
    increment ({ commit }) {
        commit('increment')
    }
}
```