---
title: 利用v-model优化自定义组件
---

::: tip
一个组件上的 `v-model` 默认会绑定名为 `value` 的 `prop` 和名为 `input` 的事件
:::

## 自定义组件
> 以一个Nav标签栏为例

组件接收一个名为`active`的 `prop`，并通过 `change` 事件通知父组件修改 `active` 的值

### 实现方法
1. **不使用 `v-model`**

在父组件中，需要在 `data` 中设置对应子组件的 `prop`，并且还需要对子组件通过 `$emit` 触发的方法设置监听函数，这中情况下，每引入一次子组件，以上两种都需要再复制一遍，比较麻烦

2. **使用 `v-model`**

`model` 选项绑定名为`active`的 `prop`和 `change` 事件，这样在父组件引入时只需要使用 `v-model` 绑定对应属性即可，不用重复编写事件逻辑代码

```vue 
<template>
  <!-- ... -->
</template>
<script>
  export default {
    // ...
    props: {
      active: {
        type: Number,
        default: 0
      }
    },
    model : {
      prop: 'active',
      event: 'change'
    },
    // ...
    methods: {
      change() {
        this.$emit('change')
      }
    }
  }
</script>
```