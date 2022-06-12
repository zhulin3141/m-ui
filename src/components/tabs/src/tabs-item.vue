<template>
  <div
    class="m-tabs-item"
    :class="dynamicClass"
    @click="changeItem"
    :data-name="name"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "m-tabs-item",
  inject: ["eventBus"],
  props: {
    name: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      selected: "",
    };
  },
  computed: {
    dynamicClass() {
      let obj = {
        disabled: this.disabled,
      };

      if (this.name === this.selected) {
        Object.assign(obj, { active: true });
      }
      return obj;
    },
  },

  created() {
    this.eventBus.$on("update:selected", (selectedName, vm) => {
      this.selected = selectedName;
    });
  },

  methods: {
    changeItem() {
      if (this.disabled) {
        return;
      }
      this.eventBus.$emit("update:selected", this.name, this);
      this.eventBus.$emit("tabs-click", this.name, this);
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../../assets/style/var";

.m-tabs-item {
  .base-font(14px, 24px);
  .flex(center, center);
  padding: 8px 0.8em;
  cursor: pointer;
  &:hover {
    color: @hover-color;
  }
  &.active {
    color: @color;
    font-weight: 600;
  }
  &.disabled {
    cursor: not-allowed;
    color: @disabled-color;
  }
}
</style>