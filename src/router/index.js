import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import OurTeam from "../views/OurTeam.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage
  },
  {
    path: "/our-team",
    name: "OurTeam",
    component: OurTeam
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;