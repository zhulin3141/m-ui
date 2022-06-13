---
sidebarDepth: 2
permalink: /modal
---

# Modal 模态窗口
显示模态窗口

引入Modal
```js
import Modal from "./components/modal/src/modal.js";
Vue.prototype.$alert = Modal;
```

## 基础用法
适用性广泛的 Modal

<ClientOnly>
  <modal-demo type="basic"/>
</ClientOnly>