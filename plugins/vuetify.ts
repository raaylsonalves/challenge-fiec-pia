import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VueQueryPlugin } from '@tanstack/vue-query'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true
  })
  app.vueApp.use(vuetify)
  app.vueApp.use(VueQueryPlugin)
})