---
sidebarDepth: 2
permalink: /input
---

# Input - 输入框
常用的输入框

## 基础用法
基础的输入框用法。

<ClientOnly>
  <input-demo type="basic"/>
</ClientOnly>

## 禁用状态 & 可读状态
<ClientOnly>
  <input-demo type="disabled"/>
</ClientOnly>

## 复合型输入框
<ClientOnly>
  <input-demo type="group"/>
</ClientOnly>

## Input 属性
| 参数       |  说明          |   类型   |   可选值 |  默认值  |
| --------- | -------------- | ------- | ------ | ------ |
| type      | 类型      | string  |  text, password      | text  |
| value     | 值        | string   |                    |  -     |
| disabled  | 禁用      | boolean  |    -               | false   |
| readonly  | 只读      | boolean  |    -               | false   |
| placeholder  | 占位      | string  |    -               | -   |