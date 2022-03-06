import { createApp } from 'vue'
import App from './App.vue'
import '../src/index.css'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import AOS from 'aos'
import 'aos/dist/aos.css'

new Vue({
    created () {
      AOS.init()
    },
    render: h => h(App),
  }).$mount('#app');

createApp(App).use(router).mount('#app')
