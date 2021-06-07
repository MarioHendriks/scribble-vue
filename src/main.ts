import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserCircle, faLock, faAt, faHeart, faSearch, faFeather } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "dotenv/config";
import i18n from "./i18n";
import vmodal from 'vue-js-modal'
import '@/assets/css/tailwind.css'
library.add(faUserCircle, faLock, faAt, faHeart, faSearch, faFeather);
Vue.use(vmodal, {
  dynamicDefaults: {
    height: 'auto'
  }
})
Vue.config.productionTip = false;

import VueTimeago from 'vue-timeago'


Vue.use(VueTimeago, {
  name: 'Timeago', // Component name, `Timeago` by default
  locale: 'en', // Default locale
})


Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
