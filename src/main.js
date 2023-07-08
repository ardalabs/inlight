import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import lazyPlugin from "vue3-lazy";

const app = createApp(App);
app.use(router);
app.use(lazyPlugin, {
  loading: '/common/loading.gif',
  // error: 'error.png'
})
app.mount("#app");
