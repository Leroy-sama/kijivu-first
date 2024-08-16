<template>
	<main>
		<header>
			<div class="header__wrapper">
				<h1 class="header__head">Life Skills</h1>
			</div>
		</header>
		<section>
			<div class="section__wrapper">
				<p class="section__text">
					Under our Life Skills pillar we provide mentorship and
					training specifically focused on the mental-emotional
					wellbeing. Our flagship program here is YUMP, which stands
					for Youth Unleashed Mentorship Program. Our activies are
					designed to be playful and engaging, while teaching specific
					tools that students are able to apply in their own lives.
					These include mindfulness techniques, stress management,
					self-love, change of habits, buildng self-esteem and
					self-discipline, building good relationships and much more.
				</p>
				<div class="stats">
					<span class="stat1">
						<span>10k+</span>
						<p>children & youth reached</p>
					</span>
					<span class="stat2">
						<span>40+</span>
						<p>partners & platforms</p>
					</span>
				</div>
			</div>
		</section>
	</main>
</template>

<style lang="css" scoped>
	header {
		min-height: 50vh;
		display: flex;
		justify-content: center;
		align-items: end;
		background: url(https://i.pinimg.com/564x/3f/4b/0a/3f4b0aab8d461af4d7580eb0da80dca2.jpg);
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

	.section__wrapper {
		margin: 0 1.5rem;
	}

	.stats,
	.stat1,
	.stat2 {
		display: grid;
		justify-items: center;
	}

	.stat1 span {
		color: var(--thirdColor);
	}

	.stat2 span {
		color: var(--primaryColor);
	}

	.stat1 span,
	.stat2 span {
		font-size: 3rem;
		font-weight: 700;
	}

	.stat1 p {
		color: var(--primaryColor);
	}

	.stat2 p {
		color: var(--thirdColor);
	}

	.stat1 p,
	.stat2 p {
		font-size: 2rem;
		text-transform: uppercase;
		font-weight: 500;
		text-align: center;
	}

	@media (min-width: 700px) {
		.stats {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
