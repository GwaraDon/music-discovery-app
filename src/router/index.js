import { createMemoryHistory, createRouter } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SearchView from "../views/SearchView.vue";
import LibraryView from "../views/LibraryView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/search",
    name: "search",
    component: SearchView,
  },
  {
    path: "/library",
    name: "library",
    component: LibraryView,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
