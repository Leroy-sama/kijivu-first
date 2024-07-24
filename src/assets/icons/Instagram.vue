<script setup>
	const props = defineProps({
		width: {
			type: String,
			default: "2em",
		},
		height: {
			type: String,
			default: "2em",
		},
		color: {
			type: String,
			default: "#fff",
		},
	});
</script>
<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		:width="width"
		:height="height"
		viewBox="0 0 24 24"
	>
		<g
			fill="none"
			:stroke="color"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="1.5"
			:color="color"
		>
			<path
				d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"
			/>
			<path
				d="M16.5 12a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m1.008-5.5h-.01"
			/>
		</g>
	</svg>
</template>

<style scoped>
	svg {
		cursor: pointer;
		transition: all 0.15s ease-in-out;
	}

	svg:hover path {
		stroke: var(--color01);
		color: var(--color01);
	}
</style>
