<template>
	<main>
		<div class="wrapper">
			<section class="header">
				<div class="header__wrapper">
					<h1 class="header__head">What we do</h1>
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
					<div class="services__wrapper">
						<ServiceItem
							v-for="service in servicesStore.services"
							:id="service.id"
							:key="service.id"
							:image="service.image"
							:title="service.title"
						/>
					</div>
				</div>
			</section>
		</div>
	</main>
</template>

<script setup>
	import ServiceItem from "@/components/items/ServiceItem.vue";

	import { useServicesStore } from "@/stores/services";

	const servicesStore = useServicesStore();
</script>

<style scoped>
	.header {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 50vh;
		background-image: url(../assets/img/services__page.jpg);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}

	.header__head {
		font-size: 4rem;
		font-family: "Playfair Display", serif;
		color: var(--color02Darker);
		text-align: center;
	}

	.content {
		margin: 0 1.5rem 4rem;
	}

	.content__wrapper {
		padding: 2rem 0;
	}

	.content__head,
	.intro__desc {
		text-align: center;
	}

	.intro__desc {
		padding: 1rem 0;
	}

	.services__wrapper {
		display: grid;
		gap: 1.5rem;
	}

	@media screen and (min-width: 600px) {
		.content {
			max-width: 1200px;
			margin-inline: auto;
		}
		.services__wrapper {
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
			gap: 2rem;
		}
	}
</style>
