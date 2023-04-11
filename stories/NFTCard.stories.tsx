import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import NFTCard from '../components/NFTCard'

export default {
    title: 'Component/NFTCard',
    component: NFTCard,
    argTypes: {
        imgUrl: {
            description: 'The URL of preview image of this NFT',
            control: 'text'
        },
        title: {
            description: 'The title of this NFT',
            control: 'text'
        },
        author: {
            description: 'The name of author of this NFT',
            control: 'text'
        },
        currencyType: {
            description: 'The currency type of this NFT. Whether Etherium or Solana',
            control: 'inline-radio',
            options: ['ETH', 'SOL']
        },
        price: {
            description: 'The price of this NFT',
            control: 'text'
        },
        remain: {
            description: 'The date remains to sell',
            control: 'text'
        },
    }
} as ComponentMeta<typeof NFTCard>

const Template: ComponentStory<typeof NFTCard> = (args) => <NFTCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
    imgUrl: "https://lh3.googleusercontent.com/wf29x3mQr-xAJbuS3AlZnmtZhkLX-qlggo_NBF1CSYLuLXYUc_cAu2b3Z2E-h26q0GgsIaPKw_LcIkV-TBCxVgfJ2O4pNaMLyQUzUFk=w414",
    title: "Soccer Doge # 5913",
    author: "Soccer Doge Club",
    currencyType: "ETH",
    price: "0.08",
    remain: "a day left"
}