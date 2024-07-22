<template>
	<div class="service">
		<img :src="image" :alt="title" />
		<div class="service__info">
			<h3 class="info__head">{{ title }}</h3>
			<div class="link__box">
				<a href="#" class="info__link">Explore </a>
			</div>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps(["image", "title"]);
</script>
