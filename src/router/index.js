import { createRouter, createWebHistory } from "vue-router";
import cookie from "@/plugin/cookie";

import profilePage from "@/components/profile/profilePage.vue";
import HomePage from "@/pages/homePage.vue";
import LoginPage from "@/pages/loginPage.vue";
import MainPage from "@/pages/master/mainPage.vue";
import SoalPage from "@/components/soal/soalPage.vue";
import rulesPage from "@/components/soal/rulesPage.vue";

const routes = [
  {
    name: "index",
    path: "/",
    component: MainPage,
    beforeEnter: async (to, from, next) => {
      let userData = await cookie.getUserid();
      if (userData != null) {
        next({ name: "home" });
      } else {
        next({ name: "login" });
      }
    },
  },
  {
    name: "home",
    path: "/home",
    component: HomePage,
    beforeEnter: async (to, from, next) => {
      let userData = await cookie.getUserid();
      if (userData != null) {
        next();
      } else {
        next({ name: "index" });
      }
    },
  },
  {
    name: "Profile",
    path: "/profile",
    component: profilePage,
    beforeEnter: async (to, from, next) => {
      let userData = await cookie.getUserid();
      if (userData != null) {
        next();
      } else {
        next({ name: "index" });
      }
    },
  },
  {
    name: "login",
    path: "/login",
    component: LoginPage,
    beforeEnter: async (to, from, next) => {
      let userData = await cookie.getUserid();
      if (userData != null) {
        next({ name: "home" });
      } else {
        next();
      }
    },
  },
  {
    name: "soal",
    path: "/soal",
    component: SoalPage,
    beforeEnter: async (to, from, next) => {
      let userData = await cookie.getUserid();
      if (userData != null) {
        next();
      } else {
        next({ name: "index" });
      }
    },
  },
  {
    name: "peraturan",
    path: "/rules",
    component: rulesPage,
    beforeEnter: async (to, from, next) => {
      let userData = await cookie.getUserid();
      if (userData != null) {
        next();
      } else {
        next({ name: "index" });
      }
    },
  },
];
const router = Router();
export default router;
function Router() {
  const router = new createRouter({
    history: createWebHistory(),
    routes,
  });
  return router;
}
