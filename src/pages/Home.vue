<template>
  <div class="home">
    <img class="home__logo" src="../assets/img/gh-logo.png" alt="GitHub Logo">
    <UserSearch />
    <UserCard v-if="lastUser.id" :key="user.id" :user="lastUser" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserCard from '../components/UserCard'
import UserSearch from '../components/UserSearch'

export default {
  name: 'Home',
  computed: {
    ...mapGetters([
      'lastUser'
    ])
  },
  components: {
    UserCard,
    UserSearch
  }
}
</script>

<style lang="sass">
.home
  padding: 50px 15px

@media (max-width: 767px)
  .home
    padding: 35px 15px

    &__logo
      max-width: 150px

@media (max-width: 480px)
  .home
    &__logo
      max-width: 130px

</style>
