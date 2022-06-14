---
sidebarDepth: 2
permalink: /carousel
---

# Carousel 走马灯


## 基础用法

<ClientOnly>
  <carousel-demo type="basic"/>
</ClientOnly>

## 指定指示器位置

<ClientOnly>
  <carousel-demo type="position"/>
</ClientOnly>


## Carousel属性
| 参数       |  说明          |   类型   |   可选值 |  默认值  |
| --------- | -------------- | ------- | ------ | ------ |
| height    | 走马灯的高度    | string  |  -     |   -    |
| autoplay  | 自动切换        | boolean |  -     | true   |
| interval  | 自动切换的时间间隔，单位为毫秒 |number|- | 3000 |
| loop      | 是否循环显示    | boolean | -      | true     |
| pagePosition  |指示器的位置 | string  |  none, outside, inside   | inside   |