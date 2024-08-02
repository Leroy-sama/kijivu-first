import { defineStore } from "pinia";

export const useActivityStore = defineStore("activityStore", {
	state: () => {
		activities: [
			{
				id: "activity1",
				title: "Painting Basics",
				image: "https://i.pinimg.com/564x/2d/6c/bd/2d6cbd5f1de1a7f94467a5ba54cc3bcd.jpg",
				description:
					"Learn the basics of painting by creating your own artwork.",
			},
			{
				id: "activity2",
				title: "Digital Painting",
				image: "https://i.pinimg.com/564x/c8/25/01/c825015c66933d192e7390df99bf1c36.jpg",
				description:
					"Learn how to use digital tools to create beautiful and newshowing.",
			},
			{
				id: "activity3",
				title: "Storytelling through Art",
				image: "https://i.pinimg.com/564x/60/38/36/60383625003c9019f80df2d799f4c91d.jpg",
				description:
					"Learn how to tell a story through art using various mediums.",
			},
		];
	},
});
