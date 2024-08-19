<template>
	<div class="help">
		<h1 class="help__head">Keen to Help?</h1>
		<BaseButton mode="flat">Get Involved</BaseButton>
	</div>
</template>

<script setup>
	import BaseButton from "./BaseButton.vue";
</script>

<style lang="css" scoped>
	.help {
		background-color: var(--colorWhite);
		padding: 1.5rem;
		margin: 0 1.5rem;
		box-shadow: 0 2px 8px rgba(0 0 0 / 0.26);
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.help__head {
		color: var(--thirdColor);
	}

	@media (min-width: 700px) {
		.help {
			margin: 0 3rem;
		}
	}
</style>
