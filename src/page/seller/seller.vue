<template>
  <div class="seller-wrapper" ref="sellerWrapper">
    <div class="seller-content">
      <div class="sell-header">
        <div class="line-one">
          <text class="title">{{ seller.name }}</text>
          <div class="rating">
            <star class="star" :score="seller.score"></star>
            <text style="font-size:10px">({{ seller.ratingCount }})</text>
            <text style="padding-left:20px;font-size:10px">月销售{{ seller.sellCount }}单</text>
          </div>
          <div class="collect">
            <text class="iconfont icon-favorite" @click="collectFlag=!collectFlag" :class="[collectFlag?'active':'']">&#xe739;</text>
            <text style="font-size:10px" v-if="!collectFlag">收藏</text>
            <text style="font-size:10px" v-else>已收藏</text>
          </div>
        </div>
        <div class="line-two">
          <div class="des">
            <text class="label">起送价</text>
            <div class="des-data">
              <text class="value">{{ seller.minPrice }}</text>
              <text class="dimension">元</text>
            </div>
          </div>
          <div class="des">
            <text class="label">商家配送</text>
            <div class="des-data">
              <text class="value">{{ seller.deliveryPrice }}</text>
              <text class="dimension">元</text>
            </div>
          </div>
          <div class="des">
            <text class="label">平均配送时间</text>
            <div class="des-data">
              <text class="value">{{ seller.deliveryTime }}</text>
              <text class="dimension">分钟</text>
            </div>
          </div>
        </div>
      </div>
      <div class="split"></div>
      <div class="bul-act">
        <text class="title">公告与活动</text>
        <div class="bul">{{ seller.bulletin }}</div>
        <list>
          <cell
            class="act-item"
            v-for="(support,index) in seller.supports"
            :key="index"
          >
            <icon :type="support.type" class="icon"></icon>
            <text class="text">{{ support.description }}</text>
          </cell>
        </list>
      </div>
      <div class="split"></div>
      <div class="seller-imgs">
        <text class="title">商家实景</text>
        <div class="pic-wrapper">
          <slider class="pic-list" scroll-direction="horizontal">
            <div v-for="(pic,index) in seller.pics"
                :key="index">
              <image class="pic-item" :src="pic"></image>
            </div>
          </slider>
        </div>
      </div>
      <div class="split"></div>
      <div class="seller-info">
        <text class="title">商家信息</text>
        <list>
          <cell
            class="info-item"
            v-for="(item,index) in seller.infos"
            :key="index"
          >
            <text class="text">{{ item }}</text>
          </cell>
        </list>
      </div>
    </div>
  </div>
</template>

<script>
import star from '@/components/star/star'
import icon from '@/components/icon/icon'
export default {
  components: {
    star,
    icon
  },
  props: {
    seller: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      collectFlag: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.iconfont {
  font-family: iconfont;
}
.split {
  width: 100%;
  height: 16px;
  background: #f3f5f7;
  border-top: 1px solid rgba(7,17,27,0.1);
  border-bottom: 1px solid rgba(7,17,27,0.1);
}
.seller-wrapper {
  position: absolute;
  top: 177px;
  bottom: 0;
  width: 100%;
  overflow: auto;
}
.seller-content .sell-header {
  padding: 0 18px;
}
.seller-content .title {
  font-size: 14px;
  font-weight: 700;
  color: rgb(7,17,27);
  line-height: 14px;
}
.line-one {
  position: relative;
  padding-top: 18px;
  padding-bottom: 18px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgba(7,17,27,0.1);
}
.line-two {
  flex-direction: row;
  align-items: center;
  padding-top: 18px;
  padding-bottom: 18px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgba(7,17,27,0.1);
}
.rating {
  margin-top: 8px;
  flex-direction: row;
  align-items: center;
}
.star {
  padding-right: 8px;
}
.rating {
  font-size: 10px;
  color: rgb(77,85,93);
  line-height: 20px;
  vertical-align: top;
}
.collect {
  position: absolute;
  right: 0;
  top: 18px;
  text-align: center;
  flex-direction: column;
  align-items: center;
}
.icon {
  vertical-align: top;
}
.icon-favorite {
  font-size: 24px;
  color: #D3D4D5;
  line-height: 24px;
}
.active {
  color: rgb(240,20,20);
}
.des {
  flex: 1;
  text-align: center;
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: rgba(7,17,27,0.1);
  align-items: center;
}
.des-data {
  flex-direction: row;
  align-items: flex-end;
}
.dimension {
  font-size: 10px;
  vertical-align: bottom;
}
.des:last-child {
  border: none;
}
.label {
  font-size: 10px;
  color: rgb(147,153,159);
  line-height: 12px;
}
.value {
  font-size: 24px;
  font-weight: 200;
  color: rgb(7,17,27);
  line-height: 24px;
  margin-top: 4px;
}
.bul-act {
  padding: 18px;
}
.bul {
  margin-top: 8px;
  padding: 0 12px;
  font-size: 12px;
  font-weight: 200;
  color: rgb(240,20,20);
  line-height: 24px;
  margin-bottom: 16px;
}
.act-item {
  flex-direction: row;
  padding: 16px 12px;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: rgba(7,17,27,0.1);
}
.text {
  font-size: 12px;
  font-weight: 200;
  color: rgb(7,17,27);
  line-height: 16px;
  vertical-align: top;
}
.seller-imgs,.seller-info {
  padding: 18px;
}
.pic-wrapper {
  padding-top: 12px;
  width: 750px;
  white-space: nowrap;
  overflow: auto;
}
.pic-list {
  scroll-direction: horizontal;
  flex-direction: row;
}
.pic-item {
  width: 240px;
  height: 180px;
  margin-right: 6px;
}
.info-item {
  padding-top: 16px;
  padding-right: 12px;
  padding-bottom: 16px;
  padding-left: 12px;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: rgba(7,17,27,0.1);
}
</style>
