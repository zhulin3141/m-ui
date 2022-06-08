<template>
  <div id="app">
    <div id="btn-demo">
      <MButton>默认</MButton>
      <MButton type="success" size="sm" @click="handleClick">成功</MButton>
      <MButton type="primary" size="md" @click="handleClick">主要</MButton>
      <MButton type="danger" size="mini" @click="handleClick">失败</MButton>
      <MButton type="danger" size="sm" disabled>禁止</MButton>
      <MButton type="text" size="sm" @click="handleClick">文字</MButton>
    </div>

    <div id="btn-group-demo">
      <MButtonGroup>
        <MButton>左</MButton>
        <MButton>中</MButton>
        <MButton>右</MButton>
      </MButtonGroup>
    </div>

    <div id="btn-input">
      <MInput placeholder="请输入数据" />
      <MInput value="我是谁" placeholder="请输入数据" @blur="showInputData" />
      <MInput type="password" placeholder="请输入密码" />
      <MInput value="333333333" disabled placeholder="请输入数据" />
      <MInput value="55555555555" readonly placeholder="请输入数据" />

      <div class="m-row">
        <MInput placeholder="请输入数据">
          <template slot="before">http://</template>
          <template slot="after">.com</template>
        </MInput>
      </div>
    </div>
  </div>
</template>

<script>
import MButton from "./components/button/src/button";
import MButtonGroup from "./components/button/src/button-group";
import MInput from "./components/input/src/input";

export default {
  name: "App",
  components: {
    MButton,
    MButtonGroup,
    MInput,
  },
  created() {},
  methods: {
    handleClick(e) {
      console.log(e);
    },

    showInputData() {
      console.log(this);
    },
  },
};
</script>

<style lang="less">
html,
body {
  margin: 0;
  height: 100%;
}
#app {
  height: 100%;
}
#btn-demo .m-button {
  margin: 3px;
}
.m-row {
  width: 100%;
  .m-input-wrapper {
    display: inline-table;
    .m-input{
      border-radius: 0;
    }
  }
}
</style>
