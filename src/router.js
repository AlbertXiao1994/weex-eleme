import Router from 'vue-router'
import Rating from '@/page/rating/rating.vue'
import Seller from '@/page/seller/seller.vue'
import Goods from '@/page/goods/goods.vue'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/goods',
      component: Goods
    },
    {
      path: '/seller',
      component: Seller
    },
    {
      path: '/rating',
      component: Rating
    }
  ]
})
