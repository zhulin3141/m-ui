<template>
    <div class="button-demo">
        <DemoContentBlock v-if="type === 'basic'">
            <m-table :data="tableData">
                <m-table-column label="日期" prop="date" />
                <m-table-column label="姓名" prop="name" />
                <m-table-column label="地址" prop="address" />
            </m-table>

            <template slot="code">
                <pre><code>{{basicCode}}</code></pre>
            </template>
        </DemoContentBlock>

        <DemoContentBlock v-if="type === 'border'">
            <m-table :data="tableData" border>
                <m-table-column label="日期" prop="date" />
                <m-table-column label="姓名" prop="name" />
                <m-table-column label="地址" prop="address" />
            </m-table>

            <template slot="code">
                <pre><code>{{borderCode}}</code></pre>
            </template>
        </DemoContentBlock>

        <DemoContentBlock v-if="type === 'striped'">
            <m-table :data="tableData" striped>
                <m-table-column label="日期" prop="date" />
                <m-table-column label="姓名" prop="name" />
                <m-table-column label="地址" prop="address" />
            </m-table>

            <template slot="code">
                <pre><code>{{stripedCode}}</code></pre>
            </template>
        </DemoContentBlock>
    </div>
</template>

<script>
import DemoContentBlock from './demo-block';
import MTable from '../../../src/components/table/src/table.vue'

export default {
    components: {
        DemoContentBlock,
        MTable,
    },
    props: {
        type: {
            type: String,
            default: 'basic'
        }
    },
    data() {
        return {
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }
            ],
            basicCode: `
                <m-table :data="tableData">
                    <m-table-column label="日期" prop="date" />
                    <m-table-column label="姓名" prop="name" />
                    <m-table-column label="地址" prop="address" />
                </m-table>
            `.replace(/^ {16}/gm, '').trim(),
            borderCode: `
                <m-table :data="tableData" border>
                    <m-table-column label="日期" prop="date" />
                    <m-table-column label="姓名" prop="name" />
                    <m-table-column label="地址" prop="address" />
                </m-table>
            `.replace(/^ {16}/gm, '').trim(),
            stripedCode: `
                <m-table :data="tableData" striped>
                    <m-table-column label="日期" prop="date" />
                    <m-table-column label="姓名" prop="name" />
                    <m-table-column label="地址" prop="address" />
                </m-table>
            `.replace(/^ {16}/gm, '').trim(),
        };
    },
};
</script>

<style lang="less" scoped>
@import '../../../src/assets/style/docs-demo.less';
.m-table{
    width: 452px;
}
</style>