import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Banner from '../components/Banner'

export default {
    title: 'Component/Banner',
    component: Banner,
    argTypes: {
        imgUrl: {
            description: 'Background image URL of banner',
            control: 'text'
        },
        text: {
            description: 'Text in banner',
            control: 'text'
        }
    }
} as ComponentMeta<typeof Banner>

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />

export const Primary = Template.bind({})
Primary.args = {
    imgUrl: 'https://static.opensea.io/solana/home-banner.png',
    text: 'Solana is in beta on OpenSea'
}