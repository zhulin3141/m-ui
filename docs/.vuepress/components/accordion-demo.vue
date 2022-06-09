<template>
    <div class="button-demo">
        <DemoContentBlock v-if="type === 'basic'">
            <MAccordion :selected="selected1">
                <MAccordionItem title="Accordion Item #1" name="1">
                <strong>This is the first item's accordion body.</strong>
                It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. 
                </MAccordionItem>
                <MAccordionItem title="Accordion Item #2" name="2"> 
                <strong>This is the second item's accordion body.</strong>
                </MAccordionItem>
                <MAccordionItem title="Accordion Item #3" name="3"> 
                <strong>This is the three item's accordion body.</strong>
                </MAccordionItem>
            </MAccordion>

            <template slot="code">
                使用type属性来定义 输入框 的样式。
                <pre><code>{{basicCode}}</code></pre>
            </template>
        </DemoContentBlock>

        <DemoContentBlock v-if="type === 'accordion'">
            <MAccordion :selected="selected1" single>
                <MAccordionItem title="Accordion Item #4" name="4">
                <strong>This is the first item's accordion body.</strong>
                It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. 
                </MAccordionItem>
                <MAccordionItem title="Accordion Item #5" name="5"> 
                <strong>This is the second item's accordion body.</strong>
                </MAccordionItem>
                <MAccordionItem title="Accordion Item #6" name="6"> 
                <strong>This is the three item's accordion body.</strong>
                </MAccordionItem>
            </MAccordion>

            <template slot="code">
                使用single属性来定义手风琴效果。
                <pre><code>{{accordionCode}}</code></pre>
            </template>
        </DemoContentBlock>
    </div>
</template>

<script>
import DemoContentBlock from './demo-block';
import MAccordion from '../../../src/components/accordion/src/accordion.vue'
import MAccordionItem from '../../../src/components/accordion/src/accordion-item.vue'

export default {
    components: {
        MAccordion,
        MAccordionItem,
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
            selected1: ["1"],
            selected2: ["4"],
            basicCode: `
                <MAccordion :selected="selected1">
                    <MAccordionItem title="Accordion Item #1" name="1">
                        <strong>This is the first item's accordion body.</strong>
                        It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. 
                    </MAccordionItem>
                    <MAccordionItem title="Accordion Item #2" name="2"> 
                        <strong>This is the second item's accordion body.</strong>
                    </MAccordionItem>
                    <MAccordionItem title="Accordion Item #3" name="3"> 
                        <strong>This is the three item's accordion body.</strong>
                    </MAccordionItem>
                </MAccordion>
            `.replace(/^ {16}/gm, '').trim(),
            
            accordionCode: `
                <MAccordion :selected="selected2" single>
                    <MAccordionItem title="Accordion Item #4" name="4">
                        <strong>This is the first item's accordion body.</strong>
                        It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. 
                    </MAccordionItem>
                    <MAccordionItem title="Accordion Item #5" name="5"> 
                        <strong>This is the second item's accordion body.</strong>
                    </MAccordionItem>
                    <MAccordionItem title="Accordion Item #6" name="6"> 
                        <strong>This is the three item's accordion body.</strong>
                    </MAccordionItem>
                </MAccordion>
            `.replace(/^ {16}/gm, '').trim(),
        };
    },
};
</script>

<style lang="less" scoped>
@import '../../../src/assets/style/docs-demo.less';
</style>