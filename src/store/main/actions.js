'use strict'

import * as type from './types'
import Vue from 'vue'

const actions = {
  getUser({ commit }, data) {
    return new Promise((resolve, reject) => {
      Vue.http.get(`https://api.github.com/users/${data}`)
        .then(user => {
          commit(type.GET_USER, user.body)
          Vue.toasted.success('User found')
          resolve()
        })
        .catch(err => {
          Vue.toasted.error(err.statusText)
          reject(new Error(`${err.statusText}`))
        })
    })
  }
}

export default actions
