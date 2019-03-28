import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Vuex from 'vuex'
Vue.use(Vuex)

// Meteor Tracker integration
import VueMeteorTracker from 'vue-meteor-tracker'
Vue.use(VueMeteorTracker)
Vue.config.meteor.freeze = true

import VueObserveVisibility from 'vue-observe-visibility'
Vue.use(VueObserveVisibility)

import * as filters from './filters'
for (const key in filters) {
  Vue.filter(key, filters[key])
}
