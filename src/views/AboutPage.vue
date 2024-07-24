<template>
	<main>
		<section class="header">
			<div class="header__wrapper">
				<h1 class="header__head">About Kijivu</h1>
			</div>
		</section>
		<div class="wrapper">
			<div class="story">
				<div class="story__wrapper">
					<h1 class="story__head">Our Story</h1>
					<p class="story__text">
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Fugit impedit sunt, molestiae consequuntur
						eligendi enim inventore assumenda natus iste, ipsa
						perferendis ad rem tempora veritatis id laboriosam,
						optio ratione blanditiis!
					</p>
					<p class="story__text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ex et voluptatibus excepturi consequuntur quisquam
						ipsam, maiores enim mollitia. Doloremque, autem
						expedita. Error quas debitis a, nam mollitia vel odit
						saepe!
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
					<div class="members">
						<div v-for="member in teamStore.team" :key="member.id">
							<MemberItem
								:id="member.id"
								:memberImage="member.memberImage"
								:memberName="member.memberName"
								:memberTitle="member.memberTitle"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script setup>
	import MemberItem from "@/components/items/MemberItem.vue";

	import { useTeamStore } from "@/stores/team.js";

	const teamStore = useTeamStore();
</script>

<style scoped>
	.header {
		min-height: 50vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background: url(../assets/img/about__page.jpg);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: bottom;
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

	.story__head {
		color: var(--color02);
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
		margin: 0 1.5rem;
	}

	.members {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2em;
	}

	@media (min-width: 50em) {
		/* Story */

		.wrapper {
			max-width: 1200px;
			margin: 3rem auto;
		}

		/* Images */

		.images__wrapper {
			grid-template-columns: 1fr 1fr;
			gap: 2em;
		}

		/* Team*/

		.team__wrapper {
			max-width: 1200px;
			margin: 0 auto;
		}

		.members {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
			gap: 2rem;
		}
	}
</style>
