import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ExplainCard from '../components/ExplainCard'

export default {
    title: 'Component/ExplainCard',
    component: ExplainCard,
    argTypes: {
        imgUrl: {
            description: 'The URL of little icon of this card',
            control: 'text'
        },
        title: {
            description: 'The main title of this card',
            control: 'text'
        },
        specified: {
            description: 'The main content of this card',
            control: 'text'
        }
    }
} as ComponentMeta<typeof ExplainCard>

const Template: ComponentStory<typeof ExplainCard> = (args) => <ExplainCard {...args} />

export const First = Template.bind({})
First.args = {
    imgUrl: 'https://opensea.io/static/images/icons/wallet.svg',
    title: 'Set up your wallet',
    specified: 'Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the wallets we support.'
}

export const Second = Template.bind({})
Second.args = {
    imgUrl: "https://opensea.io/static/images/icons/collection.svg",
    title: "Create your collection",
    specified: "Click my collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee."
}

export const Third = Template.bind({})
Third.args = {
    imgUrl: "https://opensea.io/static/images/icons/nft.svg",
    title: "Add your NFTs",
    specified: "Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content."
}

export const Fourth = Template.bind({})
Fourth.args = {
    imgUrl: "https://opensea.io/static/images/icons/sale.svg",
    title: "List them for sale",
    specified: "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!"
}