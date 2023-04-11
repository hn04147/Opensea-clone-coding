import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Dropdown from '../components/Dropdown'

export default {
    title: 'Component/Dropdown',
    component: Dropdown,
    argTypes: {
        includeImage: {
            description: 'Whether this dropdown component has icon that represents category',
            control: 'boolean'
        },
        mainTitle: {
            description: 'Category shown on the dropdown when the dropdown is not opened',
            control: 'text'
        },
        mainImage: {
            description: 'The image of category shown on the dropdown when the dropdown is not opened. Only available when includeImage is true',
            control: 'text',
            if: { 
                arg: 'includeImage'
            }
        },
        elements: {
            description: 'array of objects which contains the elements of { imgUrl, title, link when clicked } when dropdown is opened',
            control: 'object',
            imgUrl: {
                description: 'bbb',
                control: 'text'
            },
            title: {
                description: '',
                control: 'text'
            },
            linkTo: {
                description: '',
                control: 'text'
            }
        }
    }
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />

export const WithIcon = Template.bind({})
WithIcon.args = {
    includeImage: true,
    mainTitle: 'All NFTs',
    mainImage: 'https://opensea.io/static/images/icons/allnfts-light.svg',
    elements: [
        {
            imgUrl: "https://opensea.io/static/images/icons/allnfts-light.svg",
            title: "All NFTs",
            linkTo: "https://opensea.io/assets"
        },
        {
            imgUrl: "https://opensea.io/static/images/icons/solana-light.svg",
            title: "Solana NFTs",
            linkTo: "https://opensea.io/solana-collections"
        },
        {
            imgUrl: "https://opensea.io/static/images/icons/art-light.svg",
            title: "Arts",
            linkTo: "https://opensea.io/category/art"
        },
        {
            imgUrl: "https://opensea.io/static/images/icons/collectibles-light.svg",
            title: "Collectibles",
            linkTo: "https://opensea.io/category/collectibles"
        },
        {
            imgUrl: "https://opensea.io/static/images/icons/domain-names-light.svg",
            title: "Domain Names",
            linkTo: "https://opensea.io/category/domain-names"
        },
        {
            imgUrl: "https://opensea.io/static/images/icons/music-light.svg",
            title: "Music",
            linkTo: "https://opensea.io/category/music"
        },
        {
            imgUrl: "https://opensea.io/static/images/icons/photography-category-light.svg",
            title: "Photography",
            linkTo: "https://opensea.io/category/photography-category"
        },
        {
            imgUrl: "https://opensea.io/static/images/icons/sports-light.svg",
            title: "Sports",
            linkTo: "https://opensea.io/category/sports"
        },
        {
            imgUrl: "https://opensea.io/static/images/icons/trading-cards-light.svg",
            title: "Trading Cards",
            linkTo: "https://opensea.io/category/trading-cards"
        },
        {
            imgUrl: "https://opensea.io/static/images/icons/utility-light.svg",
            title: "Utility",
            linkTo: "https://opensea.io/category/utility"
        },
        {
            imgUrl: "https://opensea.io/static/images/icons/virtual-worlds-light.svg",
            title: "Virtual Worlds",
            linkTo: "https://opensea.io/category/virtual-worlds"
        }
    ]
}

export const WithoutIcon = Template.bind({})
WithoutIcon.args = {
    includeImage: false,
    mainTitle: 'All NFTs',
    mainImage: '',
    elements: [
        {
            imgUrl: "",
            title: "All NFTs",
            linkTo: "https://opensea.io/assets"
        },
        {
            imgUrl: "",
            title: "Solana NFTs",
            linkTo: "https://opensea.io/solana-collections"
        },
        {
            imgUrl: "",
            title: "Arts",
            linkTo: "https://opensea.io/category/art"
        },
        {
            imgUrl: "",
            title: "Collectibles",
            linkTo: "https://opensea.io/category/collectibles"
        },
        {
            imgUrl: "",
            title: "Domain Names",
            linkTo: "https://opensea.io/category/domain-names"
        },
        {
            imgUrl: "",
            title: "Music",
            linkTo: "https://opensea.io/category/music"
        },
        {
            imgUrl: "",
            title: "Photography",
            linkTo: "https://opensea.io/category/photography-category"
        },
        {
            imgUrl: "",
            title: "Sports",
            linkTo: "https://opensea.io/category/sports"
        },
        {
            imgUrl: "",
            title: "Trading Cards",
            linkTo: "https://opensea.io/category/trading-cards"
        },
        {
            imgUrl: "",
            title: "Utility",
            linkTo: "https://opensea.io/category/utility"
        },
        {
            imgUrl: "",
            title: "Virtual Worlds",
            linkTo: "https://opensea.io/category/virtual-worlds"
        }
    ]
}