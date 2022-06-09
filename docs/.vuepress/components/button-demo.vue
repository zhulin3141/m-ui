<template>
    <div class="button-demo">
        <DemoContentBlock v-if="type === 'basic'">
            <MButton>默认</MButton>
            <MButton type="success" size="sm">成功</MButton>
            <MButton type="primary" size="md">主要</MButton>
            <MButton type="danger" size="mini">失败</MButton>
            <MButton type="danger" size="sm" disabled>禁止</MButton>
            <MButton type="text" size="sm">文字</MButton>

            <template slot="code">
                使用type, size属性来定义 Button 的样式。
                <pre><code>{{basicCode}}</code></pre>
            </template>
        </DemoContentBlock>

        <DemoContentBlock v-if="type === 'disabled'">
            <MButton disabled>默认</MButton>
            <MButton type="success" size="sm" disabled>成功</MButton>
            <MButton type="primary" size="md" disabled>主要</MButton>
            <MButton type="danger" size="mini" disabled>失败</MButton>
            <MButton type="danger" size="sm" disabled>禁止</MButton>
            <MButton type="text" size="sm" disabled>文字</MButton>

            <template slot="code">
                使用 disabled 属性来定义按钮是否可用，它接受一个Boolean值。
                <pre><code>{{disabledCode}}</code></pre>
            </template>
        </DemoContentBlock>

        <DemoContentBlock v-if="type === 'group'">
            <MButtonGroup>
                <MButton>左</MButton>
                <MButton>中</MButton>
                <MButton>右</MButton>
            </MButtonGroup>

            <template slot="code">
                使用 &lt;MButtonGroup&gt; 标签来嵌套你的按钮。
                <pre><code>{{groupCode}}</code></pre>
            </template>
        </DemoContentBlock>
    </div>
</template>

<script>
import DemoContentBlock from './demo-block';
import MButton from '../../../src/components/button/src/button';
import MButtonGroup from '../../../src/components/button/src/button-group';

export default {
    components: {
        MButton,
        MButtonGroup,
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
                <MButton>默认</MButton>
                <MButton type="success" size="sm" @click="handleClick">成功</MButton>
                <MButton type="primary" size="md" @click="handleClick">主要</MButton>
                <MButton type="danger" size="mini" @click="handleClick">失败</MButton>
                <MButton type="danger" size="sm" disabled>禁止</MButton>
                <MButton type="text" size="sm" @click="handleClick">文字</MButton>
            `.replace(/^ {16}/gm, '').trim(),
            disabledCode: `
                <MButton disabled>默认</MButton>
                <MButton type="success" size="sm" disabled>成功</MButton>
                <MButton type="primary" size="md" disabled>主要</MButton>
                <MButton type="danger" size="mini" disabled>失败</MButton>
                <MButton type="danger" size="sm" disabled>禁止</MButton>
                <MButton type="text" size="sm" disabled>文字</MButton>
            `.replace(/^ {16}/gm, '').trim(),
            groupCode: `
                <MButtonGroup>
                    <MButton>左</MButton>
                    <MButton>中</MButton>
                    <MButton>右</MButton>
                </MButtonGroup>
            `.replace(/^ {16}/gm, '').trim(),
        };
    },
};
</script>

<style lang="less" scoped>
@import '../../../src/assets/style/docs-demo.less';
</style>