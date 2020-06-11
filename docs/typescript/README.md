---
title: typescript
---
## 你是如何理解ts的
- js是动态类型语言，所以它的变量可以任意转换，定义时候的类型不一定和执行时候的类型一样，所以有时候会发生由于类型转换而引发的错误
- ts为js提供了一个静态类型编译功能，开发者可以再定义变量的时候指定数据类型，给代码添加类型约束，这样就可以避免上述的错误

### 安装
```bash
npm install -g typescript
```
### 编译
> 编译实际上是将ts转为js
```bash
tsc index.ts
```

## 快速了解
### 类型注解
```ts
function hello(name: string) {
    console.log(`hello,${name}`)
}
// 这里指定了hello方法的参数name为string类型
```

### 类型断言
> 自己确切知道某个值的类型
1. 尖括号语法
```ts
let someValue: any = 'this is a string';
let len: number = (<string>someVlaue).length
```
2. as语法
```ts
let someValue: any = 'this is a string';
let len: number = (someValue as string).length
```

### 接口
```ts
interface Person {
    firstName: string;
    lastName: string
}
```
### 类
> 接口与类可以共同运作
```ts
// 定义一个Student类
class Student {
    fullName: string;
    constructor(public firstName, public lastName, public rank) {
        this.fullName = `${firstName} ${lastName} - ${rank}`
    }
}

// 定义一个Person接口
interface Person {
    firstName: string;
    lastName: string;
}

// 定义一个方法，接收Person的实例
function hello(person: Person) {
   consoel.log(`hello,${person.firstName} ${person.lastName}`)
}

let s1 = new Student('lonzo', 'ball', 'S')
hello(s1)
```
#### 参考链接
[Typescript手册指南](https://www.tslang.cn/docs/handbook/basic-types.html)