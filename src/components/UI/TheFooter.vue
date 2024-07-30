<template>
	<footer>
		<div class="footer__wrapper">
			<h1 class="logo">Kijivu Afrika</h1>
			<div class="grid">
				<div class="first">
					<div class="box">
						<SecLoc />
						<span class="text">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Inventore
						</span>
					</div>
					<div class="box">
						<Phone />
						<a
							class="text"
							href="https://wa.me/254719572537?text=Hello%20Kijivu"
							>+254719572537</a
						>
					</div>
					<div class="box">
						<Email />
						<a href="mailto:kijivumedia@gmail.com" class="text"
							>Kijivumedia@gmail.com</a
						>
					</div>
				</div>
				<div class="second">
					<div>
						<a href="#">About Us</a>
					</div>
					<div>
						<a href="#">What we do</a>
					</div>
					<div>
						<a href="#">Home</a>
					</div>
					<div>
						<a href="#">Career</a>
					</div>
					<div>
						<a href="#">Blog</a>
					</div>
					<div>
						<a href="#">Contact Us</a>
					</div>
				</div>
				<div class="third">
					<div class="icons">
						<a href="https://x.com/home?lang=en">
							<Twitter />
						</a>
						<a href="https://www.instagram.com/">
							<Instagram />
						</a>
						<a href="https://www.youtube.com/">
							<YouTube />
						</a>
					</div>
					<div class="copyright">
						<Copyright />
						<p>Copyright 2024 Kijivu. All rights reserved</p>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup>
	import SecLoc from "@/assets/icons/SecLoc.vue";
	import Phone from "@/assets/icons/Phone.vue";
	import Email from "@/assets/icons/Email.vue";
	import Twitter from "@/assets/icons/Twitter.vue";
	import Instagram from "@/assets/icons/Instagram.vue";
	import YouTube from "@/assets/icons/YouTube.vue";
	import Copyright from "@/assets/icons/Copyright.vue";
</script>

<style scoped>
	footer {
		background-color: var(--titleColor);
	}

	.footer__wrapper {
		padding: 1.5em 0;
		margin: 0 1em;
	}

	.first {
		display: grid;
		gap: 1em;
		padding: 1em 0;
	}

	.box {
		display: flex;
		align-items: center;
		gap: 1em;
	}

	.box:first-child {
		align-items: normal;
	}

	.logo,
	.text {
		color: #f4f4f4;
	}

	.logo {
		padding: 1em 0;
		color: var(--color01);
	}

	.second {
		padding: 1em 0;
		display: grid;
		gap: 1em;
	}

	.second a {
		/* text-align: center; */
		color: #f4f4f4;
	}

	.second a:hover,
	.text:hover {
		text-decoration: underline;
		color: var(--color01);
	}

	.third {
		padding: 1em 0;
	}

	.icons {
		display: flex;
		gap: 1em;
	}

	.copyright {
		display: flex;
		align-items: center;
	}

	.copyright p {
		color: #f4f4f4;
		font-size: 0.9rem;
		padding: 1em 0;
	}

	@media (min-width: 50em) {
		.footer__wrapper {
			max-width: 1200px;
			margin: 0 auto;
		}

		.grid {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			gap: 2em;
		}

		.second {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
