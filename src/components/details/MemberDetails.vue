<template>
	<div class="member" v-if="selectedMember">
		<header>
			<h1>
				Who is <span class="member__name">{{ memberName }}</span>
			</h1>
		</header>
		<div class="wrapper">
			<div class="content">
				<img :src="memberImage" :alt="memberName" />
				<div class="text-side">
					<h1>{{ memberName }}</h1>
					<p>
						{{ memberWords }}
					</p>
					<div class="connect">
						<p>connect on:</p>
						<div class="socials">
							<Instagram class="ig" />
							<Twitter class="x" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div v-else>
		<h1>Nothing has been found</h1>
	</div>
</template>

<script setup>
	import Instagram from "@/assets/icons/Instagram.vue";
	import Twitter from "@/assets/icons/Twitter.vue";

	import { onMounted, ref, computed } from "vue";

	import { useTeamStore } from "@/stores/team";
	import { useRoute } from "vue-router";

	const teamStore = useTeamStore();
	const route = useRoute();

	const id = route.params.id;

	const selectedMember = ref(null);

	const memberName = computed(() => {
		return selectedMember.value.memberName;
	});

	const memberImage = computed(() => {
		return selectedMember.value.memberImage;
	});

	const memberWords = computed(() => {
		return selectedMember.value.memberWords;
	});

	onMounted(() => {
		const members = teamStore.team;
		selectedMember.value = members.find((member) => member.id === id);

		if (!selectedMember.value) {
			console.error("Member not found with id:", id);
		} else {
			console.log("Selected Member:", selectedMember.value);
		}
	});
</script>

<style scoped>
	header {
		background-image: url(@/assets/img/whoIs.jpg);
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		min-height: 50vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	header h1 {
		text-align: center;
		color: #fff;
	}

	.member__name {
		color: var(--color02Darker);
		display: block;
		font-family: "Playfair Display", serif;
		font-size: 2.5rem;
	}

	.wrapper {
		margin: 3rem 1.5rem;
	}

	.content img {
		inline-size: 100%;
		aspect-ratio: 1 / 1;
		object-fit: cover;
	}

	.text-side {
		display: grid;
		gap: 1rem;
	}

	.text-side h1 {
		color: var(--color02Darker);
	}

	.socials {
		display: flex;
		gap: 1rem;
	}

	.socials .ig {
		background: linear-gradient(#c837ab, #ff543e);
	}

	.socials .x {
		background-color: rgb(0, 0, 0);
	}

	@media (min-width: 60em) {
		.member__name {
			font-size: 4rem;
		}

		.wrapper {
			max-width: 1200px;
			margin: 3rem auto;
		}

		.content {
			display: flex;
			gap: 2.5rem;
			align-items: center;
		}
	}
</style>
