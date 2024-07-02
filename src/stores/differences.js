import { defineStore } from "pinia";
import Donate from "@/assets/icons/Donate.vue";
import Member from "@/assets/icons/Member.vue";
import Volunteer from "@/assets/icons/Volunteer.vue";

export const useDifferenceStore = defineStore("differenceStore", {
	state: () => ({
		diffs: [
			{
				icon: Volunteer,
				title: "Become a Volunteer",
				smallDesc:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit Obcaecati quidem aliquid molestias quis similique quos consequuntur atque reiciendis aut repellat, ipsam beatae veritatis omnis",
			},
			{
				icon: Donate,
				title: "Donate To Support",
				smallDesc:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit Obcaecati quidem aliquid molestias quis similique quos consequuntur atque reiciendis aut repellat, ipsam beatae veritatis omnis",
			},
			{
				icon: Member,
				title: "Become a Member",
				smallDesc:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit Obcaecati quidem aliquid molestias quis similique quos consequuntur atque reiciendis aut repellat, ipsam beatae veritatis omnis",
			},
		],
	}),
});
