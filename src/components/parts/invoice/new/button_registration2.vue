<template>
<div>
  <el-button type="primary" style="width:200px; height:50px" v-on:click="getProductNumber(); getBoxSize(); getFbaWarehouse(); getProductContents(); getStepNumber(); nextTransition()">{{ tagname }}</el-button>
</div>
</template>

<script>
export default {
  props: ['tagname'],
  methods: {
    getProductNumber: function (lsProductNumber) {
      window.localStorage.setItem(lsProductNumber, this.$store.state.product_number)
      this.$store.commit('setProductNumber', lsProductNumber)
    },
    getBoxSize: function (lsBoxSize) {
      window.localStorage.setItem(lsBoxSize, this.$store.state.box_size)
      this.$store.commit('setBoxSize', lsBoxSize)
    },
    getFbaWarehouse: function (lsFbaWarehouse) {
      window.localStorage.setItem(lsFbaWarehouse, this.$store.state.fba_warehouse)
      this.$store.commit('setFbaWarehouse', lsFbaWarehouse)
    },
    getProductContents: function (lsProductContents) {
      window.localStorage.setItem(lsProductContents, this.$store.state.product_contents)
      this.$store.commit('setProductContents', lsProductContents)
    },
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
