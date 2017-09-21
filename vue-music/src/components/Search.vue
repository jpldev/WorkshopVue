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
  import spotify from '../services/spotify'

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
        // Hardcodeamos el parámetro type con el valor "artist"
        spotify.search(this.query, 'artist')
          .then(res => {
            console.log(res)
            this.results = res.artists.items
          })
      }
    }
  }
</script>