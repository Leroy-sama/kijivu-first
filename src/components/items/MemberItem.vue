<template>
	<div class="member">
		<img :src="memberImage" :alt="memberName" />
		<div class="member__deets">
			<p class="member__name">{{ memberName }}</p>
			<span class="member__title">{{ memberTitle }}</span>
			<a class="member__view" href="">View</a>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps(["memberImage", "memberName", "memberTitle"]);
</script>

<style lang="css" scoped>
	.member {
		padding: 2em;
		border: 1px solid var(--color02);
		border-radius: 10px;
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
		gap: 0.7rem;
	}

	.member__name {
		font-weight: 700;
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
	}
</style>
