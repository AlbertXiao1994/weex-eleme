<template>
  <div>
    <image :src="srcMap[type]" class="iconImg"></image>
  </div>
</template>

<script>

export default {
  props: {
    type: {
      type: String
    }
  },
  data () {
    return {
      srcMap: []
    }
  },
  created () {
    this.srcMap = {
      decrease: 'http://wx2.sinaimg.cn/mw690/a98da548gy1fp0v64oxgmj200w00wjr5.jpg',
      discount: 'http://wx3.sinaimg.cn/mw690/a98da548gy1fp0v652ji9j200w00wgld.jpg',
      special: 'http://wx1.sinaimg.cn/mw690/a98da548gy1fp0v66d8ohj200w00wjr5.jpg',
      invoice: 'http://wx3.sinaimg.cn/mw690/a98da548gy1fp0v65u6yfj200w00wgld.jpg',
      guarantee: 'http://wx4.sinaimg.cn/mw690/a98da548gy1fp0v65ibd5j200w00wgld.jpg'
    }
  }
}
</script>

<style scoped>
.iconImg {
  width: 16px;
  height: 16px;
}
</style>
