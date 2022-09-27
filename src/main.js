import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3dMenu from './Vue3dMenu'

import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)

app.use(router)

app.component('vue-3d-menu', Vue3dMenu)

app.mount('#app')
