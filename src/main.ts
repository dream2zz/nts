import { createSSRApp } from "vue";
import App from "./App.vue";
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles/main.css'
import { createVuetify } from 'vuetify'

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
  },
}) 

export function createApp() {
  const app = createSSRApp(App);
  app.use(vuetify);
  return {
    app,
  };
}
