<template>
  <div class="m-tabs-head" :class="dynamicClass">
    <div class="m-tabs-slot">
      <slot></slot>
    </div>
    <div class="line" ref="line"></div>
  </div>
</template>

<script>
export default {
  name: "m-tabs-head",
  inject: ["eventBus"],
  data() {
    return {
      direction: "",
    };
  },
  computed: {
    dynamicClass() {
      return {
        [`m-tabs-direction-${this.direction}`]: true,
      };
    },
  },

  mounted() {
    this.eventBus.$on("update:selected", (selectedName, vm) => {
      let { left: parentLeft, top: parentTop } =
        vm.$parent.$el.getBoundingClientRect();
      let { width, left, height, top } = vm.$el.getBoundingClientRect();

      const lineStyle = this.$refs.line.style;
      if (this.direction === "vertical") {
        lineStyle.height = `${height}px`;
        lineStyle.transform = `translateY(${top - parentTop}px)`;
      } else {
        lineStyle.width = `${width}px`;
        lineStyle.transform = `translateX(${left - parentLeft}px)`;
      }
    });
  },
};
</script>

<style lang="less" scoped>
@import "../../../assets/style/var";

.m-tabs-head {
  .flex(flex-start, center);
  padding: 0 1em;
  position: relative;
  &.m-tabs-direction-horizontal {
    border-bottom: 2px solid @border-color;
    margin-bottom: 4px;
  }
  & > .m-tabs-slot {
    .flex();
  }
  &.m-tabs-direction-vertical > .m-tabs-slot {
    flex-direction: column;
    align-items: flex-end;
    border-right: 2px solid @border-color;
  }
  & > .line {
    position: absolute;
    background-color: @line-bg-color;
    transition: all 0.2s linear;
  }
  &.m-tabs-direction-horizontal > .line {
    bottom: -2px;
    left: 0;
    height: 2px;
  }
  &.m-tabs-direction-vertical > .line {
    top: 0;
    right: 1em;
    width: 2px;
  }
}
</style>