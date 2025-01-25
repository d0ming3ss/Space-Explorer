import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import MissionsView from "../views/Missions.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/missions",
    name: "MissionsView",
    component: MissionsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
