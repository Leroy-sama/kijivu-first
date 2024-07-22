import { defineStore } from "pinia";

export const useEventStore = defineStore("eventStore", {
	state: () => ({
		events: [
			{
				id: "event1",
				image: "https://i.pinimg.com/564x/52/d7/cc/52d7ccbfe49717f17a054397a8292d7c.jpg",
				title: "Children's Home Visit",
				date: "2024-06-15",
				location: "Kisumu Children's Home",
				description:
					"Learn how to create engaging and memorable stories through art.",
			},
			{
				id: "event2",
				image: "https://i.pinimg.com/564x/52/d7/cc/52d7ccbfe49717f17a054397a8292d7c.jpg",
				title: "Reject Finance Bill",
				date: "2024-07-15",
				location: "Online",
				description:
					"Learn how to create engaging and memorable stories through art.",
			},
			{
				id: "event3",
				image: "https://i.pinimg.com/564x/52/d7/cc/52d7ccbfe49717f17a054397a8292d7c.jpg",
				title: "Ruto Anguka Nayo",
				date: "2022-06-15",
				location: "Online",
				description:
					"Learn how to create engaging and memorable stories through art.",
			},
			{
				id: "event4",
				image: "https://i.pinimg.com/564x/52/d7/cc/52d7ccbfe49717f17a054397a8292d7c.jpg",
				title: "Remembering Our Fallen",
				date: "2022-06-15",
				location: "Online",
				description:
					"Learn how to create engaging and memorable stories through art.",
			},
			//Add more events here
		],
	}),
});
