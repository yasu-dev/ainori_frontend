import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    step_number: '1',
    client_name: null,
    to_product: 0,
    product_number: 0,
    box_size: 60,
    fba_warehouse: 'HND1',
    product_contents: '',
    cashon_number: 0,
    item_number: 0,
    label_exists: '1',
    delivery_number: 0,
    monochrome_number: 0,
    color_number: 0,
    packing_number: 0,
    other_number: 0,
    remarks_text: ''
  },
  mutations: {
    setStepNumber: function (state, value) {
      state.step_number = window.localStorage.getItem(value)
    },
    setClientName: function (state, value) {
      state.client_name = window.localStorage.getItem(value)
    },
    setToProduct: function (state, value) {
      state.to_product = value
    },
    setProductNumber: function (state, value) {
      state.product_number = window.localStorage.getItem(value)
    },
    setBoxSize: function (state, value) {
      state.box_size = window.localStorage.getItem(value)
    },
    setFbaWarehouse: function (state, value) {
      state.fba_warehouse = window.localStorage.getItem(value)
    },
    setProductContents: function (state, value) {
      state.product_contents = window.localStorage.getItem(value)
    },
    setCashonNumber: function (state, value) {
      state.cashon_number = window.localStorage.getItem(value)
    },
    setItemNumber: function (state, value) {
      state.item_number = window.localStorage.getItem(value)
    },
    setLabelExists: function (state, value) {
      state.label_exists = window.localStorage.getItem(value)
    },
    setDeliveryNumber: function (state, value) {
      state.delivery_number = window.localStorage.getItem(value)
    },
    setMonochromeNumber: function (state, value) {
      state.monochrome_number = window.localStorage.getItem(value)
    },
    setColorNumber: function (state, value) {
      state.color_number = window.localStorage.getItem(value)
    },
    setPackingNumber: function (state, value) {
      state.packing_number = window.localStorage.getItem(value)
    },
    setOtherNumber: function (state, value) {
      state.other_number = window.localStorage.getItem(value)
    },
    setRemarksText: function (state, value) {
      state.remarks_text = window.localStorage.getItem(value)
    }
  },
  getters: {
    clientcheck: function (state) {
      if (state.client_name === 'Canada') {
        return true
      } else {
        return false
      }
    }
  }
})
