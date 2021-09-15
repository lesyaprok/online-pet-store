import '@/assets/styles/styles.css'
import Vue from 'vue';
import App from './App.vue';
import { router } from '@/services/router';
import store from '@/vuex/store';
import firebase from "firebase/app";
import { firebaseConfig } from '@/services/constants';

Vue.config.productionTip = false;

firebase.initializeApp(firebaseConfig);
// setTimeout(() => {
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
// }, 1000)
