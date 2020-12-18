import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";
import Vant, { Lazyload } from "vant";
import "vant/lib/index.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
Vue.use(Vant);
Vue.config.productionTip = false;
Vue.use(Lazyload, {
  lazyComponent: true,
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
