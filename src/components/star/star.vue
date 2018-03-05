<template>
  <div class="star">
    <image
      v-for="(item,index) in stars" class="star-item" :key="index"
      :src="starTypes[item]"
      :style="`width: ${size}px;height: ${size}px`"
    >
    </image>
  </div>
</template>

<script>
const LEN = 5

export default {
  props: {
    score: {
      type: Number
    },
    size: {
      type: Number,
      default: 16
    }
  },
  created () {
    this.starTypes = {
      on: 'http://albert-static.test.upcdn.net/images/star48_on@2x.png',
      half: 'http://albert-static.test.upcdn.net/images/star48_half@2x.png',
      off: 'http://albert-static.test.upcdn.net/images/star48_off@2x.png'
    }
  },
  computed: {
    stars () {
      let result = []
      let score = Math.floor(this.score * 2) / 2
      let hasDecimal = score % 1 !== 0
      let integer = Math.floor(score)
      for (let i = 0; i < integer; i++) {
        result.push('on')
      }
      if (hasDecimal) {
        result.push('half')
      }
      while (result.length < LEN) {
        result.push('off')
      }
      return result
    }
  }

}
</script>

<style scoped>
.star {
  width: 120px;
  font-size: 0;
  flex-direction: row;
  justify-content: space-around;
}
.star-item {
  width: 20px;
  height: 19px;
}
.star-item:last-child {
  margin-right: 0;
}
</style>
