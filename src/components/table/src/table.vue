<template>
    <table class="m-table" :border="this.border ? 1: 0" :class="{'table-striped': this.striped}">
        <thead>
            <tr>
                <th v-for="column in columns" :key="column.prop">
                    {{ column.label }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row, index) in rows" :key="index">
                <td v-for="(v, k) in row" :key="k">{{ v }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>

export default {
    name: "m-table",
    props: {
        data: {
            type: Array,
            default: () => [],
        },
        striped: {
            type: Boolean,
            default: false,
        },
        border: {
            type: Boolean,
            default: false,
        }
    },
    computed: {
        columns() {
            return this.$slots.default.filter(node=>node.data).map(({data: {attrs}}) => ({
                prop: attrs.prop,
                label: attrs.label,
            }))
        },
        rows() {
            return this.data.map(item=>{
                return this.columns.reduce((prev, {prop})=>{
                    prev[prop] = item[prop];
                    return prev;
                }, {})
            })
        }
    }
}
</script>

<style lang="less" scoped>
@import "../../../assets/style/var";

.m-table {
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
    vertical-align: top;
    border-color: @border-color;
    border-collapse: collapse;
    text-align: left;
    &.table-striped > tbody > tr:hover {
        background: @border-color-hover;
    }
}
</style>