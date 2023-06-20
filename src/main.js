//Vuetify 
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify/lib/framework.mjs'

// Instancia de Vuetify
const vuetify = createVuetify({
    components,
    directives
})

createApp(App).mount('#app')
