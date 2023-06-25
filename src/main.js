// import './assets/main.css'
import './assets/styles/main.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons'
library.add(faArrowDownLong)

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
