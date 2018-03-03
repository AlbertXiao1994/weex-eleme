<template>
  <div class="header">
    <div class="header-wrapper">
      <!-- 商家头像 -->
      <div class="avatar">
        <image class="avatarImg" :src="msg.avatar"></image>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: Object
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.header {
  position: relative;
  background: rgba(7,17,27,0.5);
  overflow: hidden;
}
.header-wrapper {
  position: relative;
  width: 100%;
  padding-top: 24px;
  color: rgb(255,255,255);
  text-align: left;
}
.avatar {
  margin-left: left;
  margin-left: 24px;
  vertical-align: top;
}
.avatarImg {
  width: 64px;
  height: 64px;
  border-radius: 4px;
}
.detail {
  margin-left: 16px;
  margin-top: 2px;
  font-size: 0;
}
.name {
  font-size: 18px;
  font-weight: bold;
  line-height: 18px;
}
.brand {
  width: 30px;
  height: 18px;
  /* background-image: url('./brand@2x.png'); */
  background-size: 100% 100%;
  margin-right: 6px;
}
.description,.supports {
  color: rgb(255,255,255);
  font-weight: 200;
  line-height: 12px;
}
.description {
  position: relative;
  font-size: 12px;
  margin-top: 8px;
}
.supports{
  font-size: 10px;
  margin-top: 10px;
}
.spt-icon {
  width: 12px;
  height: 12px;
  /* background-image: url('./decrease_2@2x.png'); */
  background-size: 100% 100%;
  margin-right: 4px;
}
.supports-count {
  box-sizing: border-box;
  position: absolute;
  right: 12px;
  bottom: 46px;
  box-sizing: border-box;
  width: 50px;
  height: 24px;
  padding: 7px 8px;
  border-radius: 12px;
  background-color: rgba(0,0,0,0.2);
  font-size: 0;
}
.count {
  font-size: 10px;
  font-weight: 200;
}
.icon-keyboard_arrow_right {
  font-size: 10px;
  margin-left: 2px;
  color: #fff;
}
.bulletin {
  position: relative;
  margin-top: 18px;
  height: 28px;
  padding: 0 22px 0 12px;
  line-height: 28px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: rgba(7,17,27,0.2);
}
.bulletin-text {
  font-size: 10px;
  font-weight: 200;
  margin-left: 4px;
  margin-top: 8px;
  vertical-align: top;
}
.bulletin-icon {
  width: 22px;
  height: 12px;
  /* background-image: url('./bulletin@2x.png'); */
  background-size: 100% 100%;
}
.bulletin .icon-keyboard_arrow_right {
  position: absolute;
  top: 7px;
  right: 12px;
  font-size: 10px;
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
.header .more {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(7,17,27,0.8);
  z-index: 200;
  overflow: auto;
}
.more-wrapper {
  min-height: 100%;
  width: 100%;
  z-index: 200;
}
.more-main {
  margin-top: 64px;
  padding-bottom: 64px;
  margin-left: 36px;
  margin-right: 36px;
  z-index: 200;
  color: #fff;
}
.more-main .name {
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  text-align: center;
}
.icon-close {
  position: relative;
  width: 32px;
  height: 32px;
  font-size: 32px;
  color: rgba(255,255,255,0.5);
  margin: -64px auto 0 auto;
  clear: both;
  z-index: 100;
}
.star-wrapper {
  width: 100%;
  text-align: center;
  margin-top: 16px;
}
.title {
  display: flex;
  width: 100%;
  margin: 28px auto 24px auto;
}
.title .line {
  position: relative;
  top: -6px;
  flex: 1;
  border-bottom: 1px solid rgba(255,255,255,0.2);
}
.title .text {
  font-size: 14px;
  color: #fff;
  font-weight: 700;
  line-height: 14px;
  padding: 0 12px;
}
.supports-info .info-item {
  display: block;
  padding: 0 12px;
  margin-bottom: 12px;
  font-size: 0;
}
.supports-info .info-item:last-child {
  margin-bottom: 0;
}
.info-item .icon {
  display: inline-block;
  width: 16px;
  height: 16px;
}
.info-item .text {
  font-size: 12px;
  line-height: 16px;
  font-weight: 200;
  margin-left: 6px;
  vertical-align: top;
}
.bulletin-content {
  padding: 0 12px;
  font-size: 14px;
  font-weight: 200;
  line-height: 24px;
}
</style>
