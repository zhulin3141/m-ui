<template>
  <div class="m-tabs" :class="dynamicClass">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "m-tabs",
  props: {
    selected: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      required: false,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) >= 0;
      },
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  computed: {
    dynamicClass() {
      return {
        [`direction-${this.direction}`]: true,
      };
    },
  },
  created() {
    this.eventBus.$on("tabs-click", (selectedName, vm) => {
      this.$emit("tabs-click", selectedName);
    });
  },
  mounted() {
    if (this.$children.length === 0) {
      console.warn(
        "tabs的子组件应该是 tabs-head 和 tabs-body, 但你没有写子组件"
      );
    }

    this.$children.map((headComponent) => {
      if (headComponent.$options.name === "m-tabs-head") {
        console.log(headComponent);
        headComponent.direction = this.direction;
      }
      headComponent.$children.map((itemComponent) => {
        if (
          itemComponent.$options.name === "m-tabs-item" &&
          itemComponent.name === this.selected
        ) {
          this.eventBus.$emit("update:selected", this.selected, itemComponent);
        }
      });
    });
  },
};
</script>

<style lang="less" scoped>
@import "../../../assets/style/var";

.m-tabs {
  &.direction-horizontal {
    .m-tabs-panel {
      padding: 0.6em 1em;
    }
  }
  &.direction-vertical {
    .flex();
  }
}
</style>