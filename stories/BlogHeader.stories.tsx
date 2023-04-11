import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import BlogHeaderCard from '../components/BlogHeaderCard'

export default {
    title: 'Component/BlogHeaderCard',
    component: BlogHeaderCard,
    argTypes: {
        imgUrl: {
            description: 'The image URL of preview image of this blog',
            control: 'text'
        },
        type: {
            description: 'What kind of this blog is, ex) announcement',
            control: 'text'
        },
        title: {
            description: 'The title of this blog card',
            control: 'text'
        },
        specified: {
            description: 'Main content of this blog',
            control: 'text'
        },
    }
} as ComponentMeta<typeof BlogHeaderCard>

const Template: ComponentStory<typeof BlogHeaderCard> = (args) => <BlogHeaderCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
    imgUrl: "https://opensea.io/blog/wp-content/uploads/2022/05/00Lighthouse-Header-1024x683.jpg",
    type: "Announcement",
    title: "Our Efforts to Curb Fraud and Plagiarism – and What’s Next",
    specified: "I want to share my perspective on OpenSea’s efforts to protect against plagiarism, IP infringement, and fraud. We at OpenSea"
}