'use strict'
import * as type from './types'
import actions from './actions'

const state = {
  users: {},
  lastUser: {}
}

const mutations = {
  [type.GET_USER](state, data) {
    state.lastUser = data
    state.users[data.id] = data
  }
}

const getters = {
  users: state => {
    return state.users
  },
  lastUser: state => {
    return state.lastUser
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
