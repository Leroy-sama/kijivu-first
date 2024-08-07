<template>
	<main>
		<section class="notfound">
			<img
				src="https://i.pinimg.com/564x/c2/90/fb/c290fb2f43e3e4b7d4342d9b1fc9965f.jpg"
				alt=""
				class="notfound__img"
			/>
			<h2 class="notfound__head">Page not found</h2>
			<p class="notfound__text">
				This page could not be found. Why are you here?
			</p>
			<div class="btn">
				<RouterLink to="/">Back to homepage</RouterLink>
			</div>
		</section>
	</main>
</template>

<style lang="css" scoped>
	main {
		min-height: 70vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.notfound {
		margin: 2rem;
	}

	.notfound__head {
		font-size: 2.5rem;
		text-align: center;
	}

	.notfound__text {
		text-align: center;
		padding: 1rem 0;
	}

	.btn {
		display: flex;
		justify-content: center;
	}

	.btn a {
		cursor: pointer;
		border: 0;
		background: var(--color02);
		color: #fff;
		padding: 0.7em 1.5em;
		text-decoration: none;
		position: relative;
		z-index: 1;
	}

	.btn a::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);

		z-index: -1;
		transition: transform 300ms ease-in;
	}

	.btn a::after {
		transform: scaleX(0);
		transform-origin: right;
	}

	.btn a:hover::after {
		transform: scaleX(1);
		transform-origin: left;
	}

	@media (min-width: 700px) {
		.notfound__img {
			max-width: 400px;
		}
	}

	@media (min-width: 1000px) {
		.notfound__img {
			max-width: 400px;
		}
	}
</style>
