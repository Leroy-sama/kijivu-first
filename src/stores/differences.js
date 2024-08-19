import { defineStore } from "pinia";

export const useDifferenceStore = defineStore("differenceStore", {
	state: () => ({
		diffs: [
			{
				id: "num1",
				title: "Black History Month",
				image: "https://i.pinimg.com/564x/07/9e/49/079e4987cf4e992f6dd0f2afcebb2b72.jpg",
				smallDesc:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit Obcaecati quidem aliquid molestias quis similique quos consequuntur atque reiciendis aut repellat, ipsam beatae veritatis omnis",
			},
			{
				id: "num2",
				title: "Electrical Workshop",
				image: "https://i.pinimg.com/564x/f6/b7/7b/f6b77b0a5df74926dce24f4eb6eb021d.jpg",
				smallDesc:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit Obcaecati quidem aliquid molestias quis similique quos consequuntur atque reiciendis aut repellat, ipsam beatae veritatis omnis",
			},
			{
				num3: "num3",
				title: "Lorem Ipsum",
				image: "https://i.pinimg.com/564x/ac/e7/cd/ace7cd80adb3551ca617b60ca0e43694.jpg",
				smallDesc:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit Obcaecati quidem aliquid molestias quis similique quos consequuntur atque reiciendis aut repellat, ipsam beatae veritatis omnis",
			},
		],
	}),
});
