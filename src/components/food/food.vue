<template>
  <div class="food" v-show="isShow" ref="foodWrapper">
    <div class="food-content">
      <div class="food-img-wrapper">
        <image class="food-img" :src="food.image" style="width: 750px;height: 750px"></image>
      </div>
      <div class="food-detail">
        <text class="food-name">{{ food.name }}</text>
        <div class="food-extra">
          <text class="sellCount">月售{{ food.sellCount }}份</text
          ><text class="rating">好评率{{ food.rating }}%</text>
        </div>
        <div class="price">
          <text class="nowPrice">¥{{ food.price }}</text>
          <text class="oldPrice" v-if="food.oldPrice">¥{{ food.oldPrice }}<span class="line"></span></text>
        </div>
        <cart-control :food="food" class="cart-control" v-if="food.count"></cart-control>
        <text class="intoCart" v-else @click.stop.prevent="intoCart">加入购物车</text>
      </div>
      <div class="split"></div>
      <div class="food-info">
        <text class="title">商品介绍</text>
        <text class="info-text">{{ food.info }}</text>
      </div>
      <div class="split"></div>
      <div class="food-rating">
        <text class="title">商品评价</text>
        <!-- <rating-control  :ratingTypes="ratingTypes" :ratings="food.ratings"
        @on-change="updateState"></rating-control> -->
        <div class="rating-content">
          <list>
            <cell
              v-for="(rating,index) in food.ratings"
              class="rating-item" v-show="(allFlag&&(!contentFlag||rating.text))||(rating.rateType==selectedType&&(!contentFlag||rating.text))"
              :key="index"
            >
              <text class="rating-time">{{ rating.rateTime | formateTime }}</text>
              <div class="user">
                <text class="username">{{ rating.username }}</text>
                <image class="avatar-img" :src="rating.avatar"></image>
              </div>
              <div class="text-wrapper">
                <text class="icon-thumb_up" v-if="rating.rateType==0"></text>
                <text class="icon-thumb_down" v-if="rating.rateType==1"></text>
                <text class="rating-text">{{ rating.text }}</text>
              </div>
            </cell>
          </list>
        </div>
      </div>
    </div>
    <div class="close-wrapper" @click="back">
      <text class="icon-arrow_lift">&#60;</text>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import ratingControl from '@/components/rating-control/rating-control.vue'
import cartControl from '@/components/cart-control/cart-control.vue'
import { formateDate } from '@/assets/js/date.js'
export default {
  components: {
    ratingControl,
    cartControl
  },
  props: {
    food: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      isShow: false,
      ratingTypes: [
        {
          name: '推荐'
        },
        {
          name: '吐槽'
        }
      ],
      selectedType: '',
      contentFlag: false,
      allFlag: true
    }
  },
  filters: {
    formateTime (time) {
      let date = new Date(time)
      return formateDate(date, 'yyyy-MM-dd hh:mm')
    }
  },
  methods: {
    showFood () {
      this.isShow = !this.isShow
    },
    back () {
      this.showFood()
    },
    intoCart (event) {
      Vue.set(this.food, 'count', 1)
    },
    updateState (obj) {
      this.selectedType = obj.selectedType
      this.allFlag = obj.allFlag
      this.contentFlag = obj.contentFlag
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.food {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 48px;
  width: 100%;
  background: #fff;
  z-index: 30;
  overflow: auto;
}
.food-img-wrapper {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 100%;
}
.food-img {
  position: absolute;
  left: 0;
  top: 0;
}
.close-wrapper {
  position: fixed;
  left: 10px;
  top: 10px;
}
.icon-arrow_lift {
  width: 30px;
  height: 30px;
  padding: 5px;
  font-size: 20px;
  color: #fff;
  line-height: 30px;
}
.food-detail {
  position: relative;
  flex: 1;
  padding: 18px;
  overflow: hidden;
  white-space: nowrap;
}
.food-name {
  font-size: 14px;
  font-weight: 700;
  color: rgb(7,17,27);
  line-height: 14px;
}
.food-extra {
  flex-direction: row;
  margin-top: 8px;
}
.food-price {
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
.line {
  width: 100%;
  height: 1px;
  position: absolute;
  left: 0;
  bottom: 6px;
  border-bottom: 1px solid rgb(147,153,159);
}
.sellCount {
  font-size: 10px;
  color: rgb(147,153,159);
  line-height: 12px;
  margin-right: 12px;
}
.rating {
  font-size: 10px;
  color: rgb(147,153,159);
  line-height: 12px;
}
.intoCart {
  position: absolute;
  right: 18px;
  bottom: 18px;
  width: 74px;
  height: 24px;
  font-size: 10px;
  color: #fff;
  line-height: 24px;
  border-radius: 12px;
  background: rgb(0,160,220);
  text-align: center;
}
.cart-control {
  position: absolute;
  right: 18px;
  bottom: 18px;
}
.split {
  width: 100%;
  height: 16px;
  background: #f3f5f7;
  border-top: 1px solid rgba(7,17,27,0.1);
  border-bottom: 1px solid rgba(7,17,27,0.1);
}
.food-info {
  padding-top: 18px;
  padding-right: 18px;
  padding-bottom: 18px;
  padding-left: 18px;
}
.food-rating {
  padding-top: 18px;
  padding-right: 18px;
  padding-bottom: 18px;
  padding-left: 18px;
}
.title {
  font-size: 14px;
  font-weight: 700;
  color: rgb(77,85,93);
}
.info-text {
  padding-top: 6px;
  padding-right: 8px;
  padding-bottom: 6px;
  padding-left: 8px;
  font-size: 12px;
  color: rgb(77,85,93);
  line-height: 24px;
}
.rating-item {
  position: relative;
  padding-top: 16px;
  padding-right: 0;
  padding-bottom: 16px;
  padding-left: 0;
  border-bottom: 1px solid rgba(7,17,27,0.1);
}
.user {
  position: absolute;
  right: 0;
  top: 16px;
  flex-direction: row;
}
.avatar {
  display: inline-block;
}
.avatar img {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.avatar-img {
  margin-left: 10px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.rating-time,.username {
  font-size: 10px;
  color: rgb(147,153,159);
  line-height: 12px;
}
.text-wrapper {
  margin-top: 6px;
}
.rating-text {
  font-size: 12px;
  color: rgb(7,17,27);
  line-height: 24px;
}
.icon-thumb_up {
  font-size: 12px;
  line-height: 24px;
  color: rgb(0,160,220);
}
.icon-thumb_down {
  font-size: 12px;
  line-height: 24px;
  color: rgb(147,153,159);
}
</style>
