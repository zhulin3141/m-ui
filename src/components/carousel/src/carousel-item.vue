<template>
  <div
    class="m-carousel-item"
    :style="itemStyle"
    :class="{ 'is-active': active }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "m-carousel-item",
  data() {
    return {
      translate: 0,
      active: false,
    };
  },
  computed: {
    itemStyle() {
      return {
        transform: `translateX(${this.translate}px)`,
      };
    },
  },
  created() {
    this.$parent && this.$parent.updateItems();
  },
  methods: {
    translateItem(index, activeIndex, oldIndex) {
      this.active = index === activeIndex;
      this.translate = this.$parent.$el["offsetWidth"] * (index - activeIndex);
    },
  },
};
</script>

<style lang='less' scoped>
@import "../../../assets/style/var";

.m-carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  overflow: hidden;
  z-index: 0;
  &.is-active {
    z-index: 2;
  }
}
</style>