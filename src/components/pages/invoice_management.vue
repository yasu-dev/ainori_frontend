<template>
<div class="invoice-management__main">
  新規依頼
  <newMain0></newmain0>
  <div v-if="$store.state.step_number === '1'"><newMain1></newMain1></div>
  <div v-else-if="$store.state.step_number === '2'"><newMain2></newMain2></div>
  <div v-else-if="$store.state.step_number === '3'"><newMain3></newMain3></div>
  <div v-else-if="$store.state.step_number === '4'"><newMain4></newMain4></div>
  <div v-else-if="$store.state.step_number === '5'"><newMain5></newMain5></div>
</div>
</template>

<script>
import newMain0 from '../layout/invoice/new/new_main2.vue'
import newMain1 from '../layout/invoice/new/new_main1.vue'
import newMain2 from '../layout/invoice/new/new_main2.vue'
import newMain3 from '../layout/invoice/new/new_main3.vue'
import newMain4 from '../layout/invoice/new/new_main4.vue'
import newMain5 from '../layout/invoice/new/new_main5.vue'

export default {
  components: {
    newMain0,
    newMain1,
    newMain2,
    newMain3,
    newMain4,
    newMain5
  }
}
</script>

<style>
.invoice-management__main {
  margin: 0 0 0 0;
}
</style>
