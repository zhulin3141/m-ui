<template>
    <div class="tabs-demo">
        <DemoContentBlock v-if="type === 'basic'">
            <MTabs selected="tab1">
                <MTabHead>
                    <MTabItem name="tab1">tab1</MTabItem>
                    <MTabItem name="tab2">tab2</MTabItem>
                    <MTabItem name="tab3">tab3</MTabItem>
                    <MTabItem name="tab4">tab4</MTabItem>
                </MTabHead>
                <MTabPanel name="tab1">
                    tab1
                </MTabPanel>
                <MTabPanel name="tab2">
                    tab2
                </MTabPanel>
                <MTabPanel name="tab3">
                    tab3
                </MTabPanel>
                <MTabPanel name="tab4">
                    tab4
                </MTabPanel>
            </MTabs>

            <template slot="code">
                <pre><code>{{basicCode}}</code></pre>
            </template>
        </DemoContentBlock>

        <DemoContentBlock v-if="type === 'vertical'">
            <MTabs selected="tab2" direction="vertical">
                <MTabHead>
                    <MTabItem name="tab1">tab1</MTabItem>
                    <MTabItem name="tab2">tab2</MTabItem>
                    <MTabItem name="tab3">tab3</MTabItem>
                    <MTabItem name="tab4">tab4</MTabItem>
                </MTabHead>
                <MTabPanel name="tab1">
                    tab1
                </MTabPanel>
                <MTabPanel name="tab2">
                    tab2
                </MTabPanel>
                <MTabPanel name="tab3">
                    tab3
                </MTabPanel>
                <MTabPanel name="tab4">
                    tab4
                </MTabPanel>
            </MTabs>

            <template slot="code">
                <pre><code>{{verticalCode}}</code></pre>
            </template>
        </DemoContentBlock>

        <DemoContentBlock v-if="type === 'disabled'">
            <MTabs selected="tab3">
                <MTabHead>
                    <MTabItem name="tab1">tab1</MTabItem>
                    <MTabItem name="tab2" disabled>tab2</MTabItem>
                    <MTabItem name="tab3">tab3</MTabItem>
                    <MTabItem name="tab4">tab4</MTabItem>
                </MTabHead>
                <MTabPanel name="tab1">
                    tab1
                </MTabPanel>
                <MTabPanel name="tab2">
                    tab2
                </MTabPanel>
                <MTabPanel name="tab3">
                    tab3
                </MTabPanel>
                <MTabPanel name="tab4">
                    tab4
                </MTabPanel>
            </MTabs>

            <template slot="code">
                <pre><code>{{disabledCode}}</code></pre>
            </template>
        </DemoContentBlock>
    </div>
</template>

<script>
import DemoContentBlock from './demo-block';
import MTabs from '../../../src/components/tabs/src/tabs';
import MTabHead from '../../../src/components/tabs/src/tabs-head';
import MTabItem from '../../../src/components/tabs/src/tabs-item';
import MTabPanel from '../../../src/components/tabs/src/tabs-panel';

export default {
    components: {
        MTabs,
        MTabHead,
        MTabItem,
        MTabPanel,
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
                <MTab selected="tab1">
                    <MTabHead>
                        <MTabItem name="tab1">tab1</MTabItem>
                        <MTabItem name="tab2">tab2</MTabItem>
                        <MTabItem name="tab3">tab3</MTabItem>
                        <MTabItem name="tab4">tab4</MTabItem>
                    </MTabHead>
                    <MTabPanel name="tab1">
                        tab1
                    </MTabPanel>
                    <MTabPanel name="tab2">
                        tab2
                    </MTabPanel>
                    <MTabPanel name="tab3">
                        tab3
                    </MTabPanel>
                    <MTabPanel name="tab4">
                        tab4
                    </MTabPanel>
                </MTab>
            `.replace(/^ {16}/gm, '').trim(),
            verticalCode: `
                <MTab selected="tab1" direction="vertical">
                    <MTabHead>
                        <MTabItem name="tab1">tab1</MTabItem>
                        <MTabItem name="tab2">tab2</MTabItem>
                        <MTabItem name="tab3">tab3</MTabItem>
                        <MTabItem name="tab4">tab4</MTabItem>
                    </MTabHead>
                    <MTabPanel name="tab1">
                        tab1
                    </MTabPanel>
                    <MTabPanel name="tab2">
                        tab2
                    </MTabPanel>
                    <MTabPanel name="tab3">
                        tab3
                    </MTabPanel>
                    <MTabPanel name="tab4">
                        tab4
                    </MTabPanel>
                </MTab>
            `.replace(/^ {16}/gm, '').trim(),
            disabledCode: `
            <MTabs selected="tab3">
                <MTabHead>
                    <MTabItem name="tab1">tab1</MTabItem>
                    <MTabItem name="tab2" disabled>tab2</MTabItem>
                    <MTabItem name="tab3">tab3</MTabItem>
                    <MTabItem name="tab4">tab4</MTabItem>
                </MTabHead>
                <MTabPanel name="tab1">
                    tab1
                </MTabPanel>
                <MTabPanel name="tab2">
                    tab2
                </MTabPanel>
                <MTabPanel name="tab3">
                    tab3
                </MTabPanel>
                <MTabPanel name="tab4">
                    tab4
                </MTabPanel>
            </MTabs>
            `.replace(/^ {16}/gm, '').trim(),
        };
    },
};
</script>

<style lang="less" scoped>
@import '../../../src/assets/style/docs-demo.less';
</style>