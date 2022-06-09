<template>
  <div class="m-input-wrapper">
    <!-- 前置元素 -->
    <div class="m-input-group__before" v-if="$slots.before">
      <slot name="before"></slot>
    </div>

    <input
      class="m-input"
      :value="value"
      :type="type"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      @input="handleInput"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
    />

    <!-- 后置元素 -->
    <div class="m-input-group__after" v-if="$slots.after">
      <slot name="after"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "m-input",
  props: {
    type: {
      type: String,
      required: false,
      default: "text",
    },
    value: {
      type: String,
      required: false,
      default: "",
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    readonly: {
      type: Boolean,
      require: false,
      default: false,
    },
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
  },
  data() {
    return {};
  },

  computed: {},

  mounted() {},

  methods: {
    handleInput(event) {
      this.$emit("input", event.target.value);
    },
    handleChange(event) {
      this.$emit("change", event.target.value);
    },
    handleFocus(event) {
      this.focused = true;
      this.$emit("focus", event);
    },
    handleBlur(event) {
      this.focused = false;
      this.$emit("blur", event);
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../../assets/style/var";

.m-input-wrapper {
  display: inline-table;
  & .m-input-group__before,
  & .m-input-group__after {
    display: table-cell;
    .base-font();
    padding: 0.8em 1em;
    border: 1px solid @border-color;
    border-radius: @border-radius;
    white-space: nowrap;
  }
  & .m-input-group__before {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  & .m-input-group__after {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: 0;
  }

  & .m-input {
    display: table-cell;
    box-sizing: border-box;
    padding: @padding @padding-bigger;
    border-radius: @border-radius;
    border: @input-border solid @border-color;
    margin-left: -1px;

    &:hover {
      border-color: @border-color-hover;
    }
    &:focus {
      outline: none;
      border-color: @border-color-focus;
      box-shadow: 0 0 1px 1px @box-shadow-color;
    }
    &[disabled],
    &[readonly] {
      cursor: not-allowed;
      border-color: @border-color-disabled;
      background-color: @bg-color-disabled;
      color: @color-disabled;
    }
    &::placeholder {
      color: @color-placeholder;
    }
  }
}
</style>