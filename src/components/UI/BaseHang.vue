<script setup>
	import BaseButton from "./BaseButton.vue";
</script>

<template>
	<div class="hanging">
		<h1 class="yellow__head">Give Today</h1>
		<p class="purple__head">and change lives</p>
		<BaseButton mode="flat">Donate Now</BaseButton>
	</div>
</template>

<style lang="css" scoped>
	.hanging {
		box-shadow: 0 2px 8px rgba(0 0 0 / 0.26);
		position: relative;
		top: 2rem;
		background-color: white;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 1.5rem;
		/* max-width: 300px; */
	}

	.yellow__head {
		color: var(--primaryColor);
	}

	.purple__head {
		font-weight: 700;
		color: var(--thirdColor);
	}

	@media (min-width: 700px) {
		.hanging {
			margin: 0 4rem;
		}

		.yellow__head {
			font-size: 3rem;
		}

		.purple__head {
			font-size: 1.5rem;
		}
	}
</style>
