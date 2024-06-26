<template>
	<header>
		<nav>
			<h1 class="logo">Kijivu Afrika</h1>
			<ul class="navlinks" :class="{ active: state.isActive }">
				<li>
					<RouterLink
						:to="{ name: 'home' }"
						@click.native="closeNavMenu"
						>Home</RouterLink
					>
				</li>
				<li>
					<RouterLink
						:to="{ name: 'about' }"
						@click.native="closeNavMenu"
						>About</RouterLink
					>
				</li>
				<li>
					<RouterLink
						:to="{ name: 'services' }"
						@click.native="closeNavMenu"
						>Services</RouterLink
					>
				</li>
				<li>
					<RouterLink
						:to="{ name: 'contact' }"
						@click.native="closeNavMenu"
						>Contact</RouterLink
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
	nav {
		display: flex;
		justify-content: space-between;
		padding: 1em;
	}

	.burger {
		/* position: relative; */
		cursor: pointer;
		z-index: 1;
	}

	.bar {
		display: block;
		width: 25px;
		height: 2px;
		background-color: black;
		margin: 5px 0;
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
		inset: 15% 5% 30% 5%;
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

	.navlinks.active {
		transform: translateY(0%);
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

	@media (min-width: 40em) {
		.navlinks {
			position: static;
			flex-direction: row;
			padding: 0;
			transform: translateX(0%);
		}

		.burger {
			display: none;
		}
	}
</style>
