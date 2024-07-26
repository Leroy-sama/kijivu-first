<template>
	<header>
		<h1 class="header__head">The Updates page</h1>
	</header>
	<div class="wrapper">
		<div class="blogs">
			<h1 class="blogs__head">Our Updates</h1>
			<div class="blogsss">
				<BlogItem />
				<BlogItem />
				<BlogItem />
			</div>
		</div>
	</div>
</template>

<script setup>
	import BlogItem from "@/components/items/BlogItem.vue";
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

	h1 {
		font-size: 4rem;
		font-family: "Playfair Display", serif;
		color: var(--color02Darker);
	}

	.blogsss {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1.5rem;
	}
</style>
