import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router'

// createApp(App).mount('#app')

//create App Vue
const app = createApp(App);

//gunakan "router" di Vue dengan plugin "use"
app.use(router);

app.mount('#app');
