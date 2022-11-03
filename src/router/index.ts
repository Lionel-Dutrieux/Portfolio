import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const routes = [
	{ path: "/:pathMatch(.*)*", name: "NotFound", component: NotFoundView },
	{ path: "/", name: "home", component: HomeView },
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
