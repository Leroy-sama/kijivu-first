<template>
	<main>
		<div class="wrapper">
			<section class="header">
				<div class="header__wrapper">
					<h1 class="header__head">This is the services page</h1>
				</div>
			</section>
			<section class="content">
				<div class="content__wrapper">
					<h1 class="content__head">Our Services</h1>
					<p class="intro__desc">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Rerum labore modi porro consequatur! Accusantium
						eius itaque, nihil suscipit iste iure alias earum
						laboriosam sit soluta tempore sunt dolores asperiores
						dolore.
					</p>
				</div>
				<div class="services">
					<div
						class="services__wrapper"
						style="
							display: grid;
							grid-template-columns: repeat(3, 1fr);
							gap: 2rem;
						"
					>
						<ServiceItem />
						<ServiceItem />
						<ServiceItem />
						<ServiceItem />
						<ServiceItem />
						<ServiceItem />
					</div>
				</div>
			</section>
		</div>
	</main>
</template>

<script setup>
	import ServiceItem from "@/components/items/ServiceItem.vue";
</script>

<style scoped>
	.header {
		min-height: 80vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.header__head {
		font-size: 4rem;
		font-family: "Playfair Display", serif;
		color: var(--color02Darker);
	}
</style>
