<template>
<div>
  <p><textClient tagname="顧客名"></textClient></p>
</div>
</template>

<script>
import textClient from '../../../parts/invoice/new/text_client.vue'

export default {
  components: {
    textClient
  }
}
</script>

<style>
.order-management__button1 {
  line-height: 100px;
}
</style>
