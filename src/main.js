import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './routes/index'

import './styles/global.scss'
import './styles/tailwind.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
