<template>
  <div
    class="menu-item"
    :style="{transform:transform}"
  >
    <div
      :class="{'menu-item-title':true,shadow:shadow}"
      @click="itemInfo.click"
    >
      {{ itemInfo.title }}
    </div>
    <menu-item
      v-if="itemInfo.next"
      :item-info="itemInfo.next"
    />
  </div>
</template>

<script>

export default {

  name: 'MenuItem',

  props: {
    itemInfo: {
      type: Object
    }
  },

  data() {
    return {
      shadow: false,
      transform: 'rotateX(-180deg)'
    };
  },

  created() {
    this.itemInfo.onUpdate = num => {
      this.transform = `rotate3d(1,0,0,${num}deg)`;
      this.shadow = num < -60;
    };
  }
};
</script>

<style lang="scss" scoped>
  .menu-item {
    width: 100%;
    height: 31px;
    font-size: 0;
    transform-origin: center top;
    transform-style: preserve-3d;

    .menu-item-title {
      width: 100%;
      height: 30px;
      line-height: 30px;
      text-align: left;
      text-indent: 20px;
      background: #c2753f;;
      color: #d1b57f;
      font-size: 14px;
      font-weight: normal;
      margin-top: 1px;
      cursor: pointer;
      z-index: 9;
      transition: 0.1s;

      &.shadow {
        background-color: #d1b57f;
      }

      &.hidden {
        backface-visibility: hidden;
      }

      &:hover {
        color: #d1b57f;
        background: #c2753f;
      }
    }
  }
</style>

