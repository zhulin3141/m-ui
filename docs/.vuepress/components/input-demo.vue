<template>
    <div class="button-demo">
        <DemoContentBlock v-if="type === 'basic'">
            <MInput placeholder="请输入数据" />
            <MInput value="我是谁" placeholder="请输入数据"/>
            <MInput type="password" placeholder="请输入密码" />

            <template slot="code">
                使用type属性来定义 输入框 的样式。
                <pre><code>{{basicCode}}</code></pre>
            </template>
        </DemoContentBlock>

        <DemoContentBlock v-if="type === 'disabled'">
            <MInput value="333333333" disabled placeholder="请输入数据" />
            <MInput value="55555555555" readonly placeholder="请输入数据" />

            <template slot="code">
                使用 disabled 属性来定义 输入框 是否可用，它接受一个Boolean值。
                <pre><code>{{disabledCode}}</code></pre>
            </template>
        </DemoContentBlock>

        <DemoContentBlock v-if="type === 'group'">
            <MInput placeholder="请输入数据">
                <template slot="before">http://</template>
                <template slot="after">.com</template>
            </MInput>

            <template slot="code">
                使用 插槽 给输入框前置或后置元素
                <pre><code>{{groupCode}}</code></pre>
            </template>
        </DemoContentBlock>
    </div>
</template>

<script>
import DemoContentBlock from './demo-block';
import MInput from '../../../src/components/input/src/input';

export default {
    components: {
        MInput,
        DemoContentBlock,
    },
    props: {
        type: {
            type: String,
            default: 'basic'
        }
    },
    data() {
        return {
            basicCode: `
                <MInput placeholder="请输入数据" />
                <MInput value="我是谁" placeholder="请输入数据" @blur="showInputData" />
                <MInput type="password" placeholder="请输入密码" />
            `.replace(/^ {16}/gm, '').trim(),
            disabledCode: `
                <MInput value="333333333" disabled placeholder="请输入数据" />
                <MInput value="55555555555" readonly placeholder="请输入数据" />
            `.replace(/^ {16}/gm, '').trim(),
            groupCode: `
                <MInput placeholder="请输入数据">
                    <template slot="before">http://</template>
                    <template slot="after">.com</template>
                </MInput>
            `.replace(/^ {16}/gm, '').trim(),
        };
    },
};
</script>

<style lang="less" scoped>
@import '../../../src/assets/style/docs-demo.less';
</style>