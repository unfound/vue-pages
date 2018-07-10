<template>
  <div>
    <div>set-pwd</div>
    <div>{{num}}</div>
    <button @click="test"> + 1 </button>
  </div>
</template>

<style>
@import '../../../assets/css/reset.css';

html {
  height: 100%;
}

body {
  min-height: 100%;
}

</style>

<script>
import { toFixed } from '@/assets/js/utils.js'

export default {
  name: 'set-pwd',
  data () {
    return {
      num: 0
    }
  },
  methods: {
    test () {
      this.num++
    }
  },
  mounted () {
    console.log(toFixed('1.256'))
  }
}
</script>
