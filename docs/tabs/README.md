---
sidebarDepth: 2
permalink: /tabs
---

# Tabs 标签页
提供标签页展示内容

## 基础用法
以水平方向展示标签页

<ClientOnly>
  <tabs-demo type="basic"/>
</ClientOnly>

## 垂直显示
可以让 标签 垂直显示

<ClientOnly>
  <tabs-demo type="vertical"/>
</ClientOnly>

## 禁用标签
<ClientOnly>
  <tabs-demo type="disabled"/>
</ClientOnly>

## Tabs 设置
| 参数       |  说明          |   类型   |   可选值 |  默认值  |
| --------- | -------------- | ------- | ------ | ------ |
| selected  | 选中的Tab-Item的名称    | string |  -    | -  |
| direction | 方向        | string | horizontal, vertical     |  horizontal   |