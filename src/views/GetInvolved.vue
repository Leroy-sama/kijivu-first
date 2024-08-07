<template>
	<main>
		<header>
			<div class="header__wrapper">
				<h1 class="header__head">Keen to help?</h1>
			</div>
		</header>
		<section class="involved">
			<div class="involved__wrapper">
				<div class="involved__first">
					<h1 class="involved__head">Get Involved!</h1>
					<p class="involved__text">
						We boldly believe in a new era, where peace on earth is
						possible and where we all live in harmony with each
						other. For this, our programs use the universal
						languages of art and play to foster self-responsibility,
						compassion and curiosity, while providing access to
						education, training and life skills.
					</p>
					<p class="involved__text2">
						You can support our ambitious endeavor in various ways.
						Be it hands on the ground in Kenya as a volunteer or
						intern, or remotely via sponsorships and fundraisers –
						together we are creating a better world.
					</p>
				</div>
				<div class="involved__sec">
					<div class="involved__links">
						<RouterLink to="/">Volunteer in Kenya</RouterLink>
						<RouterLink to="/">Sponsor a Child</RouterLink>
						<RouterLink to="/">Founders for impact</RouterLink>
						<RouterLink to="/">Intern in Kenya</RouterLink>
					</div>
					<div class="involved__stats">
						<span class="stat1">
							150+
							<span class="yellow1">volunteers in Kenya</span>
						</span>
						<span class="stat2">
							<span class="yellow">10k+</span> children & youth
						</span>
					</div>
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
		background: url(https://i.pinimg.com/564x/96/ad/55/96ad55ce91f4f98a4da06f974570fe57.jpg);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}

	.header__wrapper {
		padding: 3rem;
		border-image: linear-gradient(
				rgba(22, 21, 116, 0.6),
				rgba(107, 3, 3, 0.8)
			)
			fill 1;
	}

	.header__head {
		color: #fff;
	}

	.involved__wrapper {
		box-shadow: 0 2px 8px rgba(0 0 0 / 0.5);
		margin: 0 1.5rem;
		padding: 1.5rem;
	}

	.involved__head {
		font-style: italic;
		color: var(--primaryColor);
		font-size: 2.5rem;
		text-align: center;
		line-height: 1;
	}

	.stat1 {
		color: var(--thirdColor);
		font-size: 4rem;
		font-weight: 700;
	}

	.yellow1 {
		color: var(--primaryColor);
		font-size: 1rem;
		text-transform: uppercase;
		display: block;
	}

	.stat2 {
		font-weight: 700;
		color: var(--thirdColor);
		text-transform: uppercase;
	}

	.yellow {
		font-size: 4rem;
		color: var(--primaryColor);
		display: block;
	}
</style>
