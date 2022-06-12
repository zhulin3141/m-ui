<template>
  <div class="m-tabs-panel" :class="dynamicClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "m-tabs-panel",
  inject: ["eventBus"],
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selected: "",
    };
  },
  computed: {
    dynamicClass() {
      if (this.name === this.selected) {
        return {
          active: true,
        };
      }
    },
  },
  created() {
    this.eventBus.$on("update:selected", (selectedName) => {
      this.selected = selectedName;
    });
  },
};
</script>

<style lang="less" scoped>
@import "../../../assets/style/var";
.m-tabs-panel {
  display: none;
  &.active {
    display: block;
  }
}
</style>