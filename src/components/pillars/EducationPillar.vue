<template>
	<main>
		<header>
			<div class="header__wrapper">
				<h1 class="header__head">Education</h1>
			</div>
		</header>
		<section class="educatio">
			<div class="education__wrapper">
				<p class="education__text">
					In our mission to unleash children & youth, education is
					fundamental. We believe that children should have the power
					to read and write, to understand the basics of science,
					math, biology and the functioning of society, to speak
					different languages and to discipline the mind.
				</p>
				<p class="education__text2">
					For this, we provide vulnerable children with access to
					primary and high-school education.
				</p>
				<div class="stats">
					<span class="stat1">
						<span class="purple1">302</span>
						<p>children in primary school</p>
					</span>
					<span class="stat2">
						<span class="yellow1">136</span>
						<p>children in high school</p>
					</span>
				</div>
				<p class="education__text3">
					Together with our partners, we unleash 302 children with
					access to primary education by supporting the Korando
					Educational Center and 136 children with access to
					high-school education with our Bursary Program.
				</p>
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
		background: url(@/assets/img/boss-s-day-arrangement-with-paper-boats-copy-space.jpg);
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

	.education__wrapper {
		margin: 0 1.5rem;
		display: grid;
		gap: 1.5rem;
	}

	.stats {
		display: grid;
		justify-items: center;
		gap: 2rem;
	}

	.stat1,
	.stat2 {
		display: grid;
		justify-items: center;
	}

	.stat1 .purple1 {
		color: var(--thirdColor);
		font-size: 3rem;
		font-weight: 700;
	}

	.stat1 p {
		color: var(--primaryColor);
		font-size: 1.5rem;
		text-transform: uppercase;
		text-align: center;
	}

	.stat2 .yellow1 {
		color: var(--primaryColor);
		font-size: 3rem;
		font-weight: 700;
	}

	.stat2 p {
		color: var(--thirdColor);
		font-size: 1.5rem;
		text-transform: uppercase;
		text-align: center;
	}

	@media (min-width: 700px) {
		.stats {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
