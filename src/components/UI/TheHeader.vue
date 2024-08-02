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
						<div class="child">
							<h3 class="child__head">About us</h3>
							<p class="child__text">
								Our vision, mission, values and culture
							</p>
						</div>
						<div class="child">
							<h3 class="child__head">Our Work</h3>
							<p class="child__text">
								Where we work and what we do
							</p>
						</div>
						<div class="child">
							<h3 class="child__head">Our Team</h3>
							<p class="child__text">
								Meet our board, team and office
							</p>
						</div>
						<div class="child">
							<h3 class="child__head">Get Involved</h3>
							<p class="child__text">
								Volunteer, intern or sponsor a child
							</p>
						</div>
						<div class="child">
							<h3 class="child__head">Our Story</h3>
							<p class="child__text">
								This is all it started back in 2000
							</p>
						</div>
						<div class="child">
							<h3 class="child__head">Annual Reports</h3>
							<p class="child__text">
								Get a transparent view into all our works
							</p>
						</div>
						<div class="child">
							<h3 class="child__head">Our Updates</h3>
							<p class="child__text">
								Enjoy some updates from Kenya
							</p>
						</div>
						<div class="child">
							<h3 class="child__head">Our Online Shop</h3>
							<p class="child__text">
								Better me swag just for you
							</p>
						</div>
					</div>
				</li>
				<li>
					<RouterLink
						:to="{ name: 'services' }"
						@click.native="closeNavMenu"
						>Our Pillars</RouterLink
					>
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

<style scoped>
	.children {
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

		.aboutlink {
			position: relative;
		}

		.children {
			position: absolute;
			left: -7rem;
			border: 1px solid var(--color02);
			width: 50vw;
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			padding: 1rem;
			background-color: var(--colorWhite);
			display: none;
		}

		.child {
			padding: 1rem;
		}
	}
</style>
