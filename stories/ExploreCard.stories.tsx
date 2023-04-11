import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ExploreCard from '../components/ExploreCard'

export default {
    title: 'Component/ExploreCard',
    component: ExploreCard,
    argTypes: {
        imgUrl: {
            description: 'NFT preview image URL',
            control: 'text'
        },
        profileUrl: {
            description: 'Profile image URL',
            control: 'text'
        },
        title: {
            description: 'Title of NFT token',
            control: 'text'
        },
        name: {
            description: 'Name of author of NFT token',
            control: 'text'
        }
    }
} as ComponentMeta<typeof ExploreCard>

const Template: ComponentStory<typeof ExploreCard> = (args) => <ExploreCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
    imgUrl: 'https://openseauserdata.com/files/dooplicator_hero_4x3_3451EA3F.jpg',
    profileUrl: "https://lh3.googleusercontent.com/RrCR2EKxJnu_JoadezfSwRBFeiYexn54OwWyAtGdCfZpfvwmjlxiqrajlOrIJ1ri9SRnc6P-UxW9_saOFwp69vUDcxxr_Wr2S_YXjqc=s76",
    title: "Dooplicator",
    name: "Doodles"
}