---
sidebarDepth: 2
permalink: /progress
---

# Progress 进度条
用于展示操作进度


## 线形进度条

<ClientOnly>
  <progress-demo type="basic"/>
</ClientOnly>


## 环形进度条
Progress 组件可通过 type 属性来指定使用环形进度条

<ClientOnly>
  <progress-demo type="circle"/>
</ClientOnly>

## Progress属性
| 参数       |  说明          |   类型   |   可选值 |  默认值  |
| --------- | -------------- | ------- | ------ | ------ |
| type      | 进度条类型      | string  |  line,circle     | line  |
| percentage| 进度           | number  |  0-100     |   -     |
| width     | 环形进度条画布宽度 | number  |  -         | 126     |
| strokeWidth|进度条的宽度，单位 px  | number | -      | 6     |
| customColor  | 进度条颜色  | string  |   -         | #fff   |