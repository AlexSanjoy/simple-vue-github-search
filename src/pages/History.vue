<template>
	<div class="history">
    <div v-if="Object.keys(users).length">
      <UserCard v-for="user in users" :user="user" />
    </div>
    <div v-else>
      <h2>The history is empty</h2>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserCard from '../components/UserCard'

export default {
  name: "History",
  computed: {
    ...mapGetters([
      'users'
    ])
  },
  components: {
    UserCard
  }
}
</script>

<style lang="sass">
.history
  padding: 50px 15px

  .user
    margin-bottom: 10px
    box-shadow: none
    padding: 8px 15px
    max-width: 500px

    &__avatar
      max-width: 80px

    &__text
      font-size: 16px

    &__link
      max-width: 280px

@media (max-width: 767px)
  .history
    padding: 35px 15px

    .user
      justify-content: flex-start
      text-align: left
      max-width: 350px

      &__avatar
        max-width: 60px
        margin-right: 20px

      &__text
        font-size: 14px

      &__link
        max-width: 170px

@media (max-width: 374px)
  .history
    .user
      padding: 5px 10px

      &__avatar
        max-width: 50px
        margin-right: 10px

      &__text
        font-size: 13px

      &__link
        max-width: 150px

</style>
