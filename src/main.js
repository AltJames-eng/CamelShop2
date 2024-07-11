

import { createApp } from 'vue'
import App from './App.vue'

import router from './routes'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import store from '@/store' //add this

const vuetify = createVuetify({
  components,
  directives,
})



createApp(App).use(router).use(vuetify).use(store).mount('#app')
