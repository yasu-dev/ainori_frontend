<template>
<div>
  <el-button type="info" style="width:100px; height:50px" v-on:click="getStepNumber(); nextTransition()">{{ tagname }}</el-button>
</div>
</template>

<script>
export default {
  props: ['tagname'],
  methods: {
    getStepNumber: function (lsStepNumber) {
      window.localStorage.setItem(lsStepNumber, '3')
      this.$store.commit('setStepNumber', lsStepNumber)
    },
    nextTransition () {
      this.$router.push('/')
    }
  }
}
</script>
