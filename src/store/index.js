'use strict'

import Vue from 'vue'
import Vuex from 'vuex'
import main from './main/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    main
  },
  strict: false
})
