import 'isomorphic-fetch'

import './plugins'

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import { sync } from 'vuex-router-sync'
import apiURL from './api/api'
import App from './ui/App.vue'
import routes from './routes'
import storeOptions from './store'
import axios from 'axios'
import qs from 'qs'

import('buffer').then(({Buffer}) => {global.Buffer = Buffer;})

Vue.prototype.qs = qs;

Vue.prototype.$ajax = axios;

axios.defaults.headers = {
  "Content-Type": "application/json"
}

axios.defaults.baseURL = apiURL.apiUrl

function createApp (context) {
  const router = new VueRouter({
    mode: 'history',
    routes,
  })

  const store = new Vuex.Store()

  const jwt = require('jsonwebtoken');
  Vue.prototype.$jwt = jwt
  // sync the router with the vuex store.
  // this registers `store.state.route`
  sync(store, router)


  axios.interceptors.request.use(
    config => {
        if (sessionStorage.getItem('token')) {
            config.headers.Authorization = `${sessionStorage.getItem('token')}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
  );

  return {
    app: new Vue({
      el: '#app',
      router,
      store,
      ...App,
    }),
    router,
    store,
  }
}

export default createApp
