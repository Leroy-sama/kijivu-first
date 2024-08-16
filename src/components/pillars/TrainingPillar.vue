<template>
	<main>
		<header>
			<div class="header__wrapper">
				<h1 class="header__head">Training</h1>
			</div>
		</header>
		<section class="training">
			<div class="training__wrapper">
				<p class="training__text">
					Under Training we provide a variety of programs and
					workshops to children & youth as well as partner
					organizations and government departments.
				</p>
				<ul>
					Our traininga cover topics such as:
					<li>Computer skills</li>
					<li>Basics of programming</li>
					<li>Crafts and creative arts</li>
					<li>Cooking and baking</li>
					<li>Sports</li>
					<li>Dance and choreography</li>
					<li>Theatre and Music</li>
					<li>Menstrual hygiene & STDs</li>
					<li>Gender based violence prevention</li>
					<li>Team Building</li>
					<li>Mental Health</li>
					<li>and more…</li>
				</ul>
				<div class="images">
					<img
						src="https://betterme.org/wp-content/uploads/2023/09/120869480_4446834898721915_4898496807293800690_n.jpg"
						alt=""
					/>
					<img
						src="https://betterme.org/wp-content/uploads/2023/09/120075048_4373884536016952_2887526331582632224_n.jpg"
						alt=""
					/>
					<img
						src="https://betterme.org/wp-content/uploads/2023/09/251946592_6347927818612604_9067605889880012001_n2.jpg"
						alt=""
					/>
					<img
						src="https://betterme.org/wp-content/uploads/2023/09/244511137_6202568823148505_1137928312463625253_n2.jpg"
						alt=""
					/>
				</div>
				<p class="last-text">
					Together with our partners, we unleash 1000s of children,
					youth and partners every year with trainings to level up
					their skills.
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
		background: url(https://i.pinimg.com/564x/dc/f4/a7/dcf4a7dfa7ead3f2d52aa3bd5d9cfb73.jpg);
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

	.training__wrapper {
		margin: 0 1.5rem;
	}

	.training__wrapper li {
		list-style: circle;
	}
</style>
