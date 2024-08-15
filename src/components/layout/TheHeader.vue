<template>
	<header>
		<nav>
			<h1>
				<RouterLink :to="{ name: 'home' }" class="logo"
					>Kijivu</RouterLink
				>
			</h1>
			<ul class="navlinks" :class="{ active: state.isActive }">
				<li class="aboutlink">
					<RouterLink
						:to="{ name: 'about' }"
						@click.native="closeNavMenu"
						>About Us</RouterLink
					>
					<div class="children">
						<RouterLink to="/about" class="child">
							<AboutUs />
							<h3 class="child__head">About us</h3>
							<p class="child__text">
								Our vision, mission, values and culture
							</p>
						</RouterLink>
						<RouterLink to="/our-work" class="child">
							<Pillars />
							<h3 class="child__head">Our Work</h3>
							<p class="child__text">
								Where we work and what we do
							</p>
						</RouterLink>
						<RouterLink to="/our-team" class="child">
							<Member />
							<h3 class="child__head">Our Team</h3>
							<p class="child__text">
								Meet our board, team and office
							</p>
						</RouterLink>
						<RouterLink to="get-involved" class="child">
							<Inspire />
							<h3 class="child__head">Get Involved</h3>
							<p class="child__text">
								Volunteer, intern or sponsor a child
							</p>
						</RouterLink>
						<RouterLink to="/founders-story" class="child">
							<Story />
							<h3 class="child__head">Our Story</h3>
							<p class="child__text">
								This is all it started back in 2000
							</p>
						</RouterLink>
						<RouterLink to="/annual-reports" class="child">
							<Report />
							<h3 class="child__head">Annual Reports</h3>
							<p class="child__text">
								Get a transparent view into all our works
							</p>
						</RouterLink>
						<RouterLink to="/" class="child">
							<Updates />
							<h3 class="child__head">Our Updates</h3>
							<p class="child__text">
								Enjoy some updates from Kenya
							</p>
						</RouterLink>
						<RouterLink to="/" class="child">
							<Shop />
							<h3 class="child__head">Our Online Shop</h3>
							<p class="child__text">
								Better me swag just for you
							</p>
						</RouterLink>
					</div>
				</li>
				<li class="pillarslink">
					<RouterLink to="#" @click.native="closeNavMenu"
						>Our Pillars</RouterLink
					>
					<div class="pillarss">
						<h2 class="pillarss__head">Our 3 Pillars</h2>
						<div class="pillars__wrap">
							<RouterLink to="/education" class="pillar">
								<img
									src="https://betterme.org/wp-content/uploads/2023/09/345435421_107564359004251_4760653564313001008_n2.jpg"
									alt=""
								/>
								<h3 class="pillar__head">Education</h3>
								<p class="pillar__desc">
									We provide access to primary and higher
									education
								</p>
							</RouterLink>
							<RouterLink to="/training" class="pillar">
								<img
									src="https://betterme.org/wp-content/uploads/2023/09/318335777_432290479118773_1485537484939576546_n22.jpg"
									alt=""
								/>
								<h3 class="pillar__head">Training</h3>
								<p class="pillar__desc">
									We provide practical and vocational skills
									training
								</p>
							</RouterLink>
							<RouterLink to="/life-skills" class="pillar">
								<img
									src="https://betterme.org/wp-content/uploads/2023/09/69a63371-7d5a-4d1d-9fe2-33215db9c65c-1-1080x7202-1.jpg"
									alt=""
								/>
								<h3 class="pillar__head">Life skills</h3>
								<p class="pillar__desc">
									We provide mental and spiritual life skill
									programs
								</p>
							</RouterLink>
						</div>
					</div>
				</li>
				<li>
					<RouterLink
						:to="{ name: 'updates' }"
						@click.native="closeNavMenu"
						>Updates</RouterLink
					>
				</li>
				<li>
					<RouterLink
						:to="{ name: 'contact' }"
						@click.native="closeNavMenu"
						>Contact</RouterLink
					>
				</li>
				<li>
					<RouterLink
						class="donate-btn"
						:to="{ name: 'contact' }"
						@click.native="closeNavMenu"
						>Donate</RouterLink
					>
				</li>
				<li>
					<RouterLink
						class="involve-btn"
						:to="{ name: 'contact' }"
						@click.native="closeNavMenu"
						>Get Involved</RouterLink
					>
				</li>
			</ul>
			<div
				class="burger"
				@click="toggleNavMenu"
				:class="{ active: state.isActive }"
			>
				<span class="bar"></span>
				<span class="bar"></span>
				<span class="bar"></span>
			</div>
		</nav>
	</header>
</template>

<script setup>
	import AboutUs from "@/assets/icons/AboutUs.vue";
	import Inspire from "@/assets/icons/Inspire.vue";
	import Member from "@/assets/icons/Member.vue";
	import Pillars from "@/assets/icons/Pillars.vue";
	import Report from "@/assets/icons/Report.vue";
	import Shop from "@/assets/icons/Shop.vue";
	import Story from "@/assets/icons/Story.vue";
	import Updates from "@/assets/icons/Updates.vue";
	import { reactive } from "vue";
	import { RouterLink } from "vue-router";

	const state = reactive({
		isActive: false,
	});

	const toggleNavMenu = () => {
		state.isActive = !state.isActive;
	};

	const closeNavMenu = () => {
		state.isActive = false;
	};
</script>

<style lang="css" scoped>
	.children,
	.pillarss {
		display: none;
	}

	nav {
		display: flex;
		justify-content: space-between;
		padding: 1em;
	}

	.logo {
		text-transform: uppercase;
		color: var(--titleColor);
	}

	.burger {
		/* position: relative; */
		cursor: pointer;
		z-index: 999999;
		transition: all 0.3s ease-in-out;
	}

	.bar {
		display: block;
		width: 25px;
		height: 2px;
		background-color: black;
		margin: 5px 0;
		transition: all 0.3s ease-in-out;
	}

	.navlinks li {
		list-style: none;
	}

	.navlinks li a {
		color: black;
	}

	.navlinks li a:hover {
		color: var(--color02);
	}

	.navlinks {
		position: fixed;
		inset: 10% 5% 30% 5%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1.5em;
		padding: min(30vh, 10rem) 2em;
		background-color: #fff;
		/* height: 250px; */
		transform: translateY(-150%);
		transition: transform 350ms ease-out;
		z-index: 9999;
	}

	.burger.active {
		transform: rotate(-180deg) translateX(8px) translateY(10px);
	}

	.burger.active .bar:nth-child(2) {
		opacity: 0;
	}

	.burger.active .bar:nth-child(1) {
		transform: rotate(45deg) translateY(10px);
	}

	.burger.active .bar:nth-child(3) {
		transform: rotate(-45deg) translateY(-10px);
	}

	.navlinks.active {
		transform: translateY(0%);
	}

	@media (min-width: 50em) {
		nav {
			justify-content: flex-start;
			gap: 4rem;
		}

		.navlinks {
			position: static;
			flex-direction: row;
			padding: 0;
			transform: translateX(0%);
		}

		.burger {
			display: none;
		}

		li .donate-btn {
			background-color: var(--primaryColor);
			padding: 0.6rem 1rem;
			color: var(--colorWhite);
		}

		li .involve-btn {
			background-color: var(--secondaryColor);
			padding: 0.6rem 1rem;
			color: var(--colorWhite);
		}

		.aboutlink,
		.pillarslink {
			position: relative;
		}

		.children {
			position: absolute;
			top: 2rem;
			border: 1px solid var(--color02);
			width: 800px;
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			padding: 1rem;
			background-color: var(--colorWhite);
			display: none;
		}

		.aboutlink:hover .children {
			display: grid;
		}

		.child {
			padding: 1rem;
			display: grid;
			gap: 0.7rem;
			justify-items: center;
			transition: all 0.3s ease-in-out;
		}

		.child:hover {
			background-color: #ffe190;
		}

		.child__text {
			text-align: center;
		}

		.pillarss {
			position: absolute;
			top: 3rem;
			background-color: var(--colorWhite);
			padding: 1.5rem;
			width: 700px;
			display: none;
		}

		.pillarslink:hover .pillarss {
			display: block;
		}

		.pillarss__head {
			text-align: center;
			padding: 1rem;
		}

		.pillars__wrap {
			display: flex;
			gap: 1.5rem;
		}
	}
</style>
