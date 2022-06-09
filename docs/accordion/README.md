---
sidebarDepth: 2
permalink: /accordion
---

# Accordion - 折叠面板

## 基础用法
多个面板可同时打开,互相之间不会影响

<ClientOnly>
  <accordion-demo type="basic"/>
</ClientOnly>

## 手风琴效果
每次只会展示一个面板
<ClientOnly>
  <accordion-demo type="accordion"/>
</ClientOnly>

## Accordion 属性
| 参数       |  说明          |   类型   |   可选值 |  默认值  |
| --------- | -------------- | ------- | ------ | ------ |
| single    | 是否手风琴模式  | boolean | —      | false  |
| selected  | 选中的 name    | array   | —      |  —     |

## Accordion Item 属性
| 参数       |  说明          |   类型   |   可选值 |  默认值  |
| --------- | -------------- | -------  | ------ | ------ |
| title     | 标题           | string   |    —    | —      |
| name      | 唯一标志符      | string   |    —    |  —     |