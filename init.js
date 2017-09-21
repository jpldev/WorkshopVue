const vm = {
  el: '#app',
  data() {
    return {
      name: 'tHIS IS it'  //[props]
    }
  },
  methods: {
    //Desde los methods podemos acceder a las [props] usando This.
    //This es una representacion interna del mismo vm
    formatName(){
      this.name = this.name.split(' ').join('-').toLowerCase()
    }

  }
}

const app = new Vue(vm)