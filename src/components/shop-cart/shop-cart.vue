<template>
  <div class="shopCart">
    <div class="left-wrapper" @click="toggleShow">
      <div class="logo-wrapper">
        <div class="logo" :class="[totalPrice?'logoWrapActive':'']">
          <text class="iconfont iconfont-shopping_cart" :class="[totalPrice?'leftActive':'']">&#xe6fa;</text>
        </div>
        <div class="badge" v-show="totalCount">
          <text class="num">{{ totalCount }}</text>
        </div>
      </div>
      <text class="price" :class="[totalPrice?'leftActive':'']">¥{{ totalPrice }}</text>
      <text class="extra-price">另需配送费¥{{ deliveryPrice }}</text>
    </div>
    <text class="right-wrapper" :class="[totalPrice>=minPrice?'enough':'']">{{ payDes }}</text>
    <div class="cart-list" v-show="listShow" :class="[listShow?'fold':'']">
      <div class="list-header">
        <text class="head-title">购物车</text>
        <text class="head-clear" @click="clearCart">清空</text>
      </div>
      <div class="list-content" ref="listContent">
        <list draggable>
          <cell v-for="(food,index) in selectedFood" class="list-item" :key="index">
            <text class="food-name">{{ food.name }}</text>
            <div class="cartControl-wrapper">
              <cart-control :food="food"></cart-control>
            </div>
            <text class="food-price">￥{{ food.count*food.price }}</text>
          </cell>
        </list>
      </div>
    </div>
    <div class="cart-background" v-show="listShow" @click="toggleShow"></div>
  </div>
</template>

<script>
import cartControl from '@/components/cart-control/cart-control.vue'
export default {
  components: {
    cartControl
  },
  props: {
    selectedFood: {
      type: Array,
      default () {
        return []
      }
    },
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 20
    }
  },
  computed: {
    totalPrice () {
      let total = 0
      this.selectedFood.forEach((food) => {
        total += food.price * food.count
      })
      return total
    },
    totalCount () {
      let count = 0
      this.selectedFood.forEach((food) => {
        count += food.count
      })
      return count
    },
    payDes () {
      if (this.totalPrice === 0) {
        return `¥${this.minPrice}起送`
      } else if (this.totalPrice < this.minPrice) {
        let diff = this.minPrice - this.totalPrice
        return `还差¥${diff}起送`
      } else {
        return '去结算'
      }
    },
    listShow () {
      if (!this.totalCount || !this.fold) {
        return false
      }
      let show = this.fold
      return show
    }
  },
  data () {
    return {
      fold: false
    }
  },
  methods: {
    toggleShow () {
      if (!this.totalPrice) {
        return
      }
      this.fold = !this.fold
    },
    clearCart () {
      this.selectedFood.forEach((food) => {
        food.count = 0
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.iconfont {
  font-family: iconfont;
}
.shopCart {
  flex-direction: row;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 750px;
  height: 96px;
  z-index: 50;
}
.left-wrapper {
  flex: 1;
  background: #141c27;
  font-size: 0;
  z-index: 50;
  flex-direction: row;
  align-items: center;
}
.right-wrapper {
  flex: 0 0 105px;
  width: 105px;
  background: #2b343b;
  z-index: 50;
  font-size: 24px;
  color: #808589;
  font-weight: 700;
  line-height: 96px;
  text-align: center;
}
.logo-wrapper {
  position: relative;
  top: -10px;
  margin-left: 12px;
  padding-top: 12px;
  padding-right: 12px;
  padding-bottom: 12px;
  padding-left: 12px;
  background: #141c27;
  width: 116px;
  height: 116px;
  border-radius: 50%;
}
.logo {
  justify-content: center;
  align-items: center;
  width: 92px;
  height: 92px;
  background: #2b343d;
  border-radius: 50%;
  text-align: center;
}
.iconfont-shopping_cart {
  color: #808589;
  font-size: 48px;
}
.badge {
  position: absolute;
  top: 0;
  right: 0;
  width: 48px;
  height: 32px;
  border-radius: 12px;
  background: rgb(240,20,20);
}
.num {
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  line-height: 32px;
  text-align: center;
}
.logoWrapActive {
  background: rgb(0,160,220);
}
.price,.extra-price {
  color: #808589;
  font-size: 32px;
  line-height: 32px;
}
.price {
  font-weight: 700;
  margin-left: 12px;
  padding-right: 12px;
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: rgba(255,255,255,0.1);
}
.extra-price {
  margin-left: 12px;
}
.leftActive {
  color: #fff;
}
.enough {
  color: #fff;
  background: #11B33C;
}
.ball-wrapper {
  position: fixed;
  left: 32px;
  bottom: 22px;
  z-index: 100;
}
.ball {
  position: absolute;
  left: 0;
  top: 0;
  width: 16px;
  height: 16px;
  background: rgb(0,160,220);
  border-radius: 50%;
  z-index: 100;
}
.drop-enter-active {
  transition: all 0.5s ease;
}
.cart-list {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  overflow: hidden;
  z-index: 40;
}
.fold {
  transform: translate3d(0,-100%,0);
}
.list-header {
  background: #f3f5f7;
  height: 80px;
  padding-top: 0;
  padding-right: 18px;
  padding-bottom: 0;
  padding-left: 18px;
  overflow: auto;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: rgba(7,17,27,0.1);
  z-index: 40;
  flex-direction: row;
  justify-content: space-between;
}
.head-title {
  font-size: 28px;
  font-weight: 200;
  line-height: 80px;
  color: rgb(7,17,27);
}
.head-clear {
  text-align: right;
  font-size: 24px;
  line-height: 80px;
  color: rgb(0,160,200);
}
.fold {
  transform: translate3d(0,-100%,0);
}
.list-content {
  background: #fff;
  padding-top: 0;
  padding-right: 18px;
  padding-bottom: 0;
  padding-left: 18px;
  max-height: 436px;
  overflow: auto;
  z-index: 40;
}
.list-item {
  position: relative;
  height: 96px;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: rgba(7,17,27,0.1);
  flex-direction: row;
  align-items: center;
}
.food-name {
  font-size: 28px;
  font-weight: 700;
  color: rgb(7,17,27);
  line-height: 96px;
}
.food-price {
  margin-top: 0;
  margin-right: 24px;
  margin-bottom: 0;
  margin-left: 36px;
  font-size: 28px;
  line-height: 96px;
  font-weight: 700;
  color: rgb(240,20,20);
  position: absolute;
  right: 160px;
}
.cartControl-wrapper{
  font-size: 24px;
  line-height: 96px;
  position: absolute;
  right: 0;
}
.cart-background {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(7,17,27,0.8);
  z-index: 30;
}
</style>
