<template>
  <div class="tab">
    <text class="tab-item" :class="[isActive('goods')]" @click="tabTo('goods')">商品</text>
    <text class="tab-item" :class="[isActive('rating')]" @click="tabTo('rating')">评价</text>
    <text class="tab-item" :class="[isActive('seller')]" @click="tabTo('seller')">商家</text>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeKey: 'goods'
    }
  },
  methods: {
    tabTo (key) {
      if (this.activeKey === key) {
        return
      }
      this.activeKey = key
      this.$router.push(`/${key}`)
    },
    isActive (key) {
      return this.activeKey === key ? 'active' : ''
    }
  }
}
</script>

<style scoped>
.tab {
  flex-direction: row;
  width: 100%;
  height: 80px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: rgba(7,17,27,0.1);
}
.tab-item {
  flex: 1;
  color: rgb(77,85,93);
  justify-content: center;
  align-items:center;
}
.active {
  color: rgb(240,20,20);
}
</style>
