<template>
	<div class="blog">
		<img :src="image" alt="" />
		<div class="blog__details">
			<h3 class="event__title">{{ title }}</h3>
			<p class="blog__desc">
				{{ description }}
			</p>
			<RouterLink to="/">Read More</RouterLink>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps(["id", "title", "image", "description"]);
</script>

<style lang="css" scoped>
	.blog {
		padding: 1em;
	}

	.blog img {
		inline-size: 100%;
		aspect-ratio: 16 / 9;
		object-fit: cover;
	}

	.even {
		display: flex;
		align-items: center;
		gap: 0.5em;
	}

	.event__date {
		font-size: 0.95rem;
		color: var(--titleColor);
	}

	.event__title {
		font-size: 1.5rem;
		padding: 0.5em 0;
		color: var(--color02);
	}

	@media (min-width: 700px) {
		.blog {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 2rem;
		}
	}
</style>
