<template>
	<div class="blog">
		<img :src="image" alt="" />
		<div class="blog__details">
			<h3 class="event__title">{{ title }}</h3>
			<p class="blog__desc">
				{{ smallDesc }}
			</p>
			<BaseButton mode="flat" link :to="home">Read More</BaseButton>
		</div>
	</div>
</template>

<script setup>
	import { computed } from "vue";
	import BaseButton from "../UI/BaseButton.vue";
	const props = defineProps(["id", "title", "image", "smallDesc"]);

	const home = computed(() => {
		return "/";
	});
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
		color: var(--thirdColor);
	}

	@media (min-width: 700px) {
		.blog {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 2rem;
		}
	}
</style>
