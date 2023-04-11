import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import TrendingCard from '../components/TrendingCard'

export default {
    title: 'Component/TrendingCard',
    component: TrendingCard,
    argTypes: {
        imgUrl: {
            description: 'Main background image URL of trending card',
            control: 'text'
        },
        profileUrl: {
            description: 'Profile image URL',
            control: 'text'
        },
        title: {
            description: 'The main title of the NFT token on this card',
            control: 'text'
        },
        author: {
            description: 'The name of author of the NFT token on this card',
            control: 'text'
        },
        titleChecked: {
            description: 'whether a checked icon exists on the right side of title',
            control: 'boolean'
        },
        authorChecked: {
            description: 'whether a checked icon exists on the right side of the name of author',
            control: 'boolean'
        },
        specified: {
            description: 'Main content of this NFT token',
            control: 'text'
        }
    }
} as ComponentMeta<typeof TrendingCard>

const Template: ComponentStory<typeof TrendingCard> = (args) => <TrendingCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
    imgUrl: 'https://lh3.googleusercontent.com/MixpjVFErqX7EKHgjE2WZe6prRW-aQPeTlVgPQbH8okGfTEWL1X97UckaE6voqE1YWPXGo_1TO3BjcjbWE7s0dzWWmnk5QPnmMVZhg=h200',
    profileUrl: 'https://lh3.googleusercontent.com/3mPdo7sj92tMMNcr8-t51cFsTPVJuEZaxkL8Wx_1rPo5mHIqdRmCwC33u6bdLSR7y3TwN2mS4rBCPffsDTdtDGebDWJ-cG2WD-Ha4g=s100',
    title: 'Flyfish Club',
    author: 'FlyfishClubDeployer',
    titleChecked: true,
    authorChecked: true,
    specified: "Flyfish Club (FFC) is the world's first member's only private dining club where membership is purcha..."
}