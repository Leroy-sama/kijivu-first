<template>
	<header>
		<h1 class="header__head">News & Updates</h1>
	</header>
	<div class="wrapper">
		<div class="filter">
			<select name="filter" id="filter">
				<option value="">Filter by type</option>
				<option value="">News</option>
				<option value="">Events</option>
				<option value="">Blogs</option>
			</select>
		</div>
		<div class="blogs">
			<h1 class="blogs__head">Our Events</h1>
			<div class="blogsss">
				<BlogItem
					v-for="update in updatesStore.updates"
					:key="update.id"
					:image="update.image"
					:date="update.date"
					:title="update.title"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
	import BlogItem from "@/components/items/BlogItem.vue";
	import { useUpdatesStore } from "@/stores/updates";

	const updatesStore = useUpdatesStore();
</script>

<style lang="css" scoped>
	header {
		min-height: 50vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background: url(../assets/img/updates__page.jpg);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: top;
	}

	.header__head {
		font-size: 4rem;
		font-family: "Playfair Display", serif;
		color: var(--color02Darker);
	}

	.blogs {
		margin: 3rem 1.5rem;
	}

	.blogs__head {
		text-align: center;
		padding: 1rem 0;
		color: var(--color02Darker);
	}

	.blogsss {
		display: grid;

		gap: 1.5rem;
	}

	@media (min-width: 600px) {
		.blogsss {
			max-width: 1200px;
			margin-inline: auto;
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
</style>
