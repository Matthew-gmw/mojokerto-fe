import { createRouter, createWebHistory } from "vue-router";

import mainPage from '../pages/master/mainPage';

import homePage from '../pages/homePage';

import profilePage from '../pages/profilePage';

const routes = [
    {
        name : 'Halaman Utama',
        path : '/',
        component : mainPage
    },
    {
        name : 'Home',
        path : '/',
        component : homePage
    },
    {
        name : 'Profile',
        path : '/',
        component : profilePage
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
