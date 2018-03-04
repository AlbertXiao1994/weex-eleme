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
      on: '',
      half: '',
      off: ''
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
  font-size: 0;
}
.star-item {
  display: inline-block;
  width: 20px;
  height: 19px;
  margin-right: 12px;
}
.star-item:last-child {
  margin-right: 0;
}
</style>
