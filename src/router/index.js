import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/handpick",
      meta: { keepAlive: true },
    },
    {
      path: "/handpick",
      component: () => import("../components/handpick/handpick.vue"),
      meta: { keepAlive: true },
    },
    {
      path: "/index",
      name: "index",
      component: () => import("../components/books-index/index.vue"),
      meta: { keepAlive: true },
    },
    {
      path: "/search",
      name: "search",
      component: () => import("../components/search/search.vue"),
      meta: { keepAlive: true },
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../components/login/login.vue"),
      meta: { keepAlive: true },
    },
    {
      path: "/reg",
      name: "Reg",
      component: () => import("../components/Reg/Reg.vue"),
      meta: { keepAlive: true },
    },
    {
      path: "/details",
      name: "details",
      component: () => import("../components/details/details.vue"),
      meta: { keepAlive: true },
    },
    {
      path: "/classify",
      name: "classify",
      component: () => import("../components/classify/classify.vue"),
      meta: { keepAlive: true },
    },
    {
      path: "/catalog",
      name: "catalog",
      component: () => import("../components/catalog/catalog.vue"),
      meta: { keepAlive: true },
    },
    {
      path: "/read",
      name: "read",
      component: () => import("../components/read/read.vue"),
      meta: { keepAlive: true },
    },
    {
      path: "/mine",
      name: "mine",
      component: () => import("../components/mine/mine.vue"),
      meta: { keepAlive: true, needLogin: true },
    },
  ],
  linkActiveClass: "active",
});
