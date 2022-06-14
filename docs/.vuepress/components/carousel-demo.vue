<template>
    <div class="carousel-demo">
        <DemoContentBlock v-if="type === 'basic'">
            <m-carousel height="280px">
                <m-carousel-item v-for="item in 4" :key="item">
                <h3 class="small">{{ item }}</h3>
                </m-carousel-item>
            </m-carousel>

            <template slot="code">
                <pre><code>{{basicCode}}</code></pre>
            </template>
        </DemoContentBlock>
        
        <DemoContentBlock v-if="type === 'position'">
            <m-carousel height="280px" pagePosition="inside">
                <m-carousel-item v-for="item in 4" :key="item">
                <h3 class="small">{{ item }}</h3>
                </m-carousel-item>
            </m-carousel>

            <template slot="code">
                <pre><code>{{positionCode}}</code></pre>
            </template>
        </DemoContentBlock>
    </div>
</template>

<script>
import DemoContentBlock from './demo-block';
import MCarousel from '../../../src/components/carousel/src/carousel';
import MCarouselItem from '../../../src/components/carousel/src/carousel-item';

export default {
    components: {
        MCarousel,
        MCarouselItem,
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
                <m-carousel height="280px">
                    <m-carousel-item v-for="item in 4" :key="item">
                    <h3 class="small">{{ item }}</h3>
                    </m-carousel-item>
                </m-carousel>
            `.replace(/^ {16}/gm, '').trim(),
            positionCode: `
                <m-carousel height="280px" pagePosition="inside">
                    <m-carousel-item v-for="item in 4" :key="item">
                    <h3 class="small">{{ item }}</h3>
                    </m-carousel-item>
                </m-carousel>
            `.replace(/^ {16}/gm, '').trim(),
        };
    },
};
</script>

<style lang="less" scoped>
@import '../../../src/assets/style/docs-demo.less';


.m-carousel-item h3{
  text-align: center;
  line-height: 270px;
  color: #fff;
}

.m-carousel-item:nth-child(3){
    background-color: #76fc76;
}
.m-carousel-item:nth-child(4){
    background-color: rgb(253, 253, 115);
}
.m-carousel-item:nth-child(5){
    background-color: rgb(117, 117, 248);
}
.m-carousel-item:nth-child(6){
    background-color: pink;
}
.m-carousel-item:nth-child(7){
    background-color: rgb(248, 205, 125);
}
</style>