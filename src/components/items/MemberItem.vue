<template>
	<div class="member">
		<img :src="memberImage" :alt="memberName" />
		<div class="member__deets">
			<p class="member__name">{{ memberName }}</p>
			<span class="member__title">{{ memberTitle }}</span>
			<RouterLink class="member__view" :to="memberDetailsLink"
				>View</RouterLink
			>
		</div>
	</div>
</template>

<script setup>
	import { computed } from "vue";
	import { useRoute } from "vue-router";

	const props = defineProps([
		"id",
		"memberImage",
		"memberName",
		"memberTitle",
	]);

	const memberDetailsLink = computed(() => {
		const route = useRoute();
		return route.path + "/" + props.id;
	});
</script>

<style lang="css" scoped>
	.member {
		padding: 1.5rem;
		border: 1px solid var(--color02);
		border-radius: 10px;
		display: grid;
		gap: 2rem;
	}

	.member img {
		max-width: 400px;
		aspect-ratio: 1 / 1;
		object-fit: cover;
		border-radius: 50%;
	}

	.member__deets {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.8rem;
	}

	.member__name {
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--color02Darker);
	}

	.member__title {
		font-size: 0.9rem;
	}

	.member__view {
		background: var(--color02);
		color: var(--colorWhite);
		padding: 0.5em 1.3em;
		border-radius: 0.5em;
		text-decoration: none;
		transition: all 0.2s ease-in;
	}

	.member__view:hover {
		background-color: var(--color02Darker);
	}
</style>
