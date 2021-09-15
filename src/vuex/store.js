import Vue from 'vue';
import Vuex from 'vuex';
import { getData } from '../services/productsAPI';
Vue.use(Vuex);

const baseURL = "https://project-eb660-default-rtdb.firebaseio.com/.json";

const store = new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  mutations: {
    SET_PRODUCTS: (state, products) => {
      // console.log(products)
      state.products = products;
    },
    SET_CART: (state, product) => {
      const fil = state.cart.filter(e => e.title === product.title)
      if (!fil.length) {
        state.cart.push(product);
      }

    },
    REMOVE_ITEM: (state, index) => {
      state.cart.splice(index, 1)
    },
    LOCAL_STORAGE: (state, localStorage) => {
      state.cart = JSON.parse(localStorage.getItem('cart'))
    }
  },
  actions: {
    GET_PRODUCTS({ commit }) {
      return getData().then(res => {
        commit('SET_PRODUCTS', res.data);
        return res;
      })
    },
    ADD_PRODUCT_TO_CART({ commit }, product) {
      commit('SET_CART', product)
    },
    REMOVE_PRODUCT_FROM_CART({ commit }, index) {
      commit('REMOVE_ITEM', index)
    },
    GET_ITEMS_FROM_LOCAL_STORAGE({ commit }, localStorage) {
      commit('LOCAL_STORAGE', localStorage)
    }
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    }
  }
})

export default store;