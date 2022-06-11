<template>
  <button
    class="m-button"
    @click="handleClick"
    :disabled="disabled"
    :type="type"
    :class="btnClasses"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MButton",

  props: {
    type: {
      type: String,
      default: "primary",
      validator(val) {
        return ["primary", "success", "danger", "text"].includes(val);
      },
    },
    outline: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "md",
      validator(val) {
        return ["md", "sm", "mini"].includes(val);
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    btnClasses() {
      return {
        [`m-button-${this.type}`]: this.type,
        [`m-button-outline-${this.type}`]: this.outline,
        [`m-button-${this.size}`]: this.size,
        [`is-disabled`]: this.disabled,
      };
    },
  },

  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../../assets/style/var";

@success-color: #37e270;
@primary-color: #0d6efd;
@danger-color: #dc3545;

.m-button {
  padding: 0 1.4em;
  border-radius: @border-radius;
  border: @button-border solid @border-color;
  background-color: @button-bg;
  cursor: pointer;
  min-height: @min-height;
  transition: all @transition-duration linear;

  &:disabled {
    cursor: not-allowed !important;
    opacity: 0.65;
  }
  &-success {
    color: @default-color;
    background-color: @success-color;
    border-color: @success-color;
    &:hover {
      background-color: darken(@success-color, 10%);
    }
    &.is-disabled,
    &.is-disabled:hover {
      background-color: @success-color;
    }
  }
  &-primary {
    color: @default-color;
    background-color: @primary-color;
    border-color: @primary-color;
    &:hover {
      background-color: darken(@primary-color, 10%);
    }
    &.is-disabled,
    &.is-disabled:hover {
      background-color: @primary-color;
    }
  }
  &-danger {
    color: @default-color;
    background-color: @danger-color;
    border-color: @danger-color;
    &:hover {
      background-color: darken(@danger-color, 10%);
    }
    &.is-disabled,
    &.is-disabled:hover {
      background-color: @danger-color;
    }
  }
  &-text {
    border: @button-border solid @default-color;
  }
  
  &-outline-success, &-outline-primary, &-outline-danger {
    background-color: @default-color;
    &:hover {
      color: @default-color;
    }
  }
  &-outline-success {
    color: @success-color;
  }
  &-outline-primary {
    color: @primary-color;
  }
  &-outline-danger {
    color: @danger-color;
  }

  &-md {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
  }
  &-sm {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
  }
  &-mini {
    padding: 7px 15px;
    font-size: 12px;
    border-radius: 3px;
  }

  &:hover {
    cursor: pointer;
    transition: all 0.5s;
  }
}
</style>