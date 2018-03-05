<template>
  <div class="goods">
    <list class="menu-wrapper">
      <cell
        v-for="(item,index) in goods"
        class="menu-item"
        @click="selectOption(index,$event)"
        :key="index"
        :class="[currentIndex==index?'selected':'']"
      >
        <div class="menu-content">
          <icon v-if="item.type>0" :type="item.type" class="icon"></icon>
          <text class="menu-text">{{ item.name }}</text>
        </div>
        <div class="line"></div>
      </cell>
    </list>
    <list class="goods-wrapper">
      <cell
        v-for="(item,index) in goods"
        class="food-list food-list-hook"
        :key="index"
        :ref="'item'+index"
      >
        <text class="header">{{ item.name }}</text>
        <div class="food-content">
          <div
            v-for="(food,id) in item.foods"
            class="food-item"
            @click.stop.prevent="seeDetail(food,$event)"
            :key="id"
          >
            <div class="food-item-icon">
              <image :src="food.icon" style="width: 114px;height: 114px"></image>
            </div>
            <div class="food-item-content">
              <text class="food-name">{{ food.name }}</text>
              <text class="food-description" v-show="food.description">{{ food.description }}</text>
              <div class=extra>
                <text class="food-sellCount">月售{{ food.sellCount }}份</text>
                <text class="food-rating">好评率{{ food.rating }}%</text>
              </div>
              <div class="food-price">
                <text class="nowPrice">¥{{ food.price }}</text>
                <text class="oldPrice" v-if="food.oldPrice">¥{{ food.oldPrice }}<div class="oldPriceLine"></div></text>
              </div>
              <cart-control :food="food" class="cart-control"></cart-control>
            </div>
          </div>
        </div>
      </cell>
    </list>
    <shop-cart :selectedFood="selectedFood" ref="shopCart"></shop-cart>
    <foodDetail :food="selectSinfood" ref="foodCpt"></foodDetail>
  </div>
</template>

<script>
import icon from '@/components/icon/icon.vue'
import { get } from '@/assets/js/util'
import cartControl from '@/components/cart-control/cart-control.vue'
import shopCart from '@/components/shop-cart/shop-cart.vue'
import foodDetail from '@/components/food/food.vue'
/* eslint-disable no-undef */
const dom = weex.requireModule('dom')

export default {
  components: {
    icon,
    cartControl,
    shopCart,
    foodDetail
  },
  props: {
    seller: {
      type: Object
    }
  },
  computed: {
    selectedFood () {
      let foods = []
      this.goods.forEach((good) => {
        good.foods.forEach((food) => {
          if (food.count) {
            foods.push(food)
          }
        })
      })
      return foods
    }
  },
  data () {
    return {
      goods: [],
      scrollY: 0,
      listHeight: [],
      selectSinfood: {},
      currentIndex: 0,
      rows: []
    }
  },
  created () {
    this.getGoods()
  },
  methods: {
    getGoods () {
      get('/api/goods', (res) => {
        if (res.ok) {
          this.goods = res.data
        } else {
          console.log('request failed')
        }
      })
    },
    seeDetail (food, event) {
      this.selectSinfood = food
      this.$refs.foodCpt.showFood()
    },
    selectOption (index, e) {
      const el = this.$refs[`item${index}`][0]
      dom.scrollToElement(el, {})
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
.goods {
  position: absolute;
  top: 175px;
  bottom: 46px;
  overflow: hidden;
  flex-direction: row;
}
.menu-wrapper {
  flex: 0 0 80px;
  width: 80px;
  z-index: 1;
}
.menu-item {
  justify-content: center;
  align-items: center;
  position: relative;
  height: 54px;
  padding-left: 12px;
  padding-right: 12px;
  background-color: #f3f5f7;
}
.menu-content {
  flex-direction: row;
  flex-wrap: wrap;
}
.menu-text {
  font-size: 12px;
  color: rgb(7, 17, 27);
  line-height: 14px;
  font-weight: 200;
}
.line {
  position: absolute;
  bottom: 1px;
  width: 56px;
  height: 1px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgba(7,17,27,0.1);
}
.selected {
  color: rgb(240,20,20);
  background: #fff;
  font-weight: 700;
  border: none;
}
.goods-wrapper {
  flex: 1;
  /* z-index: 1; */
}
.header {
  width: 100%;
  height: 26px;
  background: #f3f5f7;
  border-left: 3px solid #d9dde1;
  font-size: 12px;
  color: rgb(147,153,159);
  line-height: 26px;
  padding-left: 14px;
}
.food-content {
  padding-left: 18px;
  padding-right: 18px;
}
.food-item {
  flex-direction: row;
  padding-top: 18px;
  padding-right: 0;
  padding-bottom: 18px;
  padding-left: 0;
  border-bottom: 1px solid rgba(7,17,27,0.1);
}
.food-item:last-child {
  border-width: 0;
}
.food-item-icon {
  flex: 0 0 57px;
  margin-right: 10px;
}
.food-item-content {
  position: relative;
  flex: 1;
  padding-top: 2px;
  overflow: hidden;
  white-space: nowrap;
}
.food-name {
  font-size: 14px;
  color: rgb(7,17,27);
  line-height: 14px;
  font-weight: 700;
}
.food-description,.extra {
  margin-top: 8px;
}
.food-description {
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 10px;
  color: rgb(147,153,159);
  line-height: 13px;
  lines: 1;
  -webkit-line-clamp: 1;
}
.food-price {
  flex-direction: row;
  margin-top: 8px;
}
.nowPrice {
  font-size: 14px;
  color: rgb(240,20,20);
  font-weight: 700;
  line-height: 24px;
}
.oldPrice {
  position: relative;
  font-size: 10px;
  color: rgb(147,153,159);
  font-weight: 700;
  line-height: 24px;
  margin-left: 8px;
}
.oldPriceLine {
  position: absolute;
  left: 0;
  bottom: 12px;
  width: 100%;
  height: 1px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgb(147,153,159);
}
.extra {
  flex-direction: row;
}
.food-sellCount, .food-rating {
  font-size: 10px;
  color: rgb(147,153,159);
  line-height: 12px;
}
.food-sellCount {
  margin-right: 12px;
}
.cart-control {
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
