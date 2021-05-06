import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    data: {}
  },
  mutations: {
    SET_LOADING(state, status){
      state.loading = status
    },
    SET_DATA(state, data) {
      state.data = data
    }
  },
  actions: {
    fetchApi(context) {
      context.commit('SET_LOADING', true)
      fetch("https://6050b01f5346090017670430.mockapi.io/api/routes", {
        "method": "GET",
      })
      .then(res => res.json())
      .then((out) => {
        context.commit('SET_LOADING', false)
        context.commit('SET_DATA', out)
      })
    }
  },
  modules: {
  }
})
