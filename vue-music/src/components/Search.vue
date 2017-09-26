<template lang="html">
  <div> <!-- ⚠️ Este div es importante: todos los componentes deben tener un único elemento principal -->

    <a href="#" @click.prevent="reset">x</a>
    <input type="text" v-model="query" @keyup.enter="search" placeholder="🔎  Search here...">
    <button type="button" @click="search">Search</button>
    <small>{{ found }}</small>

    <ul>
      <li v-for="r in results">
        <div class="result">
          <p>{{ r.name }}</p>

          <!-- ⚠️  En este caso agrego también un v-if para prevenir errores ya que la propiedad images puede venir vacía -->
          <img v-if="r.images.length" :src="r.images[0].url" :alt="r.name">
          <p v-else>🚫 🌅</p>
        </div>
      </li>
    </ul>

    <h3 v-if="results.length === 0">
      No hay resultados
    </h3>
    



  </div>
</template>


<script>
  
  // ************* Init Spotify.js ***************************
  const spotifyService = {
    // Esta es la url base de la API
    baseUrl: 'https://platzi-music-api.now.sh'
  }
  
  spotifyService.search = function (query, type) {
    // Usando template strings de ES2015 armamos la url del endpoint con
    // el formato esperado por la API.
    const url = `${this.baseUrl}/search?q=${query}&type=${type}`
  
    // Retornamos la llamada de fetch (recuerden que devuelve una Promise).
    // Fetch recibe como primer parametro la url y luego un objeto
    // con configuracion donde pasamos el tipo de metodo HTTP
    return fetch(url, { method: 'GET' })
      .then(res => {
        // En el caso de que hay un error disparamos una excepción
        // para luego manejarla en nuestro componente
        if (res.status !== 200) {
          throw res.statusText
        }
  
        // Casteamos la respuesta y la devolvemos para
        // usarla luego en el componente
        return res.json()
      })
  }

  // ************* End Spotify.js ***************************

  export default {
    name: 'Search',

    data () {
      return {
        query: '',
        results: []
      }
    },

    created(){

      //Si la ruta es distinto de / entonces nos estan pasando una busqueda
      if(location.pathname !== '/'){
        var pathname = location.pathname;
        console.log(pathname.substring(1, pathname.length));
        this.query = pathname.substring(1, pathname.length);
        this.search();

      }

    },


    watch: {
      query(newValue, oldValue){
        // console.log(newValue, oldValue);
      }

    },

    computed: {
      found () {
        return this.results.length
          ? `${this.results.length} items` : ''
      }
    },

   methods: {
     //***Inicio Methods***
      search () {
        // Hardcodeamos el parámetro type con el valor "artist"
        spotifyService.search(this.query, 'artist')
          .then(res => {
            console.log(res)
            this.results = res.artists.items
          })
      },
       reset () {
        this.query = ''
        this.results = []
      },

    }
    //***Fin Methods***
  }
</script>

<style scoped>
  ul {
    display: flex;
    flex-wrap: wrap;
  }

  li {
    display: flex;
    justify-content: center;
    padding: 0.2em;
    border: 1px solid #42b983;
    margin: 0.2em;
    width: 200px;
    height: 200px;
  }

  .result {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 100px;
    height: 100px;
  }
</style>