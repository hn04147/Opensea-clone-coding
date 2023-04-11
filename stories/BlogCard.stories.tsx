import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import BlogCard from '../components/BlogCard'

export default {
    title: 'Component/BlogCard',
    component: BlogCard,
    decorators: [
        (Story) => (
            <div style={{ margin: '0 3rem 0 2rem' }}>
                <Story/>
            </div>
        ),
    ],
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
        date: {
            description: 'The date this blog has been written',
            control: 'text'
        },
        specified: {
            description: 'Main content of this blog',
            control: 'text'
        },
    }
} as ComponentMeta<typeof BlogCard>

const Template: ComponentStory<typeof BlogCard> = (args) => <BlogCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
    imgUrl: "https://opensea.io/blog/wp-content/uploads/2022/06/Email-header-392x260.jpg",
    type: "Safety & Security",
    title: "Important Update on Email Vendor Security Incident",
    date: "June 29, 2022",
    specified: "We recently learned that an employee of Customer.io, our email delivery vendor, misused their employee access to download and share email addresses..."
}

export const Secondary = Template.bind({})
Secondary.args = {
    imgUrl: "https://opensea.io/blog/wp-content/uploads/2022/06/OS_NFTNYC-392x260.jpg",
    type: "Announcement",
    title: "The 2022 NFT Awards",
    date: "June 21, 2022",
    specified: "This year’s awards, sponsored by OpenSea, highlight top NFT creators and collections, community favorites and upcoming trends"
}