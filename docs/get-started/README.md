---
title: '快速上手'
permalink: /get-started
---

# 快速上手
本节将介绍如何在项目中使用 m-ui。

## 引入 m-ui
你可以引入整个 m-ui，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 m-ui。

### 完整引入
在 main.js 中写入如下内容：
```
import Vue from 'vue';
import MUI from 'm-ui';
import 'm-ui/dist/index.css';
import App from './App.vue';
Vue.use(MUI);
new Vue({
  el: '#app',
  render: h => h(App)
});
```
以上代码便完成了 m-ui 的引入。需要注意的是，样式文件需要单独引入。

### 按需引入
如果你只希望引入部分组件，比如 Button和ButtonGroup，那么需要在 main.js 中写入以下内容：

```
import Vue from 'vue';
import {Button, ButtonGroup} from 'm-ui';
import 'm-ui/dist/index.css';
import App from './App.vue';
export default {
    name: 'app',
    components: {
        Button
    }
}
```


## 开始使用
至此，一个基于 Vue 和 m-ui 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。
