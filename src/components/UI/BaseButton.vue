<template>
	<button v-if="!link" :class="mode">
		<slot />
	</button>
	<RouterLink v-else :to="to" :class="mode">
		<slot />
	</RouterLink>
</template>

<script setup>
	const props = defineProps({
		mode: {
			type: String,
			required: false,
			default: null,
		},
		link: {
			type: Boolean,
			required: false,
			default: false,
		},
		to: {
			type: String,
			required: false,
			default: "/",
		},
	});
</script>

<style lang="css" scoped>
	button,
	a {
		text-decoration: none;
		padding: 0.75rem 1.5rem;
		font: inherit;
		color: white;
		cursor: pointer;
		margin-right: 0.5rem;
		display: inline-block;
	}

	.flat {
		background-color: var(--primaryColor);
		color: var(--colorWhite);
		border: none;
	}

	.outline {
		background-color: var(--primaryColor);
		border: none;
		color: var(--colorWhite);
	}
</style>
