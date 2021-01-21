<template>
<div>
  <el-button type="primary" style="width:200px; height:50px" v-on:click="getStepNumber(); nextTransition()">{{ tagname }}</el-button>
</div>
</template>

<script>
export default {
  props: ['tagname'],
  methods: {
    getStepNumber: function (lsStepNumber) {
      window.localStorage.setItem(lsStepNumber, '5')
      this.$store.commit('setStepNumber', lsStepNumber)
    },
    nextTransition () {
      this.$router.push('/')
    }
  }
}
</script>
