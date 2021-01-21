<template>
<div>
  <el-button type="info" style="width:100px; height:50px" v-on:click="getCashonNumber(); getItemNumber(); getLabelExists(); getDeliveryNumber(); getMonochromeNumber(); getColorNumber(); getPackingNumber(); getOtherNumber(); getRemarksText(); getStepNumber(); nextTransition()">{{ tagname }}</el-button>
</div>
</template>

<script>
export default {
  props: ['tagname'],
  methods: {
    getCashonNumber: function (lsCashonNumber) {
      window.localStorage.setItem(lsCashonNumber, this.$store.state.cashon_number)
      this.$store.commit('setCashonNumber', lsCashonNumber)
    },
    getItemNumber: function (lsItemNumber) {
      window.localStorage.setItem(lsItemNumber, this.$store.state.item_number)
      this.$store.commit('setItemNumber', lsItemNumber)
    },
    getLabelExists: function (lsLabelExists) {
      window.localStorage.setItem(lsLabelExists, this.$store.state.label_exists)
      this.$store.commit('setLabelExists', lsLabelExists)
    },
    getDeliveryNumber: function (lsDeliveryNumber) {
      window.localStorage.setItem(lsDeliveryNumber, this.$store.state.delivery_number)
      this.$store.commit('setDeliveryNumber', lsDeliveryNumber)
    },
    getMonochromeNumber: function (lsMonochromeNumber) {
      window.localStorage.setItem(lsMonochromeNumber, this.$store.state.monochrome_number)
      this.$store.commit('setMonochromeNumber', lsMonochromeNumber)
    },
    getColorNumber: function (lsColorNumber) {
      window.localStorage.setItem(lsColorNumber, this.$store.state.color_number)
      this.$store.commit('setColorNumber', lsColorNumber)
    },
    getPackingNumber: function (lsPackingNumber) {
      window.localStorage.setItem(lsPackingNumber, this.$store.state.packing_number)
      this.$store.commit('setPackingNumber', lsPackingNumber)
    },
    getOtherNumber: function (lsOtherNumber) {
      window.localStorage.setItem(lsOtherNumber, this.$store.state.other_number)
      this.$store.commit('setOtherNumber', lsOtherNumber)
    },
    getRemarksText: function (lsRemarksText) {
      window.localStorage.setItem(lsRemarksText, this.$store.state.remarks_text)
      this.$store.commit('setRemarksText', lsRemarksText)
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
