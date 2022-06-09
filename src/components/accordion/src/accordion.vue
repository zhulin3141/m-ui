<template>
  <div class="m-accordion">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: "m-accordion",

  data() {
    return {
      eventBus: new Vue(),
      selectedNames: new Set(),
    };
  },

  props: {
    single: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Array,
      required: true,
    },
  },

  provide() {
    return {
      eventBus: this.eventBus,
    };
  },

  created() {
    if (this.selected.length) this.selectedNames.add(this.selected[0]);

    this.eventBus.$on("update:removeSelected", (name) => {
      this.toggleShow("hidden", name);
    });
    this.eventBus.$on("update:addSelected", (name) => {
      this.toggleShow("show", name);
    });
  },
  mounted() {
    this.eventBus.$emit("update:selected", this.selected);
  },

  methods: {
    toggleShow(type, name) {
      if (type === "show") {
        this.selectedNames = this.single
          ? new Set([name])
          : this.selectedNames.add(name);
      } else if (type === "hidden") {
        this.selectedNames.delete(name);
      }

      this.eventBus.$emit("update:selected", Array.from(this.selectedNames));
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../../assets/style/var";

.m-accordion {
  border: 1px solid @border-color;
  border-radius: @border-radius;
}
</style>