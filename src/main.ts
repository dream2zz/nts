import { createSSRApp } from "vue";
import App from "./App.vue";
import '@mdi/font/css/materialdesignicons.css'
import TDesign from 'tdesign-mobile-vue';


export function createApp() {
  const app = createSSRApp(App);
  app.use(TDesign);
  return {
    app,
  };
}
