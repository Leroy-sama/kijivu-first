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
		path: "/home",
		redirect: { name: "home" },
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
		path: "/our-work",
		name: "our-work",
		component: () => import("../views/OurWork.vue"),
		meta: {
			title: "Our Work",
		},
	},
	{
		path: "/our-team",
		name: "our-team",
		component: () => import("../views/OurTeam.vue"),
		meta: {
			title: "Our Team",
		},
	},
	{
		path: "/get-involved",
		name: "get-involved",
		component: () => import("../views/GetInvolved.vue"),
		meta: {
			title: "Get Involved",
		},
	},
	{
		path: "/founders-story",
		name: "founders-story",
		component: () => import("../views/OurStory.vue"),
		meta: {
			title: "Our Story",
		},
	},
	{
		path: "/annual-reports",
		name: "annual-reports",
		component: () => import("../views/AnnualReports.vue"),
		meta: {
			title: "Annual Reports",
		},
	},
	{
		path: "/education",
		name: "education",
		component: () => import("../components/pillars/EducationPillar.vue"),
		meta: {
			title: "Education",
		},
	},
	{
		path: "/training",
		name: "training",
		component: () => import("../components/pillars/TrainingPillar.vue"),
		meta: {
			title: "Training",
		},
	},
	{
		path: "/life-skills",
		name: "life-skills",
		component: () => import("../components/pillars/TrainingPillar.vue"),
		meta: {
			title: "Life Skills",
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
		path: "/updates",
		name: "updates",
		props: true,
		component: () => import("../views/UpdatesPage.vue"),
		meta: {
			title: "Updates",
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
	{
		path: "/:catchAll(.*)",
		component: () => import("../views/NotFound.vue"),
		meta: {
			title: "Not Found",
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
