<template>
  <div class="rating" ref="ratingWrapper">
    <div class="rating-content">
      <div class="rating-header">
        <div class="header-left">
          <text class="score">{{ seller.score }}</text>
          <text class="title">综合评分</text>
          <text class="rank">高于周边商家{{ seller.rankRate }}%</text>
        </div>
        <div class="header-right">
          <div class="service-score">
            <text class="label">服务评分</text>
            <star class="star" :score="seller.serviceScore"></star>
          </div>
          <div class="food-score">
            <text class="label">食物评分</text>
            <star class="star" :score="seller.serviceScore"></star>
          </div>
          <div class="delivery-score">
            <text class="label">送达时间</text>
            <text class="time">{{ seller.deliveryTime }}分钟</text>
          </div>
        </div>
      </div>
      <div class="split"></div>
      <!-- <rating-control  :ratingTypes="ratingTypes" :ratings="ratings"
        @on-change="updateState"></rating-control> -->
      <div class="rating-list">
        <list>
          <cell
            v-for="(rating,index) in ratings"
            class="rating-item"
            :key="index"
            v-show="(allFlag&&(!contentFlag||rating.text))||(rating.rateType==selectedType&&(!contentFlag||rating.text))"
          >
            <div class="line-one">
              <image class="avatar" :src="rating.avatar"></image>
              <div class="user">
                <text class="username">{{ rating.username }}</text>
                <div class="user-desc">
                  <text class="user-score">{{ rating.score }}</text>
                  <text class="time" v-if="rating.deliveryTime">{{ rating.deliveryTime }}分钟送达</text>
                </div>
              </div>
              <text class="rating-time">{{ rating.rateTime | formateTime }}
              </text>
            </div>
            <div class="line-two">
              <text class="rating-text">{{ rating.text }}</text>
            </div>
            <div class="line-three">
              <text class="iconfont icon-thumb_up" v-if="rating.rateType==0">&#xe6e4;</text>
              <text class="iconfont icon-thumb_down" v-if="rating.rateType==1">&#xe6e3;</text>
              <text
                class="recommend"
                v-for="(item,index) in rating.recommend"
                v-if="item&&index<3"
                :key="index"
              >
                {{ item }}
              </text>
            </div>
          </cell>
        </list>
      </div>
    </div>
  </div>
</template>

<script>
import star from '@/components/star/star.vue'
import ratingControl from '@/components/rating-control/rating-control.vue'
import { formateDate } from '@/assets/js/date.js'
import { get } from '@/assets/js/util'

export default {
  components: {
    star,
    ratingControl
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
      ratings: [],
      ratingTypes: [
        {
          name: '满意'
        },
        {
          name: '不满意'
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
  created () {
    this.getRating()
  },
  methods: {
    getRating () {
      get('/api/ratings', (res) => {
        if (res.ok) {
          this.ratings = res.data
        } else {
          console.log('request failed')
        }
      })
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
.iconfont {
  font-family: iconfont;
}
.rating {
  position: absolute;
  top: 177px;
  bottom: 0;
  width: 100%;
  overflow: auto;
}
.split {
  width: 100%;
  height: 16px;
  background: #f3f5f7;
  border-top: 1px solid rgba(7,17,27,0.1);
  border-bottom: 1px solid rgba(7,17,27,0.1);
}
.rating-content {
  width: 750px;
}
.rating-header {
  flex-direction: row;
  align-items: center;
  padding-top: 18px;
  padding-bottom: 18px;
}
.header-left {
  flex: 0 0 137px;
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: rgba(7,17,27,0.1);
}
.score {
  font-size: 24px;
  color: rgb(255,153,0);
  line-height: 28px;
  text-align: center;
  margin-bottom: 6px;
}
.title {
  font-size: 12px;
  color: rgb(7,17,27);
  line-height: 12px;
  text-align: center;
  margin-bottom: 8px;
}
.rank {
  font-size: 10px;
  color: rgb(147,153,159);
  line-height: 12px;
  text-align: center;
  margin-bottom: 6px;
}
.header-right {
  flex-direction: column;
  padding-left: 24px;
}
.label {
  font-size: 12px;
  color: rgb(7,17,27);
  line-height: 18px;
  text-align: left;
}
.service-score {
  flex-direction: row;
  margin-bottom: 8px;
}
.food-score {
  flex-direction: row;
  margin-bottom: 8px;
}
.delivery-score {
  flex-direction: row;
}
.star {
  padding-left: 12px;
}
.time {
  padding-left: 12px;
  font-size: 12px;
  color: rgb(147,153,159);
  line-height: 18px;
}
.rating-list {
  padding: 0 18px;
}
.rating-item {
  position: relative;
  display: block;
  padding: 18px 0;
  border-bottom: 1px solid rgba(7,17,27,0.1);
}
.line-one {
  position: relative;
  height: 28px;
}
.line-two {
  margin-top: 6px;
}
.line-three {
  flex-direction: row;
  margin-top: 6px;
  padding-left: 40px;
}
.user {
  position: absolute;
  left: 40px;
  top: 0;
}
.user-desc {
  flex-direction: row;
  align-items: center;
}
.user-score {
  margin-top: 4px;
  font-size: 10px;
  color: rgb(255,153,0);
  line-height: 12px;
}
.time {
  margin-top: 4px;
  margin-left: 6px;
  font-size: 10px;
  font-weight: 200;
  color: rgb(147,153,159);
  line-height: 12px;
}
.avatar {
  position: absolute;
  left: 0;
  top: 0;
  width: 28px;
  height: 28px;
  border-radius: 50%;
}
.avatar img {
  width: 28px;
  height: 28px;
  border-radius: 50%;
}
.rating-time,.username {
  font-size: 10px;
  color: rgb(7,17,27);
  line-height: 12px;
}
.rating-time {
  position: absolute;
  right: 0;
  top: 0;
  color: rgb(147,153,159);
}
.rating-text {
  padding-left: 40px;
  font-size: 12px;
  color: rgb(7,17,27);
  line-height: 18px;
  white-space: wrap;
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
  text-align: left;
}
.recommend {
  max-width: 50px;
  height: 16px;
  font-size: 9px;
  color: rgb(147,153,159);
  line-height: 16px;
  margin-right: 8px;
  padding: 0 6px;
  border: 1px solid rgba(7,17,27,0.1);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
