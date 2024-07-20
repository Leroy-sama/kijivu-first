<template>
	<div class="member" v-if="selectedMember">
		<header>
			<h1>Who is {{ memberName }}</h1>
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
							<Instagram />
							<Twitter />
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
