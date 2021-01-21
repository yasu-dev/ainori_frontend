<template>
<div>
  <el-button fill='#4c993a' type="primary" style="width:180px; height:50px" v-on:click="getClientName(); getStepNumber(); nextTransition()">{{tagname}}</el-button>
</div>
</template>

<script>
export default {
  props: ['tagname'],
  methods: {
    getClientName: function (lsClientName) {
      window.localStorage.setItem(lsClientName, this.$store.state.client_name)
      this.$store.commit('setClientName', lsClientName)
    },
    getStepNumber: function (lsStepNumber) {
      window.localStorage.setItem(lsStepNumber, '2')
      this.$store.commit('setStepNumber', lsStepNumber)
    },
    nextTransition () {
      this.$router.push('/')
    }
  }
}
</script>
