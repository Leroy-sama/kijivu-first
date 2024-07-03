<template>
	<main>
		<section class="header">
			<div class="header__wrapper">
				<h1 class="header__head">About Kijivu</h1>
			</div>
		</section>
		<div class="story">
			<div class="story__wrapper">
				<h1 class="story__head">Our Story</h1>
				<p class="story__text">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Fugit impedit sunt, molestiae consequuntur eligendi enim
					inventore assumenda natus iste, ipsa perferendis ad rem
					tempora veritatis id laboriosam, optio ratione blanditiis!
				</p>
				<p class="story__text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
					et voluptatibus excepturi consequuntur quisquam ipsam,
					maiores enim mollitia. Doloremque, autem expedita. Error
					quas debitis a, nam mollitia vel odit saepe!
				</p>
			</div>
		</div>
		<div class="images">
			<div class="images__wrapper">
				<div class="image">
					<img
						src="https://resource.logitech.com/w_660,h_371,c_lfill,q_auto,f_auto,dpr_1.0/content/dam/logitech/about/logi-employees-group-photo.jpg?v=1"
						alt=""
					/>
				</div>
				<div class="image">
					<img
						src="https://www.memaafrica.com/assets/img/slide/slide-2.jpg"
						alt=""
					/>
				</div>
				<div class="image">
					<img
						src="https://www.memaafrica.com/assets/img/slide/mkt.jpg"
						alt=""
					/>
				</div>
				<div class="image">
					<img
						src="https://i.pinimg.com/564x/64/10/04/6410044ef51dbd7322a0b69378fbaeb0.jpg"
						alt=""
					/>
				</div>
			</div>
		</div>
		<div class="team">
			<div class="team__wrapper">
				<h1 class="team__head">Meet The Team</h1>
				<swiper-container
					:slides-per-view="1"
					:space-between="spaceBetween"
					:centered-slides="true"
					:pagination="{
						hideOnClick: true,
					}"
					:breakpoints="{
						768: {
							slidesPerView: 3,
						},
					}"
				>
					<swiper-slide
						v-for="member in teamStore.team"
						:key="member.memberName"
					>
						<MemberItem
							:image="member.memberImage"
							:memberName="member.memberName"
							:memberTitle="member.memberTitle"
						/>
					</swiper-slide>
				</swiper-container>
			</div>
		</div>
	</main>
</template>

<script setup>
	import MemberItem from "@/components/items/MemberItem.vue";

	import { register } from "swiper/element/bundle";

	register();
	import { useTeamStore } from "@/stores/team.js";

	const teamStore = useTeamStore();

	const spaceBetween = 40;
</script>

<style scoped>
	.header {
		min-height: 50vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background: url(https://i.pinimg.com/564x/a8/c6/76/a8c6765bee466731268ecd94d7773fb8.jpg);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}

	.header__head {
		font-size: 4rem;
		font-family: "Playfair Display", serif;
		color: var(--color02Darker);
	}

	/* Story */

	.story__wrapper,
	.images__wrapper,
	.team__wrapper {
		margin: 0 2em;
		padding: 2em 0;
	}

	.story__head,
	.story__text,
	.team__head {
		padding: 0.5em 0;
		text-align: center;
	}

	/* Images */

	.images__wrapper {
		display: grid;
		gap: 2em;
	}

	/* Team */

	.team__wrapper {
		max-width: 1200px;
		margin: 0 auto;
	}

	.members {
		display: grid;
		gap: 2em;
	}

	.member {
		padding: 2em;
		border: 1px solid var(--color02);
	}

	.member img {
		max-width: 400px;
		aspect-ratio: 1 / 1;
		object-fit: cover;
		border-radius: 50%;
	}

	.member__deets {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.member__view {
		background: var(--color02);
		color: var(--colorWhite);
		padding: 0.5em 1.3em;
		border-radius: 0.5em;
		text-decoration: none;
	}

	@media (min-width: 50em) {
		/* Story */

		.story__wrapper,
		.images__wrapper,
		.images__wrapper {
			max-width: 1200px;
			margin: 0 auto;
		}

		/* Images */

		.images__wrapper {
			grid-template-columns: 1fr 1fr;
			gap: 2em;
		}

		/* Team*/

		.members {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
