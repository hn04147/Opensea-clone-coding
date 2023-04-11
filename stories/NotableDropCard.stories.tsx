import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import NotableDropCard from '../components/NotableDropCard'

export default {
    title: 'Component/NotableDropCard',
    component: NotableDropCard,
    argTypes: {
        imgUrl: {
            description: 'The URL of preview image',
            control: 'text'
        },
        title: {
            description: 'The main title of this card',
            control: 'text'
        },
        content: {
            description: 'The content of this card',
            control: 'text'
        },
    }
} as ComponentMeta<typeof NotableDropCard>

const Template: ComponentStory<typeof NotableDropCard> = (args) => <NotableDropCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
    imgUrl: "https://openseauserdata.com/static/promocards/blindgeometric-promocard.jpg",
    title: "Bilnd Geometric",
    content: ""
}

export const Secondary = Template.bind({})
Secondary.args = {
    imgUrl: "https://openseauserdata.com/static/promocards/shrapnelalek-promocard.jpg",
    title: "Operators by Shrapnel",
    content: "2,000 Operators per week for 5 Weeks"
}