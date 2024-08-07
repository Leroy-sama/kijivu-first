<template>
	<main class="work">
		<header>
			<div class="header__wrapper">
				<h1 class="header__text">Our Work</h1>
			</div>
		</header>
		<section class="empower">
			<div class="empower__wrapper">
				<h1 class="empower__head">
					Youth <span class="emp">Empowerment</span> for the
					vulnerable
				</h1>
				<h3 class="empower__small-head">
					We fulfill our Mission through our 3 Pillars Approach
				</h3>
				<p class="empower__desc">
					Our programs use the universal languages of art and play to
					instill self-responsibility, compassion and curiosity. We
					see Kenya’s new generation as facilitators of positive
					change and it is our mission to unleash their inner power
					through our 3 Pillars.
				</p>
				<p class="empower__cta">
					Read our <RouterLink to="/about">About us</RouterLink> page
					to learn more about our mission and vision.
				</p>
			</div>
		</section>
		<section class="pillars">
			<div class="pillars__wrapper">
				<div class="pillar">
					<span class="pillar__num">1st Pillar</span>
					<h2 class="pillar__head">Education</h2>
					<p class="pillar__text">
						We provide access to primary and higher education.
					</p>
					<div class="pillar__unleash">
						<p class="unleash__text">Unleashes one to understand</p>
					</div>
					<p class="pillar__points">
						Our main activities and programs:
					</p>
					<ul>
						<li>
							We provide High-School Bursaries, psycho-social
							support and tutoring for 136 vulnerable youth to
							access and succeed in secondary schools.
						</li>
						<li>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Molestias quibusdam quae iste ducimus neque.
							Tempore vel quas maiores ea molestiae?
						</li>
					</ul>
					<RouterLink to="/">Learn More...</RouterLink>
				</div>
				<div class="pillar">
					<span class="pillar__num">1st Pillar</span>
					<h2 class="pillar__head">Education</h2>
					<p class="pillar__text">
						We provide access to primary and higher education.
					</p>
					<div class="pillar__unleash">
						<p class="unleash__text">Unleashes one to understand</p>
					</div>
					<p class="pillar__points">
						Our main activities and programs:
					</p>
					<ul>
						<li>
							We provide High-School Bursaries, psycho-social
							support and tutoring for 136 vulnerable youth to
							access and succeed in secondary schools.
						</li>
						<li>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Molestias quibusdam quae iste ducimus neque.
							Tempore vel quas maiores ea molestiae?
						</li>
					</ul>
					<RouterLink to="/">Learn More...</RouterLink>
				</div>
				<div class="pillar">
					<span class="pillar__num">1st Pillar</span>
					<h2 class="pillar__head">Education</h2>
					<p class="pillar__text">
						We provide access to primary and higher education.
					</p>
					<div class="pillar__unleash">
						<p class="unleash__text">Unleashes one to understand</p>
					</div>
					<p class="pillar__points">
						Our main activities and programs:
					</p>
					<ul>
						<li>
							We provide High-School Bursaries, psycho-social
							support and tutoring for 136 vulnerable youth to
							access and succeed in secondary schools.
						</li>
						<li>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Molestias quibusdam quae iste ducimus neque.
							Tempore vel quas maiores ea molestiae?
						</li>
					</ul>
					<RouterLink to="/">Learn More...</RouterLink>
				</div>
			</div>
		</section>
		<section class="location">
			<div class="location__wrapper">
				<div class="location__desc">
					<h1 class="location__head">Where we work</h1>
					<span class="location__locale">Kisumu, Kenya</span>
					<p class="location__text">
						Around 35% of Kenya’s population is living below the
						poverty line. This leaves more than one-third of the
						entire country living on less than the $1.90 per day.
					</p>
					<p class="location__text">
						Kisumu is Kenya’s 3rd biggest city and almost half of
						all households are poor by national standards, with
						around 60% of all residents living in informal
						settlements and only about 18% have electric light in
						their houses. Only about half of all residents have a
						primary school certificate.
					</p>
				</div>
				<div class="location__image">
					<img src="../assets/img/Our-Kisumu-Office1.png" alt="" />
				</div>
			</div>
		</section>
		<section class="volunteer">
			<div class="gridbox">
				<div class="first">
					<h1 class="first__head">
						Help to help <span class="emp">oneself and others</span>
					</h1>
					<p class="first__desc">
						One of our greatest passions is to support young people
						to find and unleash the inner power that each of us
						carries deep within. Once unleashed, we are able to
						trust our intuition, discover our talents and express
						our unique gifts. We believe that each of us holds a
						puzzle piece to the greater whole and when we live our
						calling, then there is no one to compete with. Knowing
						that we all have our place, we can embrace each others
						differences.
					</p>
				</div>
				<div class="second">
					<img src="../assets/img/second-img.jpg" alt="" />
				</div>
				<div class="third">
					<img src="../assets/img/third-img.jpg" alt="" />
				</div>
				<div class="fourth">
					<h1 class="fourth__head">
						<span class="white">Volunteers</span> are our backbone
					</h1>
					<p class="fourth__desc">
						Our work provides a space for volunteers from around the
						globe to share their skills and talents as tools for
						transformation. We support them to unleash their highest
						potential and with that, bring about hope and positive
						change for our beneficiaries . We say, a Better World
						starts with a Better Me – and we mean it!
					</p>
					<span class="fourth__cta"
						>Visti our Volunteer in Kenya page to learn more.</span
					>
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
		background: url(https://i.pinimg.com/564x/45/c3/93/45c393054a436d99d4d632120474fc8c.jpg);
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
		padding: 1.5rem;
	}

	.empower__wrapper,
	.pillar,
	.location__desc,
	.first,
	.fourth {
		margin: 0 1.5rem;
		box-shadow: 0 2px 8px rgba(0 0 0 / 0.5);
		padding: 1.5rem;
	}

	.location__image {
		margin: 0 1.5rem;
	}

	/* empower */

	.empower__head,
	.pillar__head,
	.location__head,
	.first__head {
		color: var(--thirdColor);
		font-size: 2rem;
	}

	.pillar__text {
		color: var(--thirdColor);
	}

	.emp {
		color: var(--primaryColor);
	}

	.empower__small-head,
	.pillar__num,
	.location__locale {
		color: var(--primaryColor);
	}

	.pillar__num {
		text-transform: uppercase;
	}

	.fourth {
		background-color: var(--thirdColor);
	}

	.fourth__head {
		color: var(--primaryColor);
	}

	.white {
		color: var(--colorWhite);
	}

	.fourth__desc,
	.fourth__cta {
		color: var(--almostGrey);
	}
</style>
