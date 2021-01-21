<template>
<div>
  <div class="invoice-parts__shippingsize__title">
    {{ tagname }}<br>
  </div>
  <span class="invoice-parts__shippingsize__select">
    <el-select v-model="$store.state.box_size" placeholder="Select">
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
        value: '60',
        label: '60'
      }, {
        value: '80',
        label: '80'
      }, {
        value: '100',
        label: '100'
      }],
      value: '60'
    }
  }
}
</script>

<style>
.invoice-parts__shippingsize__title {
  line-height: 30px;
}
.invoice-parts__shippingsize__select {
  display: inline-block;
  width: 180px;
}
</style>
