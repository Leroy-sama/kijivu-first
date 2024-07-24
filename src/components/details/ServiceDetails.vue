<template>
	<div class="service" v-if="selectedService">
		<div class="wrapper">
			<RouterLink to="/services" class="first">Back</RouterLink>
			<div class="service__wrapper">
				<img :src="image" alt="" />

				<div class="service__content">
					<h2 class="service__title">{{ title }}</h2>
					<p class="service__description">{{ description }}</p>
					<div class="video-container">
						<iframe
							src="https://www.youtube.com/embed/VqHhp7ZL3is"
							title="GASLIGHTER (Kenyan Short Film)"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerpolicy="strict-origin-when-cross-origin"
							allowfullscreen
						></iframe>
					</div>
				</div>
			</div>
			<RouterLink class="service-btn" to="/contact"
				>Contact Us</RouterLink
			>
		</div>
	</div>
	<div v-else>
		<p>Not loading for some reason</p>
	</div>
</template>

<script setup>
	import { useServicesStore } from "@/stores/services";
	import { onMounted, ref, computed } from "vue";
	import { useRoute } from "vue-router";

	const servicesStore = useServicesStore();
	const route = useRoute();

	const id = route.params.id;

	const selectedService = ref(null);

	const image = computed(() => {
		return selectedService.value.image;
	});

	const title = computed(() => {
		return selectedService.value.title;
	});

	const description = computed(() => {
		return selectedService.value.description;
	});

	onMounted(() => {
		const services = servicesStore.services;
		selectedService.value = services.find((service) => service.id === id);

		if (!selectedService.value) {
			console.error("service not found with id:", id);
		} else {
			console.log("Selected Service", selectedService.value);
		}
	});
</script>

<style lang="css" scoped>
	.wrapper {
		margin: 2rem 1.5rem;
	}

	.service__wrapper {
		margin: 2rem 0;
	}

	.first {
		padding: 0.4rem 1rem;
		box-shadow: 0 2px 8px rgba(0 0 0 / 0.3);
		color: var(--color02);
	}

	.service__content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.service__title {
		color: var(--color02Darker);
	}

	.service-btn {
		background-color: var(--color02);
		color: var(--colorWhite);
		border: none;
		padding: 0.75rem 1.5rem;
		text-decoration: none;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	.service-btn:hover {
		background-color: var(--color02Darker);
	}

	@media (min-width: 600px) {
		.wrapper {
			max-width: 1200px;
			margin: 3rem auto;
		}

		.service__wrapper {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 2rem;
		}
	}
</style>
