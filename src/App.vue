<template>
  <div id="app">
    <router-link to="/" class="link">Home</router-link>
    <router-link to="/history" class="link">History</router-link>

    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
.container {
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 40px;
}

.link {
  color: #000000;
  font-size: 25px;
  margin: 0 10px;
}

.toasted {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.toasted.outline.success {
  border: 2px solid #2f2c2d;
  color: #2f2c2d;
}
.toasted.outline.error {
  border: 2px solid #f44336;
  color: #f44336;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .1s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>
