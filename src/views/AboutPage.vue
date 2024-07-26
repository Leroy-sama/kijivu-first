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
						We harness the power of storytelling among the youth to
						spark conversations and inspire action on critical
						issues like climate change. Join us in creating a
						brighter future through nurturing impactful narratives
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
			<div class="mis-vis">
				<div class="mis">
					<h2 class="mis__head">Our Mision</h2>
					<p class="mis__text">
						To empower and engage a million youth to address
						critical social issues, foster community resilience, and
						promote creative expression.
					</p>
				</div>
				<div class="vis">
					<h2 class="vis__head">Our Vision</h2>
					<p class="vis__text">
						To stand as a leading community based organization
						championing understanding and igniting positive societal
						change art.
					</p>
				</div>
			</div>
			<div class="images">
				<div class="images__wrapper">
					<div class="image">
						<img src="../assets/img/DSC_0837.jpg" alt="" />
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
		background: url(../assets/img/boss-s-day-arrangement-with-paper-boats-copy-space.jpg);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: top;
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

	/* mis-vis */

	.mis-vis {
		/* margin: 0 1.5rem; */
		display: grid;
		gap: 1rem;
		background-color: var(--almostGrey);
	}

	.mis,
	.vis {
		padding: 1rem;
		box-shadow: 0 2px 8px rgb(0 0 0 / 0.3);
		background-color: var(--colorWhite);
	}

	.mis__head,
	.vis__head {
		color: var(--color02);
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

		.mis-vis {
			grid-template-columns: 1fr 1fr;
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
