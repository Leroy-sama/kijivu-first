<template>
	<div class="blog">
		<img :src="image" alt="" />
		<div class="blog__details">
			<div class="even">
				<Calender />
				<span class="event__date">{{ date }}</span>
			</div>
			<h3 class="event__title">{{ title }}</h3>
		</div>
	</div>
</template>

<script setup>
	import Calender from "@/assets/icons/Calender.vue";

	const props = defineProps(["id", "image", "title", "date"]);
</script>

<style lang="css" scoped>
	.blog {
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	}

	.blog img {
		inline-size: 100%;
		aspect-ratio: 16 / 9;
		object-fit: cover;
	}

	.blog__details {
		padding: 1em;
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
</style>
