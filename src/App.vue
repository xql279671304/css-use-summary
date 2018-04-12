<template>
  <div id="app">
    <v-nav></v-nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import VNav from './components/nav'

  export default {
    name: 'app',
    components: {
      VNav
    }
  }
</script>
<style scoped>
  .container{
    margin-left: 140px;
  }
</style>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

