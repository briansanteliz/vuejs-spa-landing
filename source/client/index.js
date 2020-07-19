import Vue from "vue";
import Init from "./Init.vue";
import VueRouter from "vue-router";
import axios from "axios";
import Vueaxios from "vue-axios";

//componentes
import Home from "./components/Home.vue";
import Somos from "./components/Somos.vue";
import Faq from "./components/FAQ.vue";
import Cursos from "./components/Cursos.vue";

//estilos
import "./assets/css/bootstrap.min.css";
import "./assets/css/custom.css";

Vue.use(Vueaxios, axios);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/somos",
      component: Somos,
    },
    {
      path: "/faq",
      component: Faq,
    },
    {
      path: "/ultimos",
      component: Cursos,
    },
  ],
});

new Vue({
  router,
  render: (h) => h(Init),
}).$mount("#app");
