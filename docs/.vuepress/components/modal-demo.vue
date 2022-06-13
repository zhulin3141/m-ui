<template>
  <div class="message-demo">
    <demo-content-block v-if="type === 'basic'">
      <div class="row">
        <m-button @click="showModal1">显示模态窗口</m-button>
      </div>
      <template slot="code">
        <pre><code>{{basicCode}}</code></pre>
      </template>
    </demo-content-block>
  </div>
</template>

<script>
import Vue from "vue";
import DemoContentBlock from "./demo-block";
import MButton from "../../../src/components/button/src/button";
import Modal from "../../../src/components/modal/src/modal.js";
import Message from "../../../src/components/message/src/message.js";

Vue.prototype.$alert = Modal;
Vue.prototype.$message = Message;

export default {
  components: {
    MButton,
    DemoContentBlock,
  },
  props: {
    type: {
      type: String,
      default: "basic",
    },
  },
  data() {
    return {
      basicCode: `
                <m-button @click="showModal1">显示模态窗口</m-button>
                <script>
                export default{
                    methods: {
                        showModal1() {
                            this.$alert('这是一段内容', '标题名称', {
                                confirmButtonText: '确定',
                                callback: action => {
                                    this.$message("这是一条提示");
                                }
                            })
                        }
                    }
                  }
                <${"/"}script>
            `
        .replace(/^ {16}/gm, "")
        .trim(),
    };
  },
  methods: {
    showModal1() {
        this.$alert('这是一段内容', '标题名称', {
            confirmButtonText: '确定',
            callback: action => {
                this.$message("这是一条提示");
            }
        })
    }
  },
};
</script>

<style lang="less" scoped>
@import "../../../src/assets/style/docs-demo.less";
</style>