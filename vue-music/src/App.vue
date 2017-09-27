<template>
  <div id="app">
    
    <top></top>
    
    <search></search>

    <bottom></bottom>

  </div>
</template>

<script>
  import Search from './components/Search.vue'
  import Top from './components/layout/Top.vue'
  import Bottom from './components/layout/Bottom.vue'

  export default {
    name: 'app',

    components: { Search, Top, Bottom }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
