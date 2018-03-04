<template>
  <div class="shopCart">
    <div class="left-wrapper" @click="toggleShow">
      <div class="logo-wrapper">
        <div class="logo" :class="{active: totalPrice}">
          <text class="iconfont iconfont-shopping_cart" :class="{active: totalPrice}">&#xe6fa;</text>
        </div>
        <div class="badge" v-show="totalCount">
          <text class="num">{{ totalCount }}</text>
        </div>
      </div>
      <text class="price" :class="{active: totalPrice}">¥{{ totalPrice }}</text>
      <text class="extra-price">另需配送费¥{{ deliveryPrice }}</text>
    </div>
    <text class="right-wrapper" :class="{enough: totalPrice>=minPrice}">{{ payDes }}</text>
    <div class="cart-list" v-show="listShow" :class="{fold: listShow}">
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
    <div class="cart-background" v-show="listShow"></div>
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
      if (!this.totalCount) {
        this.fold = true
        return false
      }
      let show = !this.fold
      return show
    }
  },
  data () {
    return {
      fold: true
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
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 48px;
  z-index: 50;
}
.shopCart .left-wrapper {
  flex: 1;
  background: #141c27;
  font-size: 0;
  z-index: 50;
}
.shopCart .right-wrapper {
  flex: 0 0 105px;
  width: 105px;
  background: #2b343b;
  z-index: 50;
}
.logo-wrapper {
  display: inline-block;
  position: relative;
  top: -10px;
  margin-left: 12px;
  padding: 6px;
  background: #141c27;
  width: 58px;
  height: 58px;
  box-sizing: border-box;
  border-radius: 50%;
}
.logo-wrapper .logo {
  width: 100%;
  height: 100%;
  background: #2b343d;
  border-radius: 50%;
  text-align: center;
}
.iconfont-shopping_cart {
  color: #808589;
  font-size: 24px;
  line-height: 44px;
}
.logo-wrapper .badge {
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 16px;
  border-radius: 6px;
  background: rgb(240,20,20);
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
}
.badge .num {
  font-size: 9px;
  font-weight: 700;
  color: #fff;
  line-height: 16px;
}
.logo-wrapper .active {
  background: rgb(0,160,220);
}
.left-wrapper .price,.extra-price {
  display: inline-block;
  color: #808589;
  font-size: 16px;
  line-height: 24px;
  margin-top: 12px;
  vertical-align: top;
}
.left-wrapper .price {
  font-weight: 700;
  margin-left: 12px;
  padding-right: 12px;
  border-right: 1px solid rgba(255,255,255,0.1);
}
.left-wrapper .extra-price {
  margin-left: 12px;
}
.left-wrapper .active {
  color: #fff;
}
.right-wrapper {
  font-size: 12px;
  color: #808589;
  font-weight: 700;
  line-height: 48px;
  text-align: center;
}
.shopCart .enough {
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
.shopCart .fold {
  transform: translate3d(0,-100%,0);
}
.list-header {
  background: #f3f5f7;
  height: 40px;
  padding: 0 18px;
  overflow: hidden;
  border-bottom: 2px solid rgba(7,17,27,0.1);
  z-index: 40;
}
.head-title {
  font-size: 14px;
  font-weight: 200;
  line-height: 40px;
  color: rgb(7,17,27);
}
.head-clear {
  display: inline-block;
  text-align: right;
  font-size: 12px;
  line-height: 40px;
  color: rgb(0,160,200);
}
.fold-enter-active,.fold-leave-active {
  transition: all 0.5s linear;
}
.fold-enter,.fold-leave-to {
  transform: translate3d(0,0,0);
}
.fold-leave {
  transform: translate3d(0,-100%,0);
}
.fold-enter-to {
  transform: translate3d(0,-100%,0);
}
.fade-enter-active,.fade-leave-active {
  transition: all 0.5s linear;
  opacity: 1;
}
.fade-enter,.fade-leave-to {
  opacity: 0;
}
.list-content {
  background: #fff;
  padding: 0 18px;
  max-height: 218px;
  overflow: hidden;
  z-index: 40;
}
.list-item {
  position: relative;
  height: 48px;
  line-height: 48px;
  border-bottom: 1px solid rgba(7,17,27,0.1);
  box-sizing: border-box;
}
.food-name {
  float: left;
  font-size: 14px;
  font-weight: 700;
  color: rgb(7,17,27);
}
.food-price {
  display: inline-block;
  margin: 0 12px 0 18px;
  font-size: 14px;
  font-weight: 700;
  color: rgb(240,20,20);
  position: absolute;
  right: 80px;
}
.cartControl-wrapper{
  display: inline-block;
  font-size: 24px;
  line-height: 48px;
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
