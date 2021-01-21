<template>
<div>
  <p><radioItemlabel tagname="アイテムラベル数"></radioItemlabel></p>
  <p><numberDelivery tagname="納品書数"></numberDelivery></p>
  <p><numberMonochrome tagname="モノクロプリント数"></numberMonochrome></p>
  <p><numberColor tagname="カラープリント数"></numberColor></p>
  <p><selectPacking tagname="梱包資材料"></selectPacking></p>
  <p><textOther tagname="その他手数料"></textOther></p>
  <p><textRemarks tagname="備考"></textRemarks></p>
  <buttonBack2 class="order-management__button3" tagname="< 戻る"></buttonBack2>
  <buttonRegistration3 class="order-management__button3" tagname="入力内容確認 >"></buttonRegistration3>
</div>
</template>

<script>
import radioItemlabel from '../../../parts/invoice/new/radio_itemlabel.vue'
import numberDelivery from '../../../parts/invoice/new/number_delivery.vue'
import numberMonochrome from '../../../parts/invoice/new/number_monochrome.vue'
import numberColor from '../../../parts/invoice/new/number_color.vue'
import selectPacking from '../../../parts/invoice/new/select_packing.vue'
import textOther from '../../../parts/invoice/new/text_other.vue'
import textRemarks from '../../../parts/invoice/new/text_remarks.vue'
import buttonBack2 from '../../../parts/invoice/new/button_back2.vue'
import buttonRegistration3 from '../../../parts/invoice/new/button_registration3.vue'

export default {
  components: {
    radioItemlabel,
    numberDelivery,
    numberMonochrome,
    numberColor,
    selectPacking,
    textOther,
    textRemarks,
    buttonBack2,
    buttonRegistration3
  }
}
</script>

<style>
.order-management__button3 {
  display: inline-block;
  line-height: 100px;
}
</style>
