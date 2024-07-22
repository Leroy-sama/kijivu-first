import { defineStore } from "pinia";

export const useServicesStore = defineStore("servicesStore", {
	state: () => ({
		services: [
			{
				id: "service1",
				image: "https://i.pinimg.com/564x/52/d7/cc/52d7ccbfe49717f17a054397a8292d7c.jpg",
				title: "Artistic Education",
				description:
					"Our team of artists will guide you through the world of art, helping you develop your creativity and understanding of the artistic process.",
			},
			{
				id: "service2",
				image: "https://i.pinimg.com/564x/d9/9b/43/d99b432f7e40967afe7414077ca9a057.jpg",
				title: "Artistic Support",
				description:
					"We will provide you with the tools and resources you need to succeed in your artistic endeavors.",
			},
			{
				id: "service3",
				image: "https://i.pinimg.com/564x/b7/e9/4f/b7e94fd8505e73d0c6bfc4a6d9596365.jpg",
				title: "Community Engagement",
				description:
					"Join us in our community, sharing your art and learning from others in our artistic journey.",
			},
			{
				id: "service4",
				image: "https://i.pinimg.com/564x/95/92/e2/9592e2612120c4717dc8cf4df67d9cc2.jpg",
				title: "Artistic Inspiration",
				description:
					"Stay inspired by the beauty and creativity of the world around you, and discover new ways to express yourself through art.",
			},
			{
				id: "service5",
				image: "https://i.pinimg.com/564x/08/07/4c/08074cc4352cbf988ce893241ae99d2c.jpg",
				title: "Advertisement",
				description:
					"Help us promote your artwork through various channels, such as social media, print, and online advertising.",
			},
		],
	}),
});
