import { createApp } from "vue";
import App from "./App.vue";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHome, faUser, faCog, faBars } from '@fortawesome/free-solid-svg-icons'
library.add(faHome, faUser, faCog, faBars);
createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');

// import css
import "./assets/css/app.css";

// import router
import router from "./router";


const app = createApp(App);
app.use(router);
app.mount("#app");
