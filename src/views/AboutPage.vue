<template>
	<main>
		<section class="header">
			<div class="header__wrapper">
				<p class="header__text">
					We <i>unleash</i> vulnerable
					<strong>Children & Youth</strong> with
					<span class="yellow"
						>Education, Training and Life Skills</span
					>
					to co-create a <span class="big">Better World</span>
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
					<Compass />
					<h2 class="mis__head">Our Guiding Principle</h2>
					<p class="mis__text">
						A better world starts with a better me
					</p>
				</div>
				<div class="vis">
					<Question />
					<h2 class="vis__head">Why we exist</h2>
					<p class="vis__text">To unleash more joy</p>
				</div>
			</div>
			<div class="awas">
				<div class="history">
					<div class="history__text">
						<GlobeAfrica />
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
						<Mission />
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
			<div class="culture2">
				<Culture />
				<h1 class="culture__head">Our Culture</h1>
				<p class="culture__desc">
					Our culture is to lead and inspire by example. We live our
					values. “By their works you shall know them.” This is no
					easy task. We acknowledge that being a Better Me is constant
					work in progress and we support each other to grow.
				</p>
			</div>
			<div class="home">
				<Home />
				<h1 class="home__head">Welcome Home</h1>
				<p class="home__text">-Your better me family</p>
			</div>
		</div>
	</main>
</template>

<script setup>
	import Compass from "@/assets/icons/Compass.vue";
	import Culture from "@/assets/icons/Culture.vue";
	import GlobeAfrica from "@/assets/icons/GlobeAfrica.vue";
	import Home from "@/assets/icons/Home.vue";
	import Mission from "@/assets/icons/Mission.vue";
	import Question from "@/assets/icons/Question.vue";
	import MemberItem from "@/components/items/MemberItem.vue";
	import { useTeamStore } from "@/stores/team.js";

	const teamStore = useTeamStore();
</script>
4

<style lang="css" scoped>
	.header {
		min-height: 50vh;
		display: flex;
		justify-content: center;
		align-items: end;
		background: url(../assets/img/boss-s-day-arrangement-with-paper-boats-copy-space.jpg);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}

	.header__wrapper {
		border-image: linear-gradient(
				rgba(119, 0, 119, 0.5),
				rgba(119, 0, 119, 0.5)
			)
			fill 1;
		margin: 0 1.5rem;
		padding: 1.5rem;
	}

	.header__text {
		color: var(--colorWhite);
		font-size: 1.5rem;
		text-align: center;
	}

	.yellow {
		color: var(--primaryColor);
	}

	.big {
		display: block;
		font-size: 2rem;
		font-weight: 700;
	}

	.wrapper {
		display: grid;
		gap: 4rem;
	}

	.story__wrapper,
	.mis,
	.vis,
	.history__text,
	.culture__text,
	.culture2,
	.home,
	.values {
		text-align: center;
		box-shadow: 0 2px 8px var(--color04);
		margin: 1.5rem;
		padding: 1.5rem;
	}

	.story__wrapper {
		margin-top: 0;
	}

	.values__head {
		text-align: center;
	}

	.mis-vis {
		display: grid;
		gap: 4rem;
	}

	/* story */

	.story__head,
	.mis__head,
	.vis__head,
	.text__head,
	.values__head,
	.culture__head,
	.home__head {
		color: var(--primaryColor);
	}

	.story__text,
	.mis__text,
	.vis__text,
	.text__desc,
	.value__head,
	.culture__desc,
	.home__text {
		color: var(--thirdColor);
		padding: 1.5rem 0;
	}

	.mis__text,
	.vis__text {
		font-weight: 700;
	}

	@media (min-width: 48em) {
		/* Story */

		.wrapper {
			max-width: 1200px;
			margin: 0 auto 3rem;
		}

		.header__wrapper {
			padding: 3rem;
		}
	}
</style>
