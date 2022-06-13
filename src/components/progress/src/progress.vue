<template>
  <div class="m-progress">
    <div class="m-progress-bar m-progress-line" v-if="type == 'line'">
      <div class="m-progress_inner" :style="dynamicStyle"></div>
    </div>
    <div class="m-progress-circle" :style="circleStyle" v-if="type == 'circle'">
      <svg viewBox="0 0 100 100">
        <path
          :d="trackPath"
          stroke="#e5e9f2"
          :stroke-width="relativeStrokeWidth"
          fill="none"
          class="m-progress-circle__track"
          :style="trailPathStyle"
        ></path>
        <path
          :d="trackPath"
          :stroke="customColor"
          fill="none"
          stroke-linecap="round"
          :stroke-width="percentage ? relativeStrokeWidth : 0"
          class="m-progress-circle__path"
          :style="circlePathStyle"
        ></path>
      </svg>
      <div class="m-progress-text">{{ percentage }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "m-progress",
  props: {
    type: {
      type: String,
      default: "line",
      validator(val) {
        return ["line", "circle"].includes(val);
      },
    },
    percentage: {
      type: Number,
      required: true,
      validator(val) {
        return val >= 0 && val <= 100;
      },
    },
    width: {
      type: Number,
      default: 126,
    },
    strokeWidth: {
      type: Number,
      default: 6,
    },
    customColor: {
      type: String,
      default: "#fff",
      validator(val) {
        return true;
      },
    },
  },
  computed: {
    dynamicStyle() {
      return {
        "background-color": this.customColor,
        width: this.percentage + "%",
      };
    },
    circleStyle() {
      return {
        width: this.width + "px",
        height: this.width + "px",
      };
    },
    relativeStrokeWidth() {
      return ((this.strokeWidth / this.width) * 100).toFixed(1);
    },
    radius() {
      if (this.type === "circle") {
        return parseInt(50 - parseFloat(this.relativeStrokeWidth) / 2, 10);
      } else {
        return 0;
      }
    },
    perimeter() {
      return 2 * Math.PI * this.radius;
    },
    trackPath() {
      const radius = this.radius;
      return `
          M 50 50
          m 0 -${radius}
          a ${radius} ${radius} 0 1 1 0 ${radius * 2}
          a ${radius} ${radius} 0 1 1 0 -${radius * 2}
          `;
    },
    trailPathStyle() {
      return {
        strokeDasharray: `${this.perimeter * 1}px, ${this.perimeter}px`,
        strokeDashoffset: this.strokeDashoffset,
      };
    },
    circlePathStyle() {
      return {
        strokeDasharray: `${this.perimeter * 1 * (this.percentage / 100)}px, ${
          this.perimeter
        }px`,
        strokeDashoffset: this.strokeDashoffset,
        transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease",
      };
    },
  },
};
</script>

<style lang='less' scrope>
@import "../../../assets/style/var";

.m-progress {
  & .m-progress-circle {
    position: relative;
    display: inline-block;
  }
}
.m-progress-text {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  text-align: center;
  margin: 0;
  transform: translateY(-50%);
}

.m-progress-bar {
  background-color: #ebeef5;
  & .m-progress_inner {
    height: 6px;
    .border-radius();
  }
}
</style>