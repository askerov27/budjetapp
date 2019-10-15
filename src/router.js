import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import MainPage from "./views/MainPage.vue";
import LoginRegistration from "./views/LoginRegistration";

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
      component: LoginRegistration
    },
    {
      path: "/login",
      name: "login",
      component: LoginRegistration
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (!firebase.auth().currentUser) {
//       next({
//         path: "/login",
//         query: {
//           redirect: to.fullPath
//         }
//       });
//     } else {
//       next();
//     }
//   } else if (to.matched.some(record => record.meta.requiresGuest)) {
//     if (firebase.auth().currentUser) {
//       next({
//         path: "/main",
//         query: {
//           redirect: to.fullPath
//         }
//       });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });
