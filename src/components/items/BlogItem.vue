<template>
	<div class="blog">
		<img
			src="https://i.pinimg.com/564x/57/ae/ef/57aeeffbe549cdeca367fd9ba54ec7e6.jpg"
			alt=""
		/>
		<div class="blog__details">
			<div class="even">
				<Calender />
				<span class="event__date">June 22, 2024</span>
			</div>
			<h3 class="event__title">Lorem Ipsam</h3>
		</div>
	</div>
</template>

<script setup>
	import Calender from "@/assets/icons/Calender.vue";
</script>

<style lang="css" scoped>
	.blog {
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	}

	.blog img {
		inline-size: 100%;
		aspect-ratio: 4 / 3;
		object-fit: cover;
	}

	.blog__details {
		padding: 1em;
	}

	.even {
		display: flex;
		align-items: center;
		gap: 0.5em;
	}

	.event__date {
		font-size: 0.95rem;
		color: var(--titleColor);
	}

	.event__title {
		font-size: 1.5rem;
		padding: 0.5em 0;
		color: var(--color02);
	}
</style>
