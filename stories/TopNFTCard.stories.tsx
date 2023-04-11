import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import TopNFTCard from '../components/TopNFTCard'

export default {
    title: 'Component/TopNFTCard',
    component: TopNFTCard,
    decorators: [
        (Story) => (
            <div style={{ marginRight: '2rem' }}>
                <Story/>
            </div>
        ),
    ],
    argTypes: {
        idx: {
            description: 'ranking of NFT token on Top Collection Chart',
            control: 'number'
        },
        imgUrl: {
            description: 'NFT preview image URL',
            control: 'text'
        },
        title: {
            description: 'The name of NFT',
            control: 'text'
        },
        currencyType: {
            description: 'Type of token. ETH for etherium, SOL for solana',
            control: 'inline-radio',
            options: ['ETH', 'SOL']
        },
        price: {
            description: 'The price of this NFT',
            control: 'text'
        },
        status: {
            description: 'Whether the price has been increased, decreased or no change. -1 for decrease, 1 for increase, and 0 for no change',
            control: 'inline-radio',
            options: [-1, 0, 1]
        },
        ratio: {
            description: 'Increased or decreased ratio of price. Only available when status is not 0',
            control: 'text',
            if: {
                arg: 'status',
                neq: 0
            }
        },
        sevenDayStatus: {
            description: 'Whether the price has been increased, decreased or no change in latest seven days',
            control: 'inline-radio',
            options: [-1, 0, 1]
        },
        sevenDayRatio: {
            description: 'Increased or decreased ratio of price in recent seven days. Only available when sevenDayStatus is not 0',
            control: 'text',
            if: {
                arg: 'sevenDayStatus',
                neq: 0
            }
        },
        floorPrice: {
            description: 'The floor price of this NFT',
            control: 'text'
        },
        owners: {
            description: 'The number of owners',
            control: 'text'
        },
        items: {
            description: 'The number of items',
            control: 'text'
        }
    }
} as ComponentMeta<typeof TopNFTCard>

const Template: ComponentStory<typeof TopNFTCard> = (args) => <TopNFTCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
    idx: 1,
    imgUrl: "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s100",
    title: "CryptoPunks",
    currencyType: "ETH",
    price: "2172.36",
    status: -1,
    ratio: "42.22",
    sevenDayStatus: 1,
    sevenDayRatio: "585.66",
    floorPrice: "476.88",
    owners: "3.6K",
    items: "10.0K"
}