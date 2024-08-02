<template>
	<main>
		<section class="header">
			<div class="header__wrapper">
				<h1 class="header__head">About Kijivu</h1>
				<p class="header__text">
					We unleash vulnerable Children & Youth with Education,
					Training and Life Skills to co-create a
				</p>
			</div>
		</section>
		<div class="wrapper">
			<div class="story">
				<div class="story__wrapper">
					<h1 class="story__head">Welcome to better me</h1>
					<p class="story__text">
						The following pages will immerse you into what we are
						doing and why we are doing it. Before continuing, you’re
						invited to take a deep breath in 🙂
					</p>
				</div>
			</div>
			<div class="mis-vis">
				<div class="mis">
					<h2 class="mis__head">Our Guiding Principle</h2>
					<p class="mis__text">
						A better world starts with a better me
					</p>
				</div>
				<div class="vis">
					<h2 class="vis__head">Why do we exist</h2>
					<p class="vis__text">To unleash more joy</p>
				</div>
			</div>
			<div class="awas">
				<div class="history">
					<div class="history__text">
						<h2 class="text__head">Our Vision</h2>
						<p class="text__desc">
							A joyful world of self-responsible, compassionate
							and curious human beings who play together to
							strengthen life in all forms.
						</p>
						<p class="text__desc2">
							We boldly believe in a new era, where peace on earth
							is possible and where we all live in harmony with
							nature and each other. We see a joyful world where
							nutritious food is abundant for everyone, where our
							children can swim in any river and open their mouths
							to drink clean water and where all our differences
							are celebrated. We see a Better World and we know
							that it starts with ourselves.
						</p>
					</div>
				</div>
				<div class="culture">
					<div class="culture__text">
						<h2 class="text__head">Our Mission</h2>
						<p class="text__desc">
							To unleash the inner power within 1 million Children
							& Youth with Education, Training and Life Skills to
							bring about positive change for themselves and their
							communities.
						</p>
						<p class="text__desc2">
							We see Kenya’s new generation as facilitators of
							positive change and it is our mission to support
							them in reaching their potential – to co-create a
							Better World for all.
						</p>
					</div>
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

	.header__wrapper {
		background-color: rgb(119, 0, 119);
	}

	.header__head {
		font-size: 4rem;
		font-family: "Playfair Display", serif;
		color: var(--color02Darker);
		text-align: center;
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
