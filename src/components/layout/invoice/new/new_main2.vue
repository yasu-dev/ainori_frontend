<template>
<div>
  <p><numberProduct tagname="xxx"></numberProduct></p>
  <p><selectShippingSize tagname="箱サイズ"></selectShippingSize></p>
  <p><selectShippingFba tagname="FBA倉庫ID"></selectShippingFba></p>
  <p><textProduct tagname="内容"></textProduct></p>
  <buttonBack1 class="order-management__button2" tagname="< 戻る"></buttonBack1>
  <buttonRegistration2 class="order-management__button2" tagname="手数料入力 >"></buttonRegistration2>
</div>
</template>

<script>
import numberProduct from '../../../parts/invoice/new/number_product.vue'
import selectShippingSize from '../../../parts/invoice/new/select_shipping_size.vue'
import selectShippingFba from '../../../parts/invoice/new/select_shipping_fba.vue'
import textProduct from '../../../parts/invoice/new/text_product.vue'
import buttonBack1 from '../../../parts/invoice/new/button_back1.vue'
import buttonRegistration2 from '../../../parts/invoice/new/button_registration2.vue'

export default {
  components: {
    numberProduct,
    selectShippingSize,
    selectShippingFba,
    textProduct,
    buttonBack1,
    buttonRegistration2
  }
}
</script>

<style>
.order-management__button2 {
  display: inline-block;
  line-height: 100px;
}
</style>
