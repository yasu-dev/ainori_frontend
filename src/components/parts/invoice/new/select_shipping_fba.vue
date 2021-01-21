<template>
<div>
  <div class="invoice-parts__shippingfba__title">
    {{ tagname }}<br>
  </div>
  <span class="invoice-parts__shippingfba__select">
    <el-select v-model="$store.state.fba_warehouse" placeholder="Select">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </span>
</div>
</template>

<script>
export default {
  props: ['tagname'],
  data () {
    return {
      options: [{
        value: 'HND1',
        label: 'HND1'
      }, {
        value: 'NRT1',
        label: 'NRT1'
      }],
      value: 'HND1'
    }
  }
}
</script>

<style>
.invoice-parts__shippingfba__title {
  line-height: 30px;
}
.invoice-parts__shippingfba__select {
  display: inline-block;
  width: 180px;
}
</style>
