import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import TopCollectionCard from '../components/TopCollectionCard'

export default {
    title: 'Component/TopCollectionCard',
    component: TopCollectionCard,
    argTypes: {
        imgUrl: {
            description: 'NFT preview image URL',
            control: 'text'
        },
        name: {
            description: 'The name of NFT',
            control: 'text'
        },
        floorPrice: {
            description: 'Floor price of NFT token. Can be blanked',
            control: 'text'
        },
        status: {
            description: 'Whether the price has been increased, decreased or no change. -1 for decrease, 1 for increase, and 0 for no change',
            control: 'inline-radio',
            options: [-1, 0, 1]
        },
        ratio: {
            description: 'Increased or decreased ratio of price. Only available when status is not 0',
            if: { 
                arg: 'status', 
                neq: 0 
            },
            control: 'text'
        },
        totalPrice: {
            description: 'Total price of NFT token',
            control: 'text'
        },
        idx: {
            description: 'ranking of NFT token on Top Collection Chart',
            control: 'number'
        },
        greenDot: {
            description: 'Whether a greendot exists on upper right side of preview image',
            control: 'boolean'
        },
        checked: {
            description: 'Whether a checked image exists on lower right side of preview image',
            control: 'boolean'
        },
        currencyType: {
            description: 'Type of token. ETH for etherium, SOL for solana',
            control: 'inline-radio',
            options: ['ETH', 'SOL']
        }
    }
} as ComponentMeta<typeof TopCollectionCard>

const Template: ComponentStory<typeof TopCollectionCard> = (args) => <TopCollectionCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
    imgUrl: 'https://lh3.googleusercontent.com/H-eyNE1MwL5ohL-tCfn_Xa1Sl9M9B4612tLYeUlQubzt4ewhr4huJIR5OLuyO3Z5PpJFSwdm7rq-TikAh7f5eUw338A2cy6HRH75=s100',
    name: 'Moonbirds',
    floorPrice: '26.66',
    status: 1,
    ratio: '898.39',
    totalPrice: '1582.74',
    idx: 0,
    greenDot: false,
    checked: true,
    currencyType: 'ETH'
}