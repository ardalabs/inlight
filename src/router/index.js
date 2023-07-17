import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import OurTeam from "../views/OurTeam.vue";
import Collections from "../views/Collections.vue";
import ContactUs from "../views/ContactUs.vue";
import Projects from "../views/Projects.vue";
import DetailProduct from "../views/DetailProduct.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  // {
  //   path: "/our-team",
  //   name: "OurTeam",
  //   component: OurTeam,
  // },
  {
    path: "/collections",
    name: "Collections",
    component: Collections,
  },
  {
    path: "/collection/:id",
    name: "DetailProduct",
    component: DetailProduct,
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: ContactUs,
  },
  // {
  //   path: "/projects",
  //   name: "Projects",
  //   component: Projects,
  // },
];

const router = createRouter({
  mode: 'hash',
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0 };
  },
});

export default router;
