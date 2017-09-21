<template lang="html">
  <div>
    <input type="text" v-model="query">
    <button type="button" @click="search">Search</button>

    <ul>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Search',

  data () {
    return {
      query: '',
      results: []
    }
  },

  methods: {
    search () {
      console.log(this.query)
    }
  }
}
</script>