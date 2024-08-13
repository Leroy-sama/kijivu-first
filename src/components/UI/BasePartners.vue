<template>
	<section class="partners">
		<div class="partners__wrapper">
			<h1 class="partners__head">Our Partners & Sponsors</h1>
			<div class="partners__icons">
				<UN />
				<Amazon />
				<Google />
				<Bosch />
				<SAP />
				<Adidas />
			</div>
		</div>
	</section>
</template>

<script setup>
	import UN from "@/assets/icons/UN.vue";
	import Amazon from "@/assets/icons/Amazon.vue";
	import Google from "@/assets/icons/Google.vue";
	import Bosch from "@/assets/icons/Bosch.vue";
	import SAP from "@/assets/icons/SAP.vue";
	import Adidas from "@/assets/icons/Adidas.vue";
</script>

<style lang="css" scoped>
	.partners__wrapper {
		margin: 0 1.5rem;
		padding: 1.5rem;
	}

	.partners__head {
		color: var(--primaryColor);
		text-align: center;
		font-size: 1.8rem;
		padding: 1rem 0;
	}

	.partners__icons {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		gap: 1.5rem;
		justify-items: center;
	}

	@media (min-width: 700px) {
		.partners__head {
			font-size: 3rem;
		}
	}
</style>
