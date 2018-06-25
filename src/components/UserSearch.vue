<template>
  <form class="search" @submit.prevent="searchUser">
    <label class="search__label" for="user-login">Enter the GitHub user's login:</label>
    <input class="search__input" type="text" v-model="inputValue" id="user-login" placeholder="Login...">
    <button class="search__btn" type="submit">
      <Spinner v-if="isFetching"/>
      <span v-else>Search</span>
    </button>
  </form>
</template>

<script>
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import Spinner from 'vue-simple-spinner'

export default {
  name: 'UserSearch',
  data () {
    return {
      inputValue: '',
      isFetching: false
    }
  },
  computed: {
    ...mapGetters([
      'lastUser'
    ])
  },
  methods: {
    ...mapActions([
      'getUser'
    ]),
    searchUser () {
      const login = this.lastUser.login

      if (login && login.toLowerCase() === this.inputValue) {
        Vue.toasted.error('User is already on the page')
      } else {
        this.isFetching = true
        this.getUser(this.inputValue)
          .then(function () {
            this.isFetching = false
          })
          .catch(function () {
            this.isFetching = false
          })
      }
    }
  },
  components: {
    Spinner
  }
}
</script>

<style lang="sass">
.search
  max-width: 500px
  margin: 0 auto 50px

  &__label
    font-size: 38px
    display: block
    color: #2f2c2d
    margin: 25px 0

  &__input
    width: calc(100% - 100px)
    height: 50px
    font-size: 25px
    font-style: italic
    padding: 0 15px
    outline: none
    border: 2px solid #2f2c2d
    color: #0d5a72
    display: inline-block
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.15)
    border-bottom-left-radius: 10px
    border-top-left-radius: 10px

  &__btn
    width: 100px
    height: 50px
    float: right
    background: #2f2c2d
    color: #ffffff
    border: none
    outline: none
    text-transform: uppercase
    font-size: 18px
    font-style: italic
    cursor: pointer
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.15)
    border-bottom-right-radius: 10px
    border-top-right-radius: 10px
    transition: .3s

    &:hover
      transition: .3s
      background: #4b4748

@media (max-width: 767px)
  .search
    max-width: 450px

    &__label
      font-size: 34px

@media (max-width: 480px)
  .search
    max-width: 345px

    &__label
      font-size: 26px
      margin-bottom: 15px

    &__input
      width: calc(100% - 80px)
      font-size: 20px

    &__btn
      font-size: 15px
      width: 80px

@media (max-width: 374px)
  .search
    &__label
      font-size: 22px

</style>
