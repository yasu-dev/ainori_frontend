<template>
<div>
  <div class="invoice-parts__productinfo__title">
    {{ tagname }}<br>
  </div>
  <span class="invoice-parts__productinfo__text">
    <el-input type="textarea" :rows="3" v-model="$store.state.product_contents" placeholder="FBA123ABCXYZ、不良返品、SONY-ABC-XY123、FedEx請求書スキャン送付など"></el-input>
  </span>
</div>
</template>

<script>
export default {
  props: ['tagname']
}
</script>

<style>
.invoice-parts__productinfo__title {
  line-height: 30px;
}
.invoice-parts__productinfo__text {
  display: inline-block;
  width: 305px;
}
</style>
