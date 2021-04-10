<template>
  <div class="colors-bg-components-wrap">
    <div class="colors-bg-actionbar" @click="openColorSelector">
      Select your background color
    </div>
    <ul
      :class="[
        'colors-bg-palette__list',
        'center-1200',
        isOpenColorSelector ? 'open' : '',
      ]"
    >
      <li
        class="colors-bg-palette__item"
        v-for="(item, index) in colors"
        :key="index"
        @click="setBodyColor(item.color)"
      >
        <div
          class="colors-bg-palette__gradient"
          :style="{ background: item.color }"
        ></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "colors",
  data() {
    return {
      isOpenColorSelector: false,
      colors: [
        {
          color: "linear-gradient(rgb(185, 43, 39), rgb(21, 101, 192))",
        },
      ],
    };
  },
  methods: {
    setBodyColor(color) {
      document.body.style.background = color;
      this.isOpenColorSelector = false;
    },
    openColorSelector(){
      this.isOpenColorSelector =true;
    }
  },
};
</script>

<style lang="less" scoped>
.colors-bg-components-wrap {
  position: relative;
  .colors-bg-actionbar {
    height: 36px;
    background-color: #fff;
    padding: 0 20px;
    color: #373737;
    font-size: 14px;
    line-height: 36px;
  }
  .colors-bg-palette__list {
    position: absolute;
    background-color: #2c3e50;
    display: flex;
    flex-wrap: wrap;
    height: 0px;
    overflow: hidden;
    &.open {
      height: auto;
      transition: all 1s ease-in-out;
    }
    .colors-bg-palette__item {
      flex: 0 1 33.33%;
      box-sizing: border-box;
      padding: 10px;
      transition: all 0.1s ease-in-out;
      list-style: none;
      cursor: pointer;
      &:hover {
        background-color: #222;
        border-radius: 3px;
        transform: scale(1.02);
      }
      .colors-bg-palette__gradient {
        height: 150px;
      }
    }
  }
}
</style>