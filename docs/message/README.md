---
sidebarDepth: 2
permalink: /message
---

# Message 消息
提供关于操作的简短反馈

引入Message
```js
import Message from "./components/message/src/message.js";
Vue.prototype.$message = Message;
```

## 基础用法
适用性广泛的 Message

<ClientOnly>
  <message-demo type="basic"/>
</ClientOnly>

## 自定义位置
可以让 消息框 从顶部、中部或底部弹出

<ClientOnly>
  <message-demo type="position"/>
</ClientOnly>

## 自定义关闭按钮
可以自定义关闭按钮

<ClientOnly>
  <message-demo type="define"/>
</ClientOnly>

## 使用HTML消息
使用HTML消息

<ClientOnly>
  <message-demo type="html"/>
</ClientOnly>

## Message 设置
| 参数       |  说明          |   类型   |   可选值 |  默认值  |
| --------- | -------------- | ------- | ------ | ------ |
| enableHTML| 是否使用HTML    | boolean |  true, false    | false  |
| autoClose | 自动关闭        | number, boolean |   -     |  2     |
| position  | 位置            | string  | top, middle, bottom  | top   |
| closeButton  | 关闭按钮      | object |    -            | { text: '', callback: undefined }   |