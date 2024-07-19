<template>
	<div class="member">
		<img :src="memberImage" :alt="memberName" />
		<div class="member__deets">
			<p class="member__name">{{ memberName }}</p>
			<span class="member__title">{{ memberTitle }}</span>
			<a class="member__view" href="">View</a>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps(["memberImage", "memberName", "memberTitle"]);
</script>
