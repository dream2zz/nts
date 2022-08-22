import { createSSRApp } from "vue";
import App from "./App.vue";
import  vant  from 'vant';
import 'vant/lib/index.css';
export function createApp() {
  const app = createSSRApp(App);
  app.use(vant);
  return {
    app,
  };
}
