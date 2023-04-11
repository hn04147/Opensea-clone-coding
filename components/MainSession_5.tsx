import BlogHeaderCard from './BlogHeaderCard'
import BlogCard from './BlogCard'

import dummy from '../dummy.json'

type MainSession_5Props = {

}

const MainSession_5 = ({  } : MainSession_5Props) => {
    const blogHeader = dummy.session5.blogHeader
    const blogs = dummy.session5.blogs

    return (
        <div className='w-full pb-[50px]' style={{ background: 'rgb(244, 251, 254)' }}>
            <div className='w-full flex justify-center py-[100px]'>
                <BlogHeaderCard 
                    imgUrl={blogHeader[0]?.imgUrl}
                    type={blogHeader[0]?.type}
                    title={blogHeader[0]?.title}
                    specified={blogHeader[0]?.specified}
                />
            </div>
            <div className='w-full max-w-[1330px] mb-[100px] flex-wrap flex justify-center mx-auto'>
                {blogs?.map((i, idx) => (
                    <BlogCard 
                        key={idx}
                        imgUrl={i?.imgUrl}
                        type={i?.type}
                        title={i?.title}
                        date={i?.date}
                        specified={i?.specified}
                    />
                ))}
            </div>
        </div>
    )
}

export default MainSession_5