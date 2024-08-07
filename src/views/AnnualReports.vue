<template>
	<main>
		<header>
			<div class="header__wrapper">
				<h1 class="header__head">Annual Reports</h1>
			</div>
		</header>
		<section class="reports__intro">
			<div class="reports__wrapper">
				<h2 class="reports__head">
					Designed and published by better me
				</h2>
				<p class="reports__text">
					Each year in February, Better Me publishes its annual report
					of the previous year. The reports offer great insights into
					our work, our culture and our finances. We invited you to
					make yourself a cup of tea and enjoy the comprehensive read!
				</p>
				<div class="reports-grid">
					<div class="report">
						<img
							src="https://betterme.org/wp-content/uploads/2024/07/04310585-cd3a-4328-b4d5-6f26cbce956011-400x250.jpg"
							alt=""
						/>
						<p class="report__text">Annual Report 2023</p>
					</div>
					<div class="report">
						<img
							src="https://betterme.org/wp-content/uploads/2023/02/69a63371-7d5a-4d1d-9fe2-33215db9c65c-1-400x250.jpg"
							alt=""
						/>
						<p class="report__text">Annual Report 2022</p>
					</div>
					<div class="report">
						<img
							src="https://betterme.org/wp-content/uploads/2022/02/IMG_7903-1-400x250.jpg"
							alt=""
						/>
						<p class="report__text">Annual Report 2021</p>
					</div>
					<div class="report">
						<img
							src="https://betterme.org/wp-content/uploads/2021/02/IMG-20200819-WA0088-400x250.jpg"
							alt=""
						/>
						<p class="report__text">Annual Report 2020</p>
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
		background: url(https://i.pinimg.com/564x/a5/51/92/a551922471704f72a3d36d198ddad154.jpg);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}

	.header__wrapper {
		padding: 1rem;
		border-image: linear-gradient(
				rgba(22, 21, 116, 0.6),
				rgba(107, 3, 3, 0.8)
			)
			fill 1;
		max-width: 1200px;
	}

	.reports__wrapper {
		box-shadow: 0 2px 8px rgba(0 0 0 / 0.5);
		margin: 0 1.5rem;
	}
</style>
