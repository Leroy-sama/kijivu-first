import { defineStore } from "pinia";

export const useTeamStore = defineStore("teamStore", {
	state: () => ({
		team: [
			{
				memberID: "mb1",
				memberName: "Martin Scorsese",
				memberTitle: "Founder",
				memberWords:
					"lorem Ips incorrectly Lorem ipsum dolor sit amet consectetur adipisicing elit. Exet voluptatibus excepturi consequuntur quisquam ipsam, maiores enim mollitia. Doloremque, autem expedita. Error	quas debitis a, nam mollitia vel odit saepe! Lorem ipsum dolor sit, amet nsectetur adipisicing elit. Fugit impedit sunt, molestiae consequuntur eligendi enim inventore assumenda natus iste, ipsa perferendis ad tempora veritatis id laboriosam, optio ratione blanditiis!",
				memberImage:
					"https://i.pinimg.com/564x/96/ea/ed/96eaedaf1f9142e9556a47e1a2635a56.jpg",
			},
			{
				memberID: "mb2",
				memberName: "Quentin Tarantino",
				memberTitle: "Founder",
				memberWords:
					"lorem Ips incorrectly Lorem ipsum dolor sit amet consectetur adipisicing elit. Exet voluptatibus excepturi consequuntur quisquam ipsam, maiores enim mollitia. Doloremque, autem expedita. Error	quas debitis a, nam mollitia vel odit saepe! Lorem ipsum dolor sit, amet nsectetur adipisicing elit. Fugit impedit sunt, molestiae consequuntur eligendi enim inventore assumenda natus iste, ipsa perferendis ad tempora veritatis id laboriosam, optio ratione blanditiis!",
				memberImage:
					"https://i.pinimg.com/564x/d6/cc/ce/d6ccce8bd78df0f40f25153d4053f9f8.jpg",
			},
			{
				memberID: "mb3",
				memberName: "Christopher Nolan",
				memberTitle: "Founder",
				memberWords:
					"lorem Ips incorrectly Lorem ipsum dolor sit amet consectetur adipisicing elit. Exet voluptatibus excepturi consequuntur quisquam ipsam, maiores enim mollitia. Doloremque, autem expedita. Error	quas debitis a, nam mollitia vel odit saepe! Lorem ipsum dolor sit, amet nsectetur adipisicing elit. Fugit impedit sunt, molestiae consequuntur eligendi enim inventore assumenda natus iste, ipsa perferendis ad tempora veritatis id laboriosam, optio ratione blanditiis!",
				memberImage:
					"https://i.pinimg.com/564x/51/24/83/512483532a37c81507a9f911ca5c0661.jpg",
			},
			{
				memberID: "mb4",
				memberName: "Steven Spielberg",
				memberTitle: "Founder",
				memberWords:
					"lorem Ips incorrectly Lorem ipsum dolor sit amet consectetur adipisicing elit. Exet voluptatibus excepturi consequuntur quisquam ipsam, maiores enim mollitia. Doloremque, autem expedita. Error	quas debitis a, nam mollitia vel odit saepe! Lorem ipsum dolor sit, amet nsectetur adipisicing elit. Fugit impedit sunt, molestiae consequuntur eligendi enim inventore assumenda natus iste, ipsa perferendis ad tempora veritatis id laboriosam, optio ratione blanditiis!",
				memberImage:
					"https://i.pinimg.com/564x/68/5d/cf/685dcfdcabcb8e3d6aec9a51c3c989df.jpg",
			},
			{
				memberID: "mb5",
				memberName: "Sam Raimi",
				memberTitle: "Founder",
				memberWords:
					"lorem Ips incorrectly Lorem ipsum dolor sit amet consectetur adipisicing elit. Exet voluptatibus excepturi consequuntur quisquam ipsam, maiores enim mollitia. Doloremque, autem expedita. Error	quas debitis a, nam mollitia vel odit saepe! Lorem ipsum dolor sit, amet nsectetur adipisicing elit. Fugit impedit sunt, molestiae consequuntur eligendi enim inventore assumenda natus iste, ipsa perferendis ad tempora veritatis id laboriosam, optio ratione blanditiis!",
				memberImage:
					"https://i.pinimg.com/564x/89/75/b0/8975b0bd146d5256300a80801cc21a6c.jpg",
			},
			{
				memberID: "mb6",
				memberName: "Clint EastWood",
				memberTitle: "Founder",
				memberWords:
					"lorem Ips incorrectly Lorem ipsum dolor sit amet consectetur adipisicing elit. Exet voluptatibus excepturi consequuntur quisquam ipsam, maiores enim mollitia. Doloremque, autem expedita. Error	quas debitis a, nam mollitia vel odit saepe! Lorem ipsum dolor sit, amet nsectetur adipisicing elit. Fugit impedit sunt, molestiae consequuntur eligendi enim inventore assumenda natus iste, ipsa perferendis ad tempora veritatis id laboriosam, optio ratione blanditiis!",
				memberImage:
					"https://i.pinimg.com/564x/69/82/c5/6982c53cf4e9e7b7016c5f212433cf40.jpg",
			},
		],
	}),
});
