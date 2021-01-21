<template>
<div>
  <div class="invoice-parts__packing__title">
    {{ tagname }}<br>
  </div>
  <span class="invoice-parts__packing__select">
    <el-select v-model="$store.state.packing_number" placeholder="Select">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </span>
  円
</div>
</template>

<script>
export default {
  props: ['tagname'],
  data () {
    return {
      options: [{
        value: '0',
        label: '0'
      }, {
        value: '100',
        label: '100'
      }, {
        value: '200',
        label: '200'
      }, {
        value: '300',
        label: '300'
      }],
      value: '0'
    }
  }
}
</script>

<style>
.invoice-parts__packing__title {
  line-height: 30px;
}
.invoice-parts__packing__select {
  display: inline-block;
  width: 180px;
}
</style>
