import { defineStore } from "pinia";

export const useDifferenceStore = defineStore('differenceStore', {
    state: () => ({
        diffs: [
            {
                title: "Become a Volunteer",
                smallDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Obcaecati quidem aliquid molestias quis similique quos consequuntur atque reiciendis aut repellat, ipsam beatae veritatis omnis"
            },
            {
                title: "Donate To Support",
                smallDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Obcaecati quidem aliquid molestias quis similique quos consequuntur atque reiciendis aut repellat, ipsam beatae veritatis omnis"
            },
            {
                title: "Become a Member",
                smallDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Obcaecati quidem aliquid molestias quis similique quos consequuntur atque reiciendis aut repellat, ipsam beatae veritatis omnis"
            }
        ]
    })
})