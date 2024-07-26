import { defineStore } from "pinia";

export const useUpdatesStore = defineStore("updatesStore", {
	state: () => ({
		updates: [
			{
				id: "update1",
				image: "https://i.pinimg.com/564x/57/ae/ef/57aeeffbe549cdeca367fd9ba54ec7e6.jpg",
				title: "Home Visit",
				date: "2024-05-15",
				description:
					"Apply for scholarships at our prestigious schools.",
			},
			{
				id: "update2",
				image: "https://i.pinimg.com/564x/8e/22/32/8e2232d7add27df43bbf55030ea9c967.jpg",
				title: "Movie Awards",
				date: "2024-04-10",
				description:
					"Become a sponsor of our organization and support our mission.",
			},
			{
				id: "update3",
				image: "https://i.pinimg.com/564x/cf/95/5d/cf955d331b0f142e33d94374f577a63d.jpg",
				title: "Secretary Party",
				date: "2024-03-20",
				description:
					"lorem Ipsum dolor sit amet et just e iure metus. Lorem Ipsum",
			},
		],
	}),
});
