import { createApp } from 'vue'
import App from './App.vue'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

// Nếu dùng router
import router from './router.js'


createApp(App).use(router).mount('#app')
// createApp(App).mount('#app')
