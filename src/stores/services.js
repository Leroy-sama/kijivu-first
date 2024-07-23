import { defineStore } from "pinia";

export const useServicesStore = defineStore("servicesStore", {
	state: () => ({
		services: [
			{
				id: "service1",
				image: "https://i.pinimg.com/564x/52/d7/cc/52d7ccbfe49717f17a054397a8292d7c.jpg",
				title: "Artistic Education",
				description:
					"Our team of artists will guide you through the world of art, helping you develop your creativity and understanding of the artistic process. Artistic education is a crucial component of holistic development, fostering creativity, critical thinking, and emotional intelligence. Integrating arts into the educational curriculum not only enhances students' academic performance but also equips them with essential life skills. This multifaceted approach to learning encourages self-expression, cultural awareness, and a deeper appreciation for diverse perspectives.",
			},
			{
				id: "service2",
				image: "https://i.pinimg.com/564x/d9/9b/43/d99b432f7e40967afe7414077ca9a057.jpg",
				title: "Artistic Support",
				description:
					"We will provide you with the tools and resources you need to succeed in your artistic endeavors. Artistic support is essential for nurturing and sustaining creative talents, enabling artists to thrive and contribute meaningfully to society. This support can come in various forms, including financial assistance, mentorship, and access to resources such as studios, materials, and exhibition spaces. Financial support helps alleviate the economic pressures that often burden artists, allowing them to focus on their craft without the constant worry of financial instability. Mentorship programs offer invaluable guidance and feedback, helping emerging artists refine their skills and navigate the complexities",
			},
			{
				id: "service3",
				image: "https://i.pinimg.com/564x/b7/e9/4f/b7e94fd8505e73d0c6bfc4a6d9596365.jpg",
				title: "Community Engagement",
				description:
					"Community engagement involves the collaboration and active participation of local residents, organizations, and stakeholders in the planning, decision-making, and implementation processes that affect their community. This approach fosters a sense of ownership and empowerment among community members, ensuring that diverse voices and perspectives are heard and valued. Effective community engagement builds trust, strengthens relationships, and enhances the relevance and sustainability of initiatives, leading to more resilient and cohesive communities. Through open dialogue and inclusive practices, community engagement promotes shared responsibility and collective action toward common goals.",
			},
			{
				id: "service4",
				image: "https://i.pinimg.com/564x/95/92/e2/9592e2612120c4717dc8cf4df67d9cc2.jpg",
				title: "Artistic Inspiration",
				description:
					"Artistic inspiration is the spark that ignites the creative process, drawing from a multitude of sources such as nature, personal experiences, emotions, cultural heritage, and the works of other artists. It can strike unexpectedly, transforming everyday moments into profound expressions of art. This inspiration fuels the artist's imagination, allowing them to explore new perspectives and push the boundaries of their creativity. Whether through a vivid sunset, a stirring piece of music, or a poignant memory, artistic inspiration connects deeply with the artist's inner world, enabling them to convey their unique vision and connect with audiences on an emotional level.",
			},
			{
				id: "service5",
				image: "https://i.pinimg.com/564x/08/07/4c/08074cc4352cbf988ce893241ae99d2c.jpg",
				title: "Advertisement",
				description:
					"Advertisement is a strategic communication tool used by businesses and organizations to promote products, services, or ideas to a target audience. Through various media channels such as television, radio, print, digital platforms, and social media, advertisements aim to capture attention, generate interest, and influence consumer behavior. Effective advertisements are designed to be compelling and memorable, often incorporating creative visuals, persuasive messages, and emotional appeals to engage the audience. By highlighting the unique value and benefits of what is being advertised, the goal is to drive consumer action, whether it be making a purchase, adopting a new habit, or supporting a cause.",
			},
		],
	}),
});
