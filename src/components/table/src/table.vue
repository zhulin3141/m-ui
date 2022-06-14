<template>
    <table class="m-table" :border="this.border ? 1: 0" :class="{'table-striped': this.striped}">
        <thead>
            <tr>
                <th v-for="(column, key) in columns" :key="key">
                    {{ column.title }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row, rdx) in data" :key="rdx">
                <td v-for="(col, cdx) in columns" :key="cdx">
                    <template v-if="col.render">
                        <m-table-column :column="col" :row="row" :index="rdx" :render="col.render"></m-table-column>
                    </template>
                    <template v-else>
                        {{ row[col.key] }}
                    </template>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import MTableColumn from "./table-column.vue";

export default {
    name: "m-table",
    components: {
        MTableColumn,
    },
    props: {
        columns: {
            type: Array,
            require: true,
            default: () =>[],
        },
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