<template>
  <div class="user">
    <div>
      <img class="user__avatar" :src="user.avatar_url" alt="Avatar">
    </div>

    <div>
      <h2 class="user__text">Login: <span>{{user.login}}</span></h2>
      <h2 class="user__text">Name: <span>{{user.name ? user.name : 'Unknown'}}</span></h2>
      <h2 class="user__text">Profile: <a class="user__link" :href="user.html_url" target="_blank">{{user.html_url}}</a></h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="sass">
.user
  max-width: 700px
  border: 2px solid #000
  margin: 0 auto
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15)
  display: flex
  justify-content: flex-start
  align-items: center
  padding: 15px 25px
  text-align: left
  overflow: hidden

  &__avatar
    max-width: 150px
    border-radius: 50%
    margin-right: 30px
    box-shadow: 0 0 0 2px #2f2c2d

  &__text
    font-size: 25px
    margin: 7px 0

    span
      font-style: italic
      color: #0d5a72

  &__link
    color: #0d5a72
    font-style: italic
    max-width: 360px
    vertical-align: bottom
    overflow: hidden
    display: inline-block
    text-overflow: ellipsis
    transition: .3s

    &:hover
      transition: .3s
      color: #10708e
      text-decoration: none

@media (max-width: 767px)
  .user
    max-width: 500px
    flex-wrap: wrap
    justify-content: center
    text-align: center

    &__avatar
      margin-right: 0

    &__text
      font-size: 21px

@media (max-width: 480px)
  .user
    &__avatar
      max-width: 130px

    &__text
      font-size: 19px

    &__link
      max-width: 300px

@media (max-width: 374px)
  .user
    &__text
      font-size: 17px

    &__link
      max-width: 250px
</style>
