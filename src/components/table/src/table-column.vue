<script>
export default {
  name: "m-table-column",
  props: {
    row: Object,
    column: Object,
    index: Number,
  },
  render(h) {
    return h('div', this.$slots.default)
  },
};
</script>