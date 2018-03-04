<template>
  <div class="cartControl">
    <text class="iconfont cart-des iconfont-remove_circle_outline" @click.stop.prevent="desCount" v-if="food.count>0">&#xe6bd;</text>
    <text class="cart-count" v-if="food.count>0">{{ food.count }}</text>
    <text class="iconfont cart-add iconfont-add_circle" @click.stop.prevent="addCount">&#xe674;</text>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  props: {
    food: {
      type: Object
    }
  },
  methods: {
    addCount (event) {
      if (!this.food.count) {
        Vue.set(this.food, 'count', 1)
      } else {
        this.food.count++
      }
      this.$emit('ball-move', event.target)
    },
    desCount (event) {
      if (this.food.count) {
        this.food.count--
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cartControl {
  flex-direction: row;
  align-items: center;
  font-size: 0;
}
.iconfont {
  font-family: iconfont;
}
.cart-des,.cart-add {
  padding-top: 6px;
  padding-right: 6px;
  padding-bottom: 6px;
  padding-left: 6px;
  font-size: 48px;
  line-height: 48px;
  color: rgb(0,160,220);
}
.move-enter-active,.move-leave-active {
  transition: all 0.5s linear;
  transform: translate3d(0,0,0);
  opacity: 1;
}
.move-enter,.move-leave-to {
  transform: translate3d(24px,0,0);
  opacity: 0;
}
.cart-count {
  width: 12px;
  font-size: 10px;
  line-height: 36px;
  color: rgb(147,153,159);
  text-align: center;
  vertical-align: top;
}
</style>
