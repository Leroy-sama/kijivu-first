<template>
	<div class="service" v-if="selectedService">
		<div class="service__wrapper">
			<div class="service__image">
				<img :src="image" alt="" />
			</div>
			<div class="service__content">
				<h2 class="service__title">{{ title }}</h2>
				<p class="service__description">{{ description }}</p>
			</div>
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
