import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomePage,
		},
		{
			path: "/about",
			name: "about",
			component: () => import("../views/AboutPage.vue"),
		},
		{
			path: "/members/:id",
			name: "member-about",
			props: true,
			component: () => import("../views/MemberDetails.vue"),
		},
		{
			path: "/services",
			name: "services",
			component: () => import("../views/ServicesPage.vue"),
		},
		{
			path: "/contact",
			name: "contact",
			component: () => import("../views/ContactPage.vue"),
		},
	],
});

export default router;
