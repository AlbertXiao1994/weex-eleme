<template>
  <div class="wrapper">
    <m-header></m-header>
    <tab-bar></tab-bar>
    <router-view/>
  </div>
</template>

<script>
import MHeader from '@/components/header/header.vue'
import TabBar from '@/components/tab-bar/tab-bar.vue'
export default {
  components: {
    MHeader,
    TabBar
  },
  name: 'App',
  data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    }
  }
}
</script>

<style scoped>
  .wrapper {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
