<template>
<div>
  <div class="invoice-parts__client__title">
    {{ tagname }}<br>
  </div>
  <div id="app-client_name" class="invoice-parts__client__text">
    <vue-simple-suggest v-model="$store.state.client_name" placeholder="郵便太郎" :list="suggestionList" :filter-by-query="true"></vue-simple-suggest>
  </div>
  <div v-if="clientcheck" class="invoice-parts__client__message">
    この顧客は登録されてません。<br><el-link type="warning">こちら</el-link>から顧客登録してください。<br>
  </div>
  <div v-else>
    <buttonRegistration1 class="order-management__button1" tagname="商品情報入力 >"></buttonRegistration1>
  </div>
</div>
</template>

<script>
import VueSimpleSuggest from 'vue-simple-suggest'
import 'vue-simple-suggest/dist/styles.css'
import buttonRegistration1 from '../../../parts/invoice/new/button_registration1.vue'

export default {
  props: ['tagname'],
  components: {
    VueSimpleSuggest,
    buttonRegistration1
  },
  data () {
    return {
      suggestionList: ['Canada', 'China', 'Cameroon', 'Italy', 'Iraq', 'Iceland']
    }
  },
  computed: {
    clientcheck () {
      if (this.$store.getters['clientcheck']) {
        this.$store.commit('setToProduct', 1)
      }
      return this.$store.getters['clientcheck']
    }
  }
}
</script>

<style>
.invoice-parts__client__title {
  line-height: 30px;
}
.invoice-parts__client__text {
  display: inline-block;
  width: 180px;
}
.invoice-parts__client__message {
  color: red;
}
</style>
