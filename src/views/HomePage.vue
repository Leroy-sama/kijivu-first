<template>
	<main>
		<section class="hero">
			<div class="hero__wrapper">
				<div class="hero__text">
					<h1 class="hero__head">We are Kijivu Afrika</h1>
					<p class="hero__desc">
						KIJIVU is a Kenyan Community Based Organization, on a
						mission to educate, inspire and engage youth by
						addressing critical social issues, fostering community
						empowerment, and promoting creative expression.
					</p>
					<div class="hero__cta-box">
						<RouterLink to="/about" class="hero__cta"
							>Get Involved</RouterLink
						>
					</div>
				</div>
				<div class="hero__img">
					<img src="../assets/img/hero__img.jpg" alt="" />
				</div>
			</div>
		</section>
		<section class="news">
			<div class="news__wrapper">
				<h1 class="news__head">Hot off the press</h1>
				<div class="updates">
					<span class="updates__head">Latest Updates</span>
					<div class="updates__wrapper">
						<BlogItem
							v-for="update in limitedEvents"
							:key="update.id"
							:image="update.image"
							:title="update.title"
							:description="update.description"
						/>
					</div>
				</div>
				<div class="stories">
					<span class="stories__head">Latest Stories from Kenya</span>
					<div class="stories__wrapper">
						<BlogItem
							v-for="update in limitedEvents"
							:key="update.id"
							:image="update.image"
							:title="update.title"
							:description="update.description"
						/>
					</div>
				</div>
				<div class="activities">
					<span class="activities__head"
						>Latest Stories from Kenya</span
					>
					<div class="activities__wrapper">
						<BlogItem
							v-for="update in limitedEvents"
							:key="update.id"
							:image="update.image"
							:title="update.title"
							:description="update.description"
						/>
					</div>
				</div>
				<div class="signup">
					<h2 class="signup__head">Good News & Updates</h2>
					<p class="signup__text">
						Sign up and receive heart-filled updates from the ground
						in Kenya! 🙂
					</p>
					<form>
						<div class="form-group">
							<input type="text" placeholder="Name" />
							<input type="email" placeholder="Email" />
						</div>
						<button class="btn">Sign Up</button>
					</form>
				</div>
			</div>
		</section>
		<section class="socials">
			<div class="socials__wrapper">
				<div class="socials__head-block">
					<h1 class="socials__head">From our Social Media</h1>
					<div class="icons">
						<Instagram />
						<Twitter />
					</div>
				</div>
				<div class="images">
					<img
						src="https://i.pinimg.com/564x/b7/f0/2e/b7f02ec5639fc24276ff91b468e535ee.jpg"
						alt=""
					/>
					<img
						src="https://i.pinimg.com/564x/79/75/ef/7975ef011e7dd9823d81c765edd2cd31.jpg"
						alt=""
					/>
					<img
						src="https://i.pinimg.com/564x/bb/94/79/bb9479d5c340119a63fec857c0fa92de.jpg"
						alt=""
					/>
					<img
						src="https://i.pinimg.com/564x/31/6e/3a/316e3ad884c744ee0ed40038b860f755.jpg"
						alt=""
					/>
					<img
						src="https://i.pinimg.com/564x/53/22/68/53226869c68ca4cd62f36317b8e33442.jpg"
						alt=""
					/>
				</div>
				<a href="instagram.com">Go to Instagram</a>
			</div>
		</section>
		<article class="quote">
			<div class="quote__wrapper">
				<Quote />
				<p class="quote__text">
					“I believe every single human, deep inside, is powerful
					beyond measure. It’s that power, that light, that we are
					most afraid of. With Better Me it’s our mission to support
					youth to unleash that light, for when we shine bright, we
					inspire others to do the same.”
				</p>
				<span class="quote__owner">- Torsten Kremser, Cheerman</span>
			</div>
		</article>
		<section class="partners">
			<div class="partners__wrapp">
				<h1 class="partners__head">Our Partners & Sponsors</h1>
				<div class="icons">
					<UN />
					<Amazon />
					<Google />
				</div>
			</div>
		</section>
		<div class="float">
			<h1 class="float__head">Give today and change lives</h1>
			<RouterLink to="/">Donate Now</RouterLink>
		</div>
	</main>
</template>

<script setup>
	import { computed } from "vue";
	import { useEventStore } from "@/stores/events";

	import BlogItem from "@/components/items/BlogItem.vue";
	import Instagram from "@/assets/icons/Instagram.vue";
	import Twitter from "@/assets/icons/Twitter.vue";
	import Quote from "@/assets/icons/Quote.vue";
	import UN from "@/assets/icons/UN.vue";
	import Amazon from "@/assets/icons/Amazon.vue";
	import Google from "@/assets/icons/Google.vue";

	const eventStore = useEventStore();

	const limitedEvents = computed(() => eventStore.events.slice(0, 2));
</script>

<style scoped></style>
