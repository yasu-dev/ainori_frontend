<template>
<div>
  <div class="invoice-parts__other__title">
    {{ tagname }}<br>
  </div>
  <span class="invoice-parts__other__text">
    <el-input style="margin: 0px;" v-model="$store.state.other_number"></el-input>
  </span>
  円
</div>
</template>

<script>
export default {
  props: ['tagname']
}
</script>

<style>
.invoice-parts__other__title {
  line-height: 30px;
}
.invoice-parts__other__text {
  display: inline-block;
  width: 180px;
}
</style>
