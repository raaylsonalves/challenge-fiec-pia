import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  ssr: true,
  css: ["~/assets/css/main.css"],
  build: {
    transpile: ["vuetify"],
  },

  modules: ["@hebilicious/vue-query-nuxt"],

  vueQuery: {
    stateKey: "vue-query-nuxt",
    queryClientOptions: {
      defaultOptions: {
        queries: {
          staleTime: 5000,
        },
      },
    },
  },

  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    plugins: [vuetify({ autoImport: true })],
  },
  compatibilityDate: "2025-03-25",
});