---
sidebarDepth: 2
permalink: /button
---

# Button - 按钮
常用的操作按钮

## 基础用法
基础的按钮用法。

<ClientOnly>
  <button-demo type="basic"/>
</ClientOnly>

## 禁用状态
按钮不可用状态。

<ClientOnly>
  <button-demo type="disabled"/>
</ClientOnly>

## 按钮组
<ClientOnly>
  <button-demo type="group"/>
</ClientOnly>

## Button 属性
| 参数       |  说明          |   类型   |   可选值 |  默认值  |
| --------- | -------------- | ------- | ------ | ------ |
| type      | 按钮类型   | string  |  primary, success, danger, text      | primary  |
| size      | 大小      | string   |   md, sm, mini                       |  md     |
| disabled  | 禁用      | boolean  |                                      | false   |
| outline   | 边框按钮  | boolean  |   -                                  | false   |
