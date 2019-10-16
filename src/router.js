import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import MainPage from "./views/MainPage.vue";
import Login from "./views/Login";
import Registration from "./views/Registration";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/main",
      name: "main",
      component: MainPage
    },
    {
      path: "/registration",
      name: "registration",
      component: Registration
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});
