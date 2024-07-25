<template>
	<div class="service">
		<img :src="image" :alt="title" />
		<div class="service__info">
			<h3 class="info__head">{{ title }}</h3>
			<div class="link__box">
				<RouterLink :to="serviceDetailsLink" class="info__link"
					>Explore
				</RouterLink>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { computed } from "vue";
	import { useRoute } from "vue-router";

	const props = defineProps(["id", "image", "title"]);

	const serviceDetailsLink = computed(() => {
		const route = useRoute();
		return route.path + "/" + props.id;
	});
</script>

<style lang="css" scoped>
	.service {
		box-shadow: 0 2px 8px rgb(0 0 0 / 0.4);
	}

	.service__info {
		padding: 1.5rem;
		display: grid;
		gap: 1rem;
	}

	.info__link {
		color: var(--colorWhite);
		background-color: var(--color02);
		padding: 0.4em 1em;
		transition: all 0.2s ease;
	}

	.service img {
		inline-size: 100%;
		aspect-ratio: 4 / 3;
		object-fit: cover;
	}
</style>
