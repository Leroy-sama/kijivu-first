import { defineStore } from "pinia";

export const useDifferenceStore = defineStore("differenceStore", {
	state: () => ({
		diffs: [
			{
				title: "Our History",
				image: "",
				smallDesc:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit Obcaecati quidem aliquid molestias quis similique quos consequuntur atque reiciendis aut repellat, ipsam beatae veritatis omnis",
			},
			{
				title: "Our Culture",
				image: "",
				smallDesc:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit Obcaecati quidem aliquid molestias quis similique quos consequuntur atque reiciendis aut repellat, ipsam beatae veritatis omnis",
			},
		],
	}),
});
