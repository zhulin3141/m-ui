<template>
  <div class="modal-wrapper fade" v-if="showModal">
    <div class="modal-mask">
      <div class="m-modal">
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-title">{{ title }}</div>
            <button type="button" class="close" @click="handleAction">×</button>
          </div>
          <div class="modal-body">
            <slot>{{ message }}</slot>
          </div>
          <div class="modal-footer">
            <m-button size="mini" @click="handleConfirmButton">{{
              confirmButtonText
            }}</m-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MButton from "../../button/src/button.vue";

export default {
  components: {
    MButton,
  },
  name: "m-modal",
  props: {},
  data() {
    return {
      showModal: true,
    };
  },
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "overflow: hidden;");
  },
  beforeDestroy() {
    document.querySelector("body").setAttribute("style", "overflow: auto;");
  },
  methods: {
    handleAction() {
      this.$el.remove();
      this.$emit("close");
      this.$destroy();
    },

    handleConfirmButton() {
      this.callback()
      this.handleAction()
    }
  },
};
</script>

<style lang="less" scoped>
@import "../../../assets/style/var";

.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2055;
  text-align: center;
}
.modal-mask::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 0;
  vertical-align: middle;
}

.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2024;
}
.m-modal {
  display: inline-block;
  width: 420px;
  text-align: left;
  background: #fff;
  border: 1px solid @border-color;
  .border-radius();
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);

  & .modal-header {
    position: relative;
    padding: 15px 15px 10px;

    .close {
      position: absolute;
      top: 15px;
      right: 15px;
      border: none;
      outline: none;
      background: transparent;
      font-size: 16px;
      cursor: pointer;
    }
  }
  & .modal-body {
    padding: 10px 15px;
  }
  & .modal-footer {
    padding: 5px 15px 5px;
    text-align: right;
  }
}
</style>