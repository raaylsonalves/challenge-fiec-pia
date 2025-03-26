import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import { VueQueryPlugin } from "@tanstack/vue-query";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      defaultTheme: "light", // Ou o seu tema padrão
      themes: {
        light: {
          colors: {
            background: "#e0e0e0",
          },
          variables: {
            "shadow-key-umbra-opacity": "0",
            "shadow-key-penumbra-opacity": "0",
            "shadow-key-ambient-opacity": "0",
          },
        },
      },
    },
  });
  app.vueApp.use(vuetify);
  app.vueApp.use(VueQueryPlugin);
});
