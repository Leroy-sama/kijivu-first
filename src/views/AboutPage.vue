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
			<div class="awas">
				<div class="history">
					<div class="history__text">
						<h2 class="text__head">Our History</h2>
						<p class="text__desc">
							Founded in 1981 in Lausanne, Switzerland, and
							quickly expanding to Silicon Valley, Logitech
							started connecting people through innovative
							computer peripherals and many industry firsts,
							including the infrared cordless mouse, the
							thumb-operated trackball, the laser mouse, and more.
							We honor bold innovation and our founders, Pierluigi
							Zappacosta, Giacomo Marini and Daniel Borel,
							Chairman Emeritus.
						</p>
					</div>
					<img src="../assets/img/our-history.webp" alt="" />
				</div>
				<div class="culture">
					<div class="culture__text">
						<h2 class="text__head">Our Culture</h2>
						<p class="text__desc">
							Everyone at Kijivu works together like a big family,
							helping each other and sharing ideas. We believe in
							being responsible, showing compassion, and always
							staying curious. Just like how we make our fun and
							meaningful projects, we also make sure to have fun
							and learn new things every day.
						</p>
					</div>
					<img src="../assets/img/our-culture.webp" alt="" />
				</div>
			</div>
			<div class="values">
				<h1 class="values__head">Our 3 Core values</h1>
				<div class="values__wrapper">
					<div class="value">
						<h3 class="value__head">
							We take responsibilty for ourselves
						</h3>
						<p class="value__desc">
							At Kijivu, we believe that being responsible means
							taking care of our actions and making good choices.
							Just like how superheroes take care of their city,
							we want everyone to be a hero in their own life and
							help their community.
						</p>
					</div>
					<div class="value">
						<h3 class="value__head">We show compassion</h3>
						<p class="value__desc">
							Compassion is about being kind and understanding how
							others feel. At Kijivu, we create stories and videos
							that show how important it is to be nice and help
							each other. It's like sharing your toys or giving a
							hug when someone is sad—it makes the world a better
							place.
						</p>
					</div>
					<div class="value">
						<h3 class="value__head">We Nurture curiosity</h3>
						<p class="value__desc">
							Curiosity is like being a little detective who loves
							to learn new things. We make fun videos and stories
							that make you want to ask questions and explore.
							It's like going on a treasure hunt where every clue
							leads to something amazing to learn.
						</p>
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
	import Create from "@/assets/icons/Create.vue";

	import { useTeamStore } from "@/stores/team.js";
	import Educate from "@/assets/icons/Educate.vue";
	import Earn from "@/assets/icons/Earn.vue";
	import Inspire from "@/assets/icons/Inspire.vue";

	const teamStore = useTeamStore();

	function deeets(name, age) {
		console.log(`I am ${name} and I\'m ${age} years old`);
	}
	deeets("Leroy", 8);
</script>
4

<style lang="css" scoped>
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
		text-align: center;
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
		display: grid;
		gap: 2rem;
		background-color: var(--almostGrey);
		margin: 1.5rem;
	}

	.mis,
	.vis {
		padding: 1.5rem;
		box-shadow: 0 2px 8px rgb(0 0 0 / 0.3);
		background-color: var(--colorWhite);
		transition: all 0.3s ease-in-out;
	}

	.mis__head,
	.vis__head {
		color: var(--color02);
		transition: all 0.3s ease-in-out;
		text-align: center;
	}

	.mis:hover,
	.vis:hover {
		background-color: var(--color02);
		color: var(--colorWhite);
	}

	.mis:hover .mis__head,
	.vis:hover .vis__head {
		color: var(--colorWhite);
	}

	/* History and Culture */

	.awas {
		margin: 0 1.5rem;
	}

	/* Images */

	.images__wrapper {
		display: grid;
		gap: 2em;
	}

	.history,
	.culture {
		display: grid;
		gap: 2rem;
	}

	.text__head {
		text-transform: uppercase;
		color: var(--color02);
		padding: 1rem 0;
		text-align: center;
	}

	.text__desc {
		text-align: center;
	}

	/* Goals */

	.goals {
		display: grid;
		gap: 1.5rem;
	}

	.thegoal {
		background-color: grey;
	}

	/* values */

	.values {
		margin: 1.5rem;
	}

	.values__head {
		text-align: center;
		padding: 1rem 0;
	}

	.value__head {
		color: var(--color02);
	}

	.values__wrapper {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1.5rem;
	}

	.value {
		padding: 1.5rem;
		border: 1px solid var(--colorWhite);
	}

	.value:hover {
		border: 1px solid var(--color02);
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

		/* History and Culture */

		.history {
			display: flex;
			align-items: center;
			/* gap: 2rem; */
		}

		.culture {
			display: flex;
			flex-direction: row-reverse;
			align-items: center;
			/* gap: 2rem; */
		}

		.history img,
		.culture img {
			max-width: 575px;
			aspect-ratio: 1 / 1;
			object-fit: cover;
		}

		.history__text,
		.culture__text {
			padding: 4rem;
		}

		/* Goals */

		.goals {
			grid-template-columns: repeat(4, 1fr);
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
