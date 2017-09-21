const vm = {
  el: '#app',
  data() {
    return {
      message: 'Hello Vue!',
      show: false,
      items: [
        { text: 'A' },
        { text: 'B' },
        { text: 'C' },
      ],
      url: "www.google.com"
    }
  }
}

const app = new Vue(vm)