<template>
    <div class="button-demo">
        <DemoContentBlock v-if="type === 'basic'">
            <m-progress :percentage="50" customColor="#409eff" />
            <m-progress :percentage="30" customColor="#409eff" />

            <template slot="code">
                <pre><code>{{basicCode}}</code></pre>
            </template>
        </DemoContentBlock>

        <DemoContentBlock v-if="type === 'circle'">
            <m-progress type="circle" :percentage="50" customColor="#409eff" />
            <m-progress type="circle" :percentage="90" customColor="#44f8ad" />
            <m-progress type="circle" :percentage="30" :strokeWidth="15" customColor="#fd539a" />

            <template slot="code">
                <pre><code>{{circleCode}}</code></pre>
            </template>
        </DemoContentBlock>
    </div>
</template>

<script>
import DemoContentBlock from './demo-block';
import MProgress from '../../../src/components/progress/src/progress';

export default {
    components: {
        MProgress,
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
                <m-progress :percentage="50" customColor="#409eff" />
                <m-progress :percentage="30" customColor="#409eff" />
            `.replace(/^ {16}/gm, '').trim(),
            circleCode: `
                <m-progress type="circle" :percentage="50" customColor="#409eff" />
                <m-progress type="circle" :percentage="90" customColor="#44f8ad" />
            `.replace(/^ {16}/gm, '').trim(),
        };
    },
};
</script>

<style lang="less" scoped>
@import '../../../src/assets/style/docs-demo.less';
</style>