<script setup>
	import TheHeader from "./components/UI/TheHeader.vue";
	import TheFooter from "./components/UI/TheFooter.vue";
</script>

<template>
	<TheHeader />
	<RouterView />
	<TheFooter />
</template>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap");
	@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		text-decoration: none;
		font-family: "Poppins", sans-serif;
	}

	:root {
		/* ----- version 01 ----- */

		--color01: #0fc5b0;
		--color02: #00937e;
		--color02Darker: #0a4039;
		--color04: #011a16;
		--colorWhite: #ffffff;
		--almostGrey: rgb(236, 236, 236);

		--titleColor: #020c1a;
		--colorSpanBg: #ffecb2;

		/* ----- version 02 ----- */
		--primaryColor: #fcb900;
		--primaryColorDarker: #af8300;
		--secondaryColor: #9b51e0;
		--lighterBluish: #abb8c3;
		--cyanBlue: #0693e3;
	}

	img {
		width: 100%;
	}

	a {
		text-decoration: none;
	}
</style>
