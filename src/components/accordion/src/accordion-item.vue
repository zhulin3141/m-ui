<template>
  <div class="m-accordion-item">
    <div class="m-accordion-item-title" @click="toggle" :class="dynamicClass">
      {{ title }}
    </div>
    <transition name="collapse-transition">
      <div class="m-accordion-item-content" v-if="show">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "m-accordion-item",
  props: {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  inject: ["eventBus"],
  computed: {
    dynamicClass() {
      if (this.show) {
        return { "active-accordion-item": true };
      }
    },
  },

  created() {
    this.eventBus.$on("update:selected", (selectedNames) => {
      this.show = selectedNames.indexOf(this.name) >= 0;
    });
  },

  methods: {
    toggle() {
      if (this.show) {
        this.eventBus.$emit("update:removeSelected", this.name);
      } else {
        this.eventBus.$emit("update:addSelected", this.name);
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../../assets/style/var";

.m-accordion-item {
  margin-left: -1px;
  margin-right: -1px;
  margin-top: -1px;
  &-title {
    .base-font(14px, 18px, #303133);
    border: 1px solid @border-color;
    padding: 1rem 1.25rem;
    cursor: pointer;
  }
  &:first-of-type > &-title {
    .border-top-radius();
  }
  &:last-of-type > &-title {
    .border-bottom-radius();
    margin-bottom: -1px;
  }
  &-content {
    padding: 1rem 1.25rem;
  }
  .active-accordion-item {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}

.collapse-transition{
  &-enter-active, &-leave-active{
    overflow: hidden;
    transition: all 0.35s ease;
  }
  &-enter-from, &-leave-to{
    overflow: hidden;
  }
}
</style>