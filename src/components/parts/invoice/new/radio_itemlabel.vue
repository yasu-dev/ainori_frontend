<template>
<div>
  <div class="invoice-parts__itemlabel__title">
    {{ tagname }}<br>
  </div>
  <el-input-number v-model="$store.state.item_number" controls-position="right" @change="handleChange" :min="0"></el-input-number>
  <span v-if="$store.state.item_number > 0" class="invoice-parts__itemlabel__radio">
    <el-radio-group v-model="$store.state.label_exists">
      <el-radio v-model="$store.state.label_exists" label="1">ラベルあり</el-radio>
      <el-radio v-model="$store.state.label_exists" label="2">ラベルなし</el-radio>
    </el-radio-group>
  </span>
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
.invoice-parts__itemlabel__title {
  line-height: 30px;
}
.invoice-parts__itemlabel__radio {
  display: inline-block;
  width: 200px;
  vertical-align: middle;
  line-height: 20px;
}
</style>
