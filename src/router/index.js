import Vue from 'vue'
import Router from 'vue-router'
import invoiceManagement from '../components/pages/invoice_management.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'invoiceManagement',
      component: invoiceManagement
    }
  ]
})
