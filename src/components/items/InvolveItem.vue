<template>
	<div class="item">
		<component :is="icon" />
		<h2 class="item__title">{{ title }}</h2>
		<p class="item__desc">{{ desc }}</p>
		<button>{{ buttonText }}</button>
	</div>
</template>

<script setup>
	import { computed } from "vue";

	const props = defineProps(["title", "desc", "icon"]);

	const buttonText = computed(() => {
		switch (props.title) {
			case "Become a Volunteer":
				return "Volunteer";
			case "Donate To Support":
				return "Donate";
			case "Become a Member":
				return "Join";
			default:
				return "Learn More";
		}
	});
</script>

<style scoped>
	button {
		padding: 0.5em 1.3em;
		background-color: var(--color02);
		color: var(--colorWhite);
		border: none;
	}
</style>
