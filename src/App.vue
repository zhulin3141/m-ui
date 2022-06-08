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
  </div>
</template>

<script>
import MButton from "./components/button/src/button";
import MButtonGroup from "./components/button/src/button-group";

export default {
  name: "App",
  components: {
    MButton,
    MButtonGroup,
  },
  created() {},
  methods: {
    handleClick(e) {
      console.log(e);
    },
  },
};
</script>

<style>
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
</style>
