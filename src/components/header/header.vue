<template>
  <div class="header">
    <div class="header-top">
      <!-- 商家头像 -->
      <div class="avatar">
        <image class="avatarImg" :src="msg.avatar"></image>
      </div>
      <!-- 详细信息 -->
      <div class="detail">
        <div class="name">
          <image class="brand" src="http://wx3.sinaimg.cn/small/a98da548gy1fozp2ro2twj201o010q2p.jpg"></image>
          <text class="text-big">{{ msg.name }}</text>
        </div>
        <div class="description">
          <text class="text-small">{{ msg.description }}/{{ msg.deliveryTime }}分钟</text>
        </div>
        <div class="supports" v-if="msg.supports">
          <image class="spt-icon" src="http://wx3.sinaimg.cn/small/a98da548gy1fozp2sanvqj200w00wjr5.jpg"></image>
          <text class="text-small">{{ msg.supports[0].description }}</text>
        </div>
      </div>
    </div>
    <!-- 公告 -->
    <div class="bulletin" @click="showMore">
      <image class="bulletin-icon" src="http://wx3.sinaimg.cn/mw690/a98da548gy1fozp2s0og6j201800omwx.jpg"></image>
      <text class="bulletin-text">{{ msg.bulletin }}</text>
      <text class="iconfont iconfont-keyboard_arrow_right bulletin-iconfont">&#xe77a;</text>
    </div>
    <!-- 其他 -->
    <div class="supports-count" v-if="msg.supports" @click="showMore">
      <text class="count iconfont iconfont-keyboard_arrow_right">{{ msg.supports.length }}个&#xe77a;</text>
    </div>
    <div class="background">
      <image :src="msg.avatar" style="width: 100%;height: 268px"></image>
    </div>
    <div class="more" v-if="isShow">
      <div class="more-wrapper">
        <div class="more-header">
          <text class="more-title">{{ msg.name }}</text>
          <div class="star-wrapper">
              <star :score="msg.score"></star>
          </div>
        </div>
        <div class="more-main">
          <div class="title">
            <div class="title-line"></div>
            <text class="title-text">优惠信息</text>
            <div class="title-line"></div>
          </div>
          <list class="supports-info" v-if="msg.supports">
            <cell class="info-item" v-for="(item, index) in msg.supports" :key="index">
              <icon :type="item.type" :size="iconSize"></icon>
              <text class="supports-text">{{ item.description }}</text>
            </cell>
          </list>
          <div class="title">
            <div class="title-line"></div>
            <text class="title-text">商家公告</text>
            <div class="title-line"></div>
          </div>
          <text class="bulletin-content">{{ msg.bulletin }}</text>
        </div>
        <div class="more-footer">
          <text class="iconfont iconfont-close" @click="closeMore">&#xea4f;</text>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import star from '@/components/star/star.vue'
import icon from '@/components/icon/icon.vue'

export default {
  components: {
    star,
    icon
  },
  props: {
    msg: {
      type: Object
    }
  },
  created () {
    this.iconSize = 16
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  data () {
    return {
      seller: {},
      isShow: false,
      classMap: []
    }
  },
  methods: {
    showMore () {
      this.isShow = true
    },
    closeMore () {
      this.isShow = false
    }
  }
}
</script>

<style scoped>
.iconfont {
  font-family: iconfont;
}
.header {
  position: relative;
  background: rgba(7,17,27,0.5);
  overflow: hidden;
}
.header-top {
  position: relative;
  width: 100%;
  padding-top: 24px;
  text-align: left;
  flex-direction: row;
}
.avatar {
  margin-left: 24px;
  vertical-align: top;
}
.avatarImg {
  width: 64px;
  height: 64px;
  border-radius: 4px;
}
.detail {
  flex-direction: column;
  justify-content: space-between;
  margin-left: 16px;
  font-size: 0;
}
.name {
  flex-direction: row;
}
.text-big {
  font-size: 18px;
  font-weight: bold;
  line-height: 18px;
  color: #fff;
}
.brand {
  width: 30px;
  height: 18px;
  /* background-image: url('./brand@2x.png'); */
  background-size: 100% 100%;
  margin-right: 6px;
}
.description {
  flex-direction: row;
  align-items: center;
}
.text-small {
  color: rgb(255,255,255);
  font-weight: 200;
  font-size: 12px;
}
.supports {
  position: relative;
  font-size: 10px;
  flex-direction: row;
  align-items: center;
}
.spt-icon {
  width: 12px;
  height: 12px;
  /* background-image: url('./decrease_2@2x.png'); */
  background-size: 100% 100%;
  margin-right: 4px;
}
.supports-count {
  position: absolute;
  right: 12px;
  bottom: 46px;
  width: 50px;
  height: 24px;
  border-radius: 12px;
  background-color: rgba(0,0,0,0.2);
  font-size: 0;
  justify-content: center;
  align-items: center;
}
.count {
  color: #fff;
  font-size: 10px;
  font-weight: 200;
}
.iconfont-keyboard_arrow_right {
  font-size: 10px;
  color: #fff;
}
.bulletin {
  position: relative;
  margin-top: 18px;
  padding-top: 7px;
  padding-right: 22px;
  padding-bottom: 7px;
  padding-left: 12px;
  background-color: rgba(7,17,27,0.2);
}
.bulletin-text {
  font-size: 10px;
  font-weight: 200;
  margin-left: 26px;
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
}
.bulletin-icon {
  position: absolute;
  width: 22px;
  height: 12px;
}
.bulletin-iconfont {
  position: absolute;
  right: 12px;
  bottom: 7px;
}
.background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  filter: blur(10px);
}
.more {
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(7,17,27,0.8);
  z-index: 200;
  overflow: auto;
}
.more-wrapper {
  margin-top: 64px;
  padding-bottom: 64px;
  margin-left: 36px;
  margin-right: 36px;
  z-index: 200;
  flex-direction: column;
  min-height: 100vh;
}
.more-title {
  font-size: 16px;
  color: #fff;
  line-height: 16px;
  font-weight: 700;
  text-align: center;
}
.more-main {
  flex: 1;
  z-index: 200;
  color: #fff;
}
.more-footer {
  height: 32px;
}
.iconfont-close {
  position: relative;
  width: 32px;
  height: 32px;
  font-size: 32px;
  color: rgba(255,255,255,0.5);
  margin-top: -32px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 0;
  clear: both;
  z-index: 200;
}
.star-wrapper {
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 16px;
}
.title {
  flex-direction: row;
  width: 100%;
  margin-top: 28px;
  margin-right: auto;
  margin-bottom: 24px;
  margin-left: auto;
}
.title-line {
  position: relative;
  top: -6px;
  flex: 1;
  border-bottom: 1px solid rgba(255,255,255,0.2);
}
.title-text {
  font-size: 14px;
  color: #fff;
  font-weight: 700;
  line-height: 14px;
  padding: 0 12px;
}
.info-item {
  flex-direction: row;
  align-items: center;
  padding: 0 12px;
  margin-bottom: 12px;
  font-size: 0;
}
.info-item:last-child {
  margin-bottom: 0;
}
.supports-text {
  font-size: 12px;
  color: #fff;
  line-height: 16px;
  font-weight: 200;
  margin-left: 6px;
  vertical-align: top;
}
.bulletin-content {
  padding: 0 12px;
  font-size: 14px;
  color: #fff;
  font-weight: 200;
  line-height: 24px;
}
</style>
