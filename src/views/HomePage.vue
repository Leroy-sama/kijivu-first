<template>
	<main>
		<section class="hero overlay">
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
						<BaseButton to="/about" link class="hero__cta"
							>Get Involved</BaseButton
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
					<div class="updates__head">
						<span><Bullet /></span>
						<h2>Latest Updates</h2>
					</div>
					<div class="updates__wrapper">
						<swiper-container
							slides-per-view="1"
							speed="500"
							loop="true"
							css-mode="true"
							navigation="true"
							pagination="true"
						>
							<swiper-slide
								v-for="update in eventStore.events"
								:key="update.id"
							>
								<BlogItem
									:image="update.image"
									:title="update.title"
									:description="update.description"
								/>
							</swiper-slide>
						</swiper-container>
					</div>
				</div>
				<div class="stories">
					<div class="updates__head">
						<span><Bullet /></span>
						<h2>Latest Stories from Kenya</h2>
					</div>
					<div class="stories__wrapper">
						<swiper-container
							slides-per-view="1"
							speed="500"
							loop="true"
							css-mode="true"
							navigation="true"
							pagination="true"
						>
							<swiper-slide
								v-for="story in updatesStore.updates"
								:key="story.id"
							>
								<StoryItem
									:image="story.image"
									:title="story.title"
									:description="story.description"
								/>
							</swiper-slide>
						</swiper-container>
					</div>
				</div>
				<div class="activities">
					<div class="updates__head">
						<span><Bullet /></span>
						<h2>Latest Activity Reports</h2>
					</div>
					<div class="activities__wrapper">
						<swiper-container
							slides-per-view="1"
							speed="500"
							loop="true"
							css-mode="true"
							navigation="true"
							pagination="true"
						>
							<swiper-slide
								v-for="activity in differenceStore.diffs"
								:key="activity.id"
							>
								<ActivityItem
									:image="activity.image"
									:title="activity.title"
									:smallDesc="activity.smallDesc"
								/>
							</swiper-slide>
						</swiper-container>
					</div>
				</div>
				<div class="signup">
					<div class="signup__wrap">
						<h2 class="signup__head">Good News & Updates</h2>
						<p class="signup__text">
							Sign up and receive heart-filled updates from the
							ground in Kenya! 🙂
						</p>
						<form>
							<div class="form-group">
								<input type="text" placeholder="Name" />
								<input type="email" placeholder="Email" />
							</div>
							<BaseButton style="width: 100%" mode="flat"
								>Sign Up</BaseButton
							>
						</form>
					</div>
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
						src="https://i.pinimg.com/564x/8d/6c/90/8d6c90f6bc3b86208fc0563f5e79e28f.jpg"
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
				<BaseButton mode="flat" ink to="https://www.instagram.com/"
					>Go to Instagram</BaseButton
				>
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
				<p class="quote__owner">- Torsten Kremser, Cheerman</p>
			</div>
		</article>
		<div class="base">
			<BasePartners />
		</div>
		<BaseHang />
	</main>
</template>

<script setup>
	import { computed } from "vue";
	import { useEventStore } from "@/stores/events";
	import { useUpdatesStore } from "@/stores/updates";
	import { useActivityStore } from "@/stores/activity";
	import { useDifferenceStore } from "@/stores/differences";

	import { register } from "swiper/element/bundle";
	register();

	import BlogItem from "@/components/items/BlogItem.vue";
	import Instagram from "@/assets/icons/Instagram.vue";
	import Twitter from "@/assets/icons/Twitter.vue";
	import Quote from "@/assets/icons/Quote.vue";
	import UN from "@/assets/icons/UN.vue";
	import Amazon from "@/assets/icons/Amazon.vue";
	import Google from "@/assets/icons/Google.vue";
	import Bullet from "@/assets/icons/Bullet.vue";
	import StoryItem from "@/components/items/StoryItem.vue";
	import ActivityItem from "@/components/items/ActivityItem.vue";
	import BaseButton from "@/components/UI/BaseButton.vue";
	import BaseHang from "@/components/UI/BaseHang.vue";
	import BasePartners from "@/components/UI/BasePartners.vue";

	const eventStore = useEventStore();
	const updatesStore = useUpdatesStore();
	// const activityStore = useActivityStore();
	const differenceStore = useDifferenceStore();

	const limitedEvents = computed(() => eventStore.events.slice(0, 2));
</script>

<style scoped>
	/* HERO SECTION */

	.hero {
		min-height: 80vh;
		background: url(../assets/img/hero__img.jpg);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.overlay {
		border-image: linear-gradient(
				hsl(240 100% 20% / 0.3),
				hsl(0 100% 20% / 0.3)
			)
			fill 1;
	}

	.hero__text {
		margin: 0 1.5rem;
		text-align: center;
	}

	.hero__img {
		display: none;
	}

	.hero__head,
	.hero__desc {
		color: var(--colorWhite);
	}

	.hero__head {
		font-family: "Playfair Display", serif;
		font-size: 2.5rem;
	}

	.hero__desc {
		margin: 1.5rem 0;
	}

	.hero__cta {
		background-color: var(--color02);
		color: var(--colorWhite);
		padding: 0.5rem 1.6rem;
	}

	/* NEWS SECTION */

	.news {
		margin: 0 1rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	}

	.news__head {
		font-family: "Playfair Display", serif;
		font-size: 2.5rem;
		color: var(--thirdColor);
	}

	.updates__head {
		display: flex;
		align-items: center;
		/* justify-content: center; */
	}

	.updates__head h2 {
		font-size: 1.3rem;
		font-weight: 500;
		color: var(--primaryColor);
	}

	/* SIGNUP SECTION */

	.signup {
		background-color: var(--thirdColor);
	}

	.signup__wrap {
		padding: 1rem;
	}

	.signup__head {
		font-size: 1.5rem;
		color: var(--colorWhite);
		text-align: center;
	}

	.signup__text {
		text-align: center;
		padding: 1rem 0;
		color: var(--almostGrey);
	}

	form .form-group {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	form .form-group input {
		padding: 0.7rem 1rem;
		outline: none;
	}

	.btn {
		width: 100%;
		background-color: var(--color02);
		color: var(--colorWhite);
		padding: 0.5rem 1.6rem;
		border: none;
		cursor: pointer;
		margin-top: 1rem;
	}

	/* SOCIALS SECTION */

	.socials {
		background-color: var(--thirdColor);
	}

	.socials__wrapper {
		margin: 1.5rem;
		padding: 1.5rem 0;
	}

	.socials__head-block {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}

	.socials__head {
		font-family: "Playfair Display", serif;
		font-size: 1.8rem;
		color: var(--colorWhite);
	}

	.social__btn {
		background-color: var(--primaryColor);
		color: var(--colorWhite);
		padding: 0.5rem 1.6rem;
		border: none;
		cursor: pointer;
		margin-top: 2rem;
	}

	/* QUOTE SECTION */

	.quote {
		background-color: var(--primaryColor);
		padding: 1.5rem;
	}

	.quote__wrapper {
		background-color: var(--colorWhite);
		padding: 1.5rem;
	}

	.quote__text,
	.quote__owner {
		text-align: center;
	}

	.quote__text {
		font-style: italic;
	}

	.quote__owner {
		font-size: 0.9rem;
	}

	/* PARTNERS SECTION */

	.float {
		box-shadow: 0 2px 8px rgb(0 0 0 / 0.3);
	}

	.swiper-button-prev svg,
	.swiper-button-next svg {
		background-color: #333; /* Change the background color */
		color: white; /* Change the arrow color */
		width: 40px; /* Adjust the width */
		height: 40px; /* Adjust the height */
		border-radius: 50%; /* Make them circular */
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3); /* Add a shadow */
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media (min-width: 700px) {
		/* HERO SECtion */

		.hero {
			background: none;
		}

		.overlay {
			border-image: none;
		}

		.hero__wrapper {
			background-color: var(--thirdColor);
		}

		.hero__text {
			text-align: left;
		}

		.hero__head,
		.hero__desc {
			color: var(--colorWhite);
		}

		.hero__img {
			display: block;
		}

		.hero__img img {
			max-width: 1000px;
			aspect-ratio: 1 / 1;
			object-fit: cover;
		}

		.hero__wrapper {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		/* NEWS SECTION */

		.news {
			max-width: 1200px;
			margin-inline: auto;
		}

		.news__wrapper {
			padding: 2rem;
		}

		/* .updates,
		.stories,
		.activities {
			padding: 1rem;
			border: 2px solid red;
		} */

		.images {
			display: grid;
			grid-template-columns: repeat(5, 1fr);
			gap: 1rem;
		}

		.signup {
			/* max-width: 500px; */
			display: flex;
			justify-content: center;
		}

		.signup__wrap {
			max-width: 600px;
		}

		form .form-group {
			width: 100%;
			flex-direction: row;
		}
	}

	@media (min-width: 1000px) {
	}
</style>
