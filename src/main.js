import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/styles/global.css"; // Globalne style

createApp(App).use(router).mount("#app");
