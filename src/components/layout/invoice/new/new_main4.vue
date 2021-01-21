<template>
<div>
  <span class="order-management__main4__title">顧客名<br></span>
  <span class="order-management__main4__value">
    {{ $store.state.client_name }}<br>
  </span>
  <span class="order-management__main4__title">商品数<br></span>
  <span class="order-management__main4__value">
    {{ $store.state.product_number }}<br>
  </span>
  <span class="order-management__main4__title">箱サイズ<br></span>
  <span class="order-management__main4__value">
    {{ $store.state.box_size }} サイズ<br>
  </span>
  <span class="order-management__main4__title">FBA倉庫ID<br></span>
  <span class="order-management__main4__value">
    {{ $store.state.fba_warehouse }}<br>
  </span>
  <span class="order-management__main4__title">内容<br></span>
  <span class="order-management__main4__value">
    {{ $store.state.product_contents }}<br>
  </span>
  <span class="order-management__main4__title">代引数<br></span>
  <span class="order-management__main4__value">
    {{ $store.state.cashon_number }}<br>
  </span>
  <span class="order-management__main4__title">アイテムラベル数<br></span>
  <span class="order-management__main4__value">
    {{ $store.state.item_number }} 枚<br>
  </span>
  <span v-if="$store.state.item_number > 0">
    <span class="order-management__main4__title">ラベル有無<br></span>
    <span class="order-management__main4__value">
      <span v-if="$store.state.label_exists === '1'">ラベルあり<br></span>
      <span v-else-if="$store.state.label_exists === '2'">ラベルなし<br></span>
    </span>
  </span>
  <span class="order-management__main4__title">納品書数<br></span>
  <span class="order-management__main4__value">
    {{ $store.state.delivery_number }} 枚<br>
  </span>
  <span class="order-management__main4__title">モノクロプリント数<br></span>
  <span class="order-management__main4__value">
    {{ $store.state.monochrome_number }} 枚<br>
  </span>
  <span class="order-management__main4__title">カラープリント数<br></span>
  <span class="order-management__main4__value">
    {{ $store.state.color_number }} 枚<br>
  </span>
  <span class="order-management__main4__title">梱包資材料<br></span>
  <span class="order-management__main4__value">
    {{ $store.state.packing_number }} 円<br>
  </span>
  <span class="order-management__main4__title">その他手数料<br></span>
  <span class="order-management__main4__value">
    {{ $store.state.other_number }} 円<br>
  </span>
  <span class="order-management__main4__title">備考<br></span>
  <span class="order-management__main4__value">
    {{ $store.state.remarks_text }}<br>
  </span>
  <buttonBack3 class="order-management__button4" tagname="< 戻る"></buttonBack3>
  <buttonRegistration4 class="order-management__button4" tagname="請求データ登録 >"></buttonRegistration4>
</div>
</template>

<script>
import buttonBack3 from '../../../parts/invoice/new/button_back3.vue'
import buttonRegistration4 from '../../../parts/invoice/new/button_registration4.vue'

export default {
  components: {
    buttonBack3,
    buttonRegistration4
  }
}
</script>

<style>
.order-management__main4__title {
  line-height: 30px;
  position: relative;
}
.order-management__main4__value {
  line-height: 30px;
  position: relative;
  bottom: 5px;
  left: 20px;
  color: #409EFF;
  font-weight:bolder;
}
.order-management__button4 {
  display: inline-block;
  line-height: 100px;
}
</style>
