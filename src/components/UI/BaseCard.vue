<template>
	<div class="card">
		<slot />
	</div>
</template>

<style lang="css" scoped>
	.card {
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		padding: 1.5rem;
		margin: 0 1.5rem;
	}

	@media (min-width: 48em) {
		.card {
			margin: 0 3rem;
		}
	}

	@media (min-width: 62em) {
		.card {
			margin: 0 4rem;
		}
	}
</style>
