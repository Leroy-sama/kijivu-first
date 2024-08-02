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
				image: "https://i.pinimg.com/564x/7d/cb/e3/7dcbe364a7e7d9515ddd62550e9c44da.jpg",
				title: "Reject Finance Bill",
				date: "2024-07-15",
				location: "Online",
				description:
					"Learn how to create engaging and memorable stories through art.",
			},
			{
				id: "event3",
				image: "https://i.pinimg.com/564x/1b/9e/ca/1b9eca4f51d31239ac95e15589f0d00f.jpg",
				title: "Ruto Anguka Nayo",
				date: "2022-06-15",
				location: "Online",
				description:
					"Learn how to create engaging and memorable stories through art.",
			},
			{
				id: "event4",
				image: "https://i.pinimg.com/564x/5a/c9/08/5ac9082cac3536b1a90492506b5ce59f.jpg",
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
