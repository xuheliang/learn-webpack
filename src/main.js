import Vue from 'vue'
import App from './app.vue'
import './assets/styles/global.scss'
new Vue({
  el: "#app",
  components: {
    App
  },
  render: (creatElement) => creatElement(App)
})

class Person {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`Hello,my name is ${this.name}`)
  }
}