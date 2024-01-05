import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Components
import CardComponent from './components/card.vue'

const app = createApp(App)

app.component('card-component', CardComponent)

app.use(router)
app.use(store)

app.mount('#app')
