<template>
  <div class="message-demo">
    <demo-content-block v-if="type === 'basic'">
      <div class="row">
        <MButton @click="onClick1">默认消息</MButton>
        <MButton @click="onClick2">设置自动关闭时间</MButton>
      </div>
      <template slot="code">
        <pre><code>{{basicCode}}</code></pre>
      </template>
    </demo-content-block>

    <demo-content-block v-if="type === 'position'">
      <div class="row">
        <MButton @click="onTopClick">顶部弹出</MButton>
        <MButton @click="onMiddleClick">中部弹出</MButton>
        <MButton @click="onBottomClick">底部弹出</MButton>
      </div>
      <template slot="code">
        <pre><code>{{posCode}}</code></pre>
      </template>
    </demo-content-block>

    <demo-content-block v-if="type === 'define'">
      <div class="row">
        <MButton @click="onDefineClick">自定义关闭按钮</MButton>
      </div>
      <template slot="code">
        <pre><code>{{defineCode}}</code></pre>
      </template>
    </demo-content-block>

    <demo-content-block v-if="type === 'html'">
      <div class="row">
        <MButton @click="onHTMLClick">使用HTML消息</MButton>
      </div>
      <template slot="code">
        <pre><code>{{htmlCode}}</code></pre>
      </template>
    </demo-content-block>
  </div>
</template>

<script>
import Vue from "vue";
import DemoContentBlock from "./demo-block";
import MButton from "../../../src/components/button/src/button";
import Message from "../../../src/components/message/src/message";

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
                <MButton @click="onClick1">默认消息</MButton>
                <MButton @click="onClick2">设置自动关闭时间</MButton>
                <script>
                  export default{
                    methods: {
                      onClick1() {
                          this.$message('默认自动关闭');
                      },
                      onClick2() {
                          this.$message('5s后自动关闭', {
                              autoClose: 5,
                          });
                      },
                    }
                  }
                <${"/"}script>
            `
        .replace(/^ {16}/gm, "")
        .trim(),
      posCode: `
                <MButton @click="onTopClick">顶部弹出</MButton>
                <MButton @click="onMiddleClick">中部弹出</MButton>
                <MButton @click="onBottomClick">底部弹出</MButton>
                <script>
                    export default{
                        methods: {
                            onTopClick() {
                              this.$message('从头部弹出消息', {
                                position: "top",
                              });
                            },
                            onMiddleClick() {
                              this.$message('从中间弹出消息', {
                                  position: "middle",
                              });
                            },
                            onBottomClick() {
                              this.$message('从底部弹出消息', {
                                  position: "bottom",
                              });
                            },
                        }
                    }
                <${"/"}script>
            `
        .replace(/^ {16}/gm, "")
        .trim(),
      defineCode: `
                <MButton @click="onDefineClick">自定义关闭按钮</MButton>
                <script>
                  export default{
                    methods: {
                      onDefineClick() {
                        this.$message("自定义关闭按钮", {
                          autoClose: false,
                          closeButton: {
                            text: "关闭",
                            callback: () => {
                              console.log("关闭了 Message");
                            },
                          },
                        });
                      },
                    }
                  }
                <${"/"}script>
            `
        .replace(/^ {16}/gm, "")
        .trim(),        
      htmlCode: `
                <MButton @click="onHTMLClick">使用HTML消息</MButton>
                <script>
                  export default{
                    methods: {
                      onHTMLClick() {
                        this.$message("使用<strong>HTML</strong>消息", {
                          enableHTML: true,
                        });
                      },
                    }
                  }
                <${"/"}script>
            `
        .replace(/^ {16}/gm, "")
        .trim(),
    };
  },
  methods: {
    onClick1() {
      this.$message("默认自动关闭");
    },
    onClick2() {
      this.$message("5s后自动关闭", {
        autoClose: 5,
      });
    },
    onTopClick() {
      this.$message("从头部弹出消息", {
        position: "top",
      });
    },
    onMiddleClick() {
      this.$message("从中间弹出消息", {
        position: "middle",
      });
    },
    onBottomClick() {
      this.$message("从底部弹出消息", {
        position: "bottom",
      });
    },
    onDefineClick() {
      this.$message("自定义关闭按钮", {
        autoClose: false,
        closeButton: {
          text: "关闭",
          callback: () => {
            console.log("关闭了 Message");
          },
        },
      });
    },
    onHTMLClick() {
      this.$message("使用<strong>HTML</strong>消息", {
        enableHTML: true,
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../../src/assets/style/docs-demo.less";
</style>