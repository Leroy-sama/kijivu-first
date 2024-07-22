<template>
	<section class="hero overlay">
		<div class="hero__wrapper">
			<h1 class="hero__head">We are Kijivu Afrika</h1>
			<p class="hero__desc">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
				suscipit necessitatibus ullam nam rerum voluptatibus quas itaque
				sed, iehoej eue peu alj 9js 9jds dfnalj- jdiq laie pej hbn
				uecheiowoi weiu
			</p>
			<div class="hero__cta-box">
				<a href="#" class="hero__cta"
					><span>Learn More</span> <Arrow
				/></a>
			</div>
		</div>
	</section>
	<section class="about">
		<div class="about__wrapper">
			<div class="span__div">
				<span class="about__span">About</span>
			</div>
			<div class="about__info">
				<div class="about__image">
					<img
						src="https://i.pinimg.com/564x/06/7b/47/067b47cf291ad6d69a3fd60d5f153433.jpg"
						alt=""
					/>
				</div>
				<div class="about__text-side">
					<h1 class="text-side__head">Who are we?</h1>
					<p class="text-side__desc">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Unde dignissimos ut ea, sunt accusantium architecto
						eaque nemo aperiam? Soluta impedit a accusamus neque rem
						molestias sunt corporis alias aspernatur veritatis.
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Placeat consequatur eaque sequi vitae ullam, aut,
						facere quaerat saepe, est ipsam quod veniam quidem culpa
						minima eius provident dolor necessitatibus magni?
					</p>
					<div class="hero__cta-box">
						<a href="#" class="hero__cta">Learn More</a>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="involve">
		<div class="involve__wrapper">
			<div class="span__div">
				<span class="services__span">Get Involved</span>
			</div>
			<h1 class="involve__head">Lets Make A Difference Today</h1>
			<div class="involve__grid">
				<div
					class="diff"
					v-for="diff in differenceStore.diffs"
					:key="diff.title"
				>
					<InvolveItem
						:icon="diff.icon"
						:title="diff.title"
						:desc="diff.smallDesc"
					/>
				</div>
			</div>
		</div>
	</section>
	<section class="services">
		<div class="services__wrapper">
			<div class="span__div">
				<span class="services__span">Services</span>
			</div>
			<h1 class="services__head">What do we do?</h1>
			<div class="services__grid">
				<ServiceItem
					v-for="service in servicesStore.services"
					:key="service.id"
					:image="service.image"
					:title="service.title"
				/>
			</div>
			<div class="services__cta">
				<a href="#" class="blogs__link">Explore More</a>
			</div>
		</div>
	</section>
	<section class="events">
		<div class="events__wrapper">
			<div class="span__div">
				<span class="events__span">Blog</span>
			</div>
			<h1 class="events__head">Our Recents Events</h1>
			<div class="events__grid">
				<div class="event">
					<img
						src="https://i.pinimg.com/564x/57/ae/ef/57aeeffbe549cdeca367fd9ba54ec7e6.jpg"
						alt=""
					/>
					<div class="event__details">
						<div class="even">
							<Calender />
							<span class="event__date">June 22, 2024</span>
						</div>
						<h3 class="event__title">Lorem Ipsam</h3>
					</div>
				</div>
				<div class="event">
					<img
						src="https://i.pinimg.com/564x/8e/22/32/8e2232d7add27df43bbf55030ea9c967.jpg"
						alt=""
					/>
					<div class="event__details">
						<div class="even">
							<Calender />
							<span class="event__date">June 22, 2024</span>
						</div>
						<h3 class="event__title">Ipsam Lorem</h3>
					</div>
				</div>
				<div class="event">
					<img
						src="https://i.pinimg.com/564x/cf/95/5d/cf955d331b0f142e33d94374f577a63d.jpg"
						alt=""
					/>
					<div class="event__details">
						<div class="even">
							<Calender />
							<span class="event__date">June 22, 2024</span>
						</div>
						<h3 class="event__title">Dolor campeon</h3>
					</div>
				</div>
			</div>
			<div class="services__cta">
				<a href="#" class="blogs__link">Our Blogs</a>
			</div>
		</div>
	</section>
</template>

<script setup>
	import Calender from "@/assets/icons/Calender.vue";
	import Arrow from "@/assets/icons/Arrow.vue";
	import InvolveItem from "@/components/items/InvolveItem.vue";
	import ServiceItem from "@/components/items/ServiceItem.vue";

	import { useDifferenceStore } from "@/stores/differences";
	import { useServicesStore } from "@/stores/services";

	const differenceStore = useDifferenceStore();
	const servicesStore = useServicesStore();
</script>

<style scoped>
	.hero {
		background: url(../assets/img/two-young-people-sitting-outside-african-couple-enjoying-time-spending-with-each-other.jpg);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		min-height: 100vh;
		display: flex;
		align-items: center;
	}

	.overlay {
		border-image: linear-gradient(
				hsl(240 100% 20% / 0.3),
				hsl(0 100% 20% / 0.3)
			)
			fill 1;
	}

	.hero__wrapper {
		margin: 0 1em;
		color: #f4f4f4;
	}

	.hero__head,
	.text-side__head,
	.services__head,
	.events__head,
	.involve__head {
		font-size: 2.5rem;
		font-family: "Playfair Display", serif;
	}

	.hero__desc {
		padding: 1.5em 0;
	}

	.hero__cta-box {
		display: flex;
	}

	.hero__cta {
		display: flex;
		align-items: center;
		gap: 1em;
		color: var(--colorWhite);
		background-color: var(--color02);
		padding: 0.7em 1.4em;
		transition: all 0.2s ease;
	}

	.hero__cta:hover {
		background-color: var(--color02Darker);
	}

	/* ABOUT SECTION */

	.about__wrapper {
		padding: 2em 0;
		margin: 0 1em;
	}

	.span__div {
		display: flex;
		justify-content: center;
		padding: 1em 0;
	}

	.about__span,
	.services__span,
	.events__span {
		background-color: var(--colorSpanBg);
		text-transform: uppercase;
		padding: 0.5em;
		border-radius: 25px;
	}

	.text-side__head,
	.services__head,
	.events__head,
	.info__head,
	.involve__head {
		color: var(--color02Darker);
	}

	.text-side__desc {
		padding: 1em 0 2em;
	}

	/* INVOLVE SECTION */

	/* start */

	.involve__wrapper {
		margin: 0 1.5em;
	}

	.involve__head {
		text-align: center;
	}

	.involve__grid {
		display: grid;
		gap: 2em;
		padding: 2em 0;
	}

	.diff {
		border: 1px solid var(--color02);
		padding: 1.5em;
	}

	/* end */

	/* SERVICES SECTION */

	.services {
		background-color: var(--almostGrey);
	}

	.services__wrapper {
		padding: 2em 0;
		margin: 0 1em;
	}

	.services__head {
		text-align: center;
	}

	.services__grid {
		display: grid;
		gap: 2em;
		padding: 2em 0;
	}

	.service {
		background-color: var(--colorWhite);
	}

	.service__info {
		padding: 1.5em;
	}

	.service img {
		inline-size: 100%;
		aspect-ratio: 4 / 3;
		object-fit: cover;
	}

	.info__head {
		font-size: 1.5rem;
		padding-bottom: 1em;
	}

	.info__link {
		/* display: flex;
		align-items: center;
		gap: 0.5em; */
		color: var(--color02);
		transition: all 0.2s ease;
		position: relative;
	}

	.info__link::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background: currentColor;

		transform: scaleX(0.4);
		transform-origin: left;
		transition: transform 0.2s ease-in;
	}

	.info__link:hover::after {
		transform: scaleX(1);
	}

	.services__cta {
		display: flex;
		justify-content: center;
	}

	/* EVENTS SECTION */

	.events__wrapper {
		padding: 2em 0;
		margin: 0 1em;
	}

	.events__head {
		text-align: center;
	}

	.events__grid {
		display: grid;
		gap: 2em;
		padding: 2em 0;
	}

	.event {
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	}

	.event img {
		inline-size: 100%;
		aspect-ratio: 4 / 3;
		object-fit: cover;
	}

	.event__details {
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

	.blogs__link {
		/* background-color: white; */
		padding: 0.7em 1.4em;
		color: var(--color02);
		border: 1px solid var(--color02);
		transition: all 0.1s ease;
		position: relative;
		z-index: 1;
	}

	.blogs__link::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: var(--color02);

		z-index: -1;
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 200ms ease-in;
	}

	.blogs__link:hover {
		color: var(--colorWhite);
	}

	.blogs__link:hover::after {
		transform: scaleX(1);
	}

	@media (min-width: 50em) {
		/* Together styles */

		.hero__wrapper,
		.about__wrapper,
		.services__wrapper,
		.events__wrapper,
		.involve__wrapper {
			max-width: 1200px;
			margin: 0 auto;
		}

		.hero__head,
		.text-side__head,
		.services__head,
		.events__head,
		.involve__head {
			font-size: 3.5rem;
		}

		/* HERO SECTION */

		/* ABOUT SECTION */

		.span__div {
			padding: 2em 0;
		}

		.about__info {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 2em;
		}

		/* INVOLVE SECTION */

		/* start */

		.involve__grid {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 2em;
		}

		/* end */

		/* SERVICES SECTION */

		.services__head {
			text-align: center;
		}

		.services__grid {
			grid-template-columns: 1fr 1fr 1fr;
			padding: 1.5em 0;
		}

		/* EVENTS SECTION */

		.events__head {
			text-align: center;
		}

		.events__grid {
			grid-template-columns: 1fr 1fr 1fr;
			padding: 1.5em 0;
		}

		.event img {
			inline-size: 100%;
			aspect-ratio: 16 / 9;
			object-fit: cover;
		}
	}
</style>
