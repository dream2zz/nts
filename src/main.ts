import { createSSRApp } from "vue";
import App from "./App.vue";

import { createVuetify } from 'vuetify'
import 'vuetify/styles/main.css' // Global CSS has to be imported
const vuetify = createVuetify() 

export function createApp() {
  const app = createSSRApp(App);
  app.use(vuetify);
  return {
    app,
  };
}
