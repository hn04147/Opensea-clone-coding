import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CategoryCard from '../components/CategoryCard'

export default {
    title: 'Component/CategoryCard',
    component: CategoryCard,
    argTypes: {
        imgUrl: {
            description: 'Image URL of category',
            control: 'text'
        },
        title: {
            description: 'Type of category',
            control: 'text'
        }
    }
} as ComponentMeta<typeof CategoryCard>

const Template: ComponentStory<typeof CategoryCard> = (args) => <CategoryCard {...args} />

export const Art = Template.bind({})
Art.args = {
    imgUrl: 'https://opensea.io/static/images/categories/art.png',
    title: 'Art'
}

export const Collectibles = Template.bind({})
Collectibles.args = {
    imgUrl: 'https://opensea.io/static/images/categories/collectibles.png',
    title: 'Collectibles'
}