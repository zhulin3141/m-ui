<template>
  <div class="m-carousel">
    <div class="m-carousel-con" :style="containerStyle">
      <m-button
        class="m-carousel-arrow m-carousel-arrow-left"
        @click="changeSlide(activeIndex - 1)"
      >
        &lt;
      </m-button>
      <m-button
        class="m-carousel-arrow m-carousel-arrow-right"
        @click="changeSlide(activeIndex + 1)"
        >&gt;</m-button
      >
      <slot></slot>
    </div>

    <div
      :style="paginationStyle"
      class="m-carousel-pagination"
      v-if="pagePosition !== 'none'"
    >
      <span
        class="m-carousel-pagination-bullet"
        :class="{ 'm-carousel-pagination-bullet-active': idx === activeIndex }"
        v-for="(item, idx) in items"
        :key="idx"
        @click="handleClick(idx)"
      >
      </span>
    </div>
  </div>
</template>

<script>
import MButton from "../../button/src/button.vue";
export default {
  components: { MButton },
  name: "m-carousel",
  props: {
    height: {
      type: String,
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
    interval: {
      type: Number,
      default: 3000,
    },
    loop: {
      type: Boolean,
      default: true,
    },
    pagePosition: {
      type: String,
      default: "outside",
      validator(val) {
        return ["none", "outside", "inside"].includes(val);
      },
    },
  },
  data() {
    return {
      items: [],
      activeIndex: 0,
      timer: null,
    };
  },
  computed: {
    containerStyle() {
      return {
        height: this.height,
      };
    },
    paginationStyle() {
      return this.pagePosition === "outside"
        ? {}
        : {
            position: "relative",
            bottom: "32px",
            zIndex: 22,
          };
    },
  },
  created() {
    this.changeSlide = (currIndex) => {
      this.setActiveItem(currIndex);
    };
  },
  mounted() {
    this.updateItems();
    this.$nextTick(() => {
      this.resetItemPosition();
      this.startTimer();
    });
  },
  beforeDestroy() {},

  watch: {
    activeIndex(val, oldVal) {
      this.resetItemPosition(oldVal);
      if (oldVal > -1) {
        this.$emit("change", val, oldVal);
      }
    },
  },
  methods: {
    updateItems() {
      this.items = this.$children.filter(
        (child) => child.$options.name === "m-carousel-item"
      );
    },

    resetItemPosition(oldIndex) {
      this.items.forEach((item, index) => {
        item.translateItem(index, this.activeIndex, oldIndex);
      });
    },

    playSlides() {
      if (this.activeIndex < this.items.length - 1) {
        this.activeIndex++;
      } else if (this.loop) {
        this.activeIndex = 0;
      }
    },
    startTimer() {
      if (this.interval <= 0 || !this.autoplay || this.timer) return;
      this.timer = setInterval(this.playSlides, this.interval);
    },
    setActiveItem(index) {
      let length = this.items.length;
      const oldIndex = this.activeIndex;
      if (index < 0) {
        this.activeIndex = this.loop ? length - 1 : 0;
      } else if (index >= length) {
        this.activeIndex = this.loop ? 0 : length - 1;
      } else {
        this.activeIndex = index;
      }
      if (oldIndex === this.activeIndex) {
        this.resetItemPosition(oldIndex);
      }
    },

    handleClick(idx) {
      this.activeIndex = idx;
    },
  },
};
</script>

<style lang='less' scoped>
@import "../../../assets/style/var";

.m-carousel {
  overflow: hidden;
  .m-carousel-con {
    transition: all 2s;
    position: relative;

    .m-carousel-arrow {
      border: none;
      outline: none;
      padding: 0;
      margin: 0;
      height: 36px;
      width: 36px;
      cursor: pointer;
      .border-radius(50%);
      background-color: rgba(31, 45, 61, 0.11);
      color: @bg-color;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      text-align: center;
      font-size: 12px;
      z-index: 10;
    }
    .m-carousel-arrow-left {
      left: 16px;
    }
    .m-carousel-arrow-right {
      right: 16px;
    }
  }
  .m-carousel-pagination {
    text-align: center;
  }
  .m-carousel-pagination-bullet {
    display: inline-block;
    margin: 0 5px;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background: #000;
    opacity: 0.2;
    cursor: pointer;
  }
  .m-carousel-pagination-bullet-active {
    opacity: 1;
    background: #007aff;
  }
}
</style>