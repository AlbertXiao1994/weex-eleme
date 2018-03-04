<template>
  <div class="wrapper">
    <m-header :msg="seller"></m-header>
    <tab-bar></tab-bar>
    <router-view/>
  </div>
</template>

<script>
import MHeader from '@/components/header/header.vue'
import TabBar from '@/components/tab-bar/tab-bar.vue'
import { get, initIconFont } from '@/assets/js/util'

export default {
  components: {
    MHeader,
    TabBar
  },
  beforeCreate () {
    initIconFont()
  },
  created () {
    this.getSeller()
  },
  data () {
    return {
      seller: {}
    }
  },
  methods: {
    getSeller () {
      get('/api/seller', (res) => {
        if (res.ok) {
          this.seller = res.data
        } else {
          console.log('request failed')
        }
      })
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
