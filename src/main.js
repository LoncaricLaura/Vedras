import { createApp } from 'vue'
import App from './App.vue'
import '../src/index.css'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'



createApp(App).use(router).mount('#app')
