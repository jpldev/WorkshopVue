Vue.component('person-item', {
  props: {
    person: { Type: Object }
  },

  template: `<li>
              {{ person.name }}
             </li>`
})

const vm = {
  el: '#app',
  data() {
    return {
      persons: [
      	{ name: 'Ignacio' },
        { name: 'Cristian '},
        { name: 'Nicolas '}
      ]
    }
  }
}

const app = new Vue(vm)