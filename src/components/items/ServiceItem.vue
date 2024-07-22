<template>
	<div class="service">
		<img :src="image" :alt="title" />
		<div class="service__info">
			<h3 class="info__head">{{ title }}</h3>
			<div class="link__box">
				<RouterLink :to="serviceDetailsLink" class="info__link"
					>Explore
				</RouterLink>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { computed } from "vue";
	import { useRoute } from "vue-router";

	const props = defineProps(["id", "image", "title"]);

	const serviceDetailsLink = computed(() => {
		const route = useRoute();
		return route.path + "/" + props.id;
	});
</script>
