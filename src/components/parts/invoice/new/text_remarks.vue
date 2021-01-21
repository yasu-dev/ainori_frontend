<template>
<div>
  <div class="invoice-parts__remarks__title">
    {{ tagname }}<br>
  </div>
  <span class="invoice-parts__remarks__text">
    <el-input type="textarea" :rows="2" v-model="$store.state.remarks_text" placeholder="ゆうパック着払い、元払いなど"></el-input>
  </span>
</div>
</template>

<script>
export default {
  props: ['tagname']
}
</script>

<style>
.invoice-parts__remarks__title {
  line-height: 30px;
}
.invoice-parts__remarks__text {
  display: inline-block;
  width: 305px;
}
</style>
