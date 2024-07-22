import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomePage,
		meta: {
			title: "Home",
		},
	},
	{
		path: "/about",
		name: "about",
		component: () => import("../views/AboutPage.vue"),
		meta: {
			title: "About",
		},
	},
	{
		path: "/about/:id",
		name: "member-details",
		props: true,
		component: () => import("../components/details/MemberDetails.vue"),
		meta: {
			title: "Member",
		},
	},
	{
		path: "/services",
		name: "services",
		component: () => import("../views/ServicesPage.vue"),
		meta: {
			title: "Services",
		},
	},
	{
		path: "/services/:id",
		name: "service-details",
		props: true,
		component: () => import("@/components/details/ServiceDetails.vue"),
		meta: {
			title: "Service",
		},
	},
	{
		path: "/contact",
		name: "contact",
		component: () => import("../views/ContactPage.vue"),
		meta: {
			title: "Contact",
		},
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title} | Kijivu Afrika`;
	next();
});

export default router;
