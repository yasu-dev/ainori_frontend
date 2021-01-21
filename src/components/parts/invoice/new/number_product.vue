<template>
<div>
  <div class="invoice-parts__product__title">
    {{ tagname }}<br>
  </div>
  <el-input-number v-model="$store.state.product_number" controls-position="right" @change="handleChange" :min="0"></el-input-number>
</div>
</template>

<script>
export default {
  props: ['tagname'],
  methods: {
    handleChange (value) {
      console.log(value)
    }
  }
}
</script>

<style>
.invoice-parts__product__title {
  line-height: 30px;
}
</style>
