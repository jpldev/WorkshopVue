const vm = {
  el: '#app',
  data() {
    return {
      message: 'Hello Vue!',
      show: false
    }
  }
}

const app = new Vue(vm)