import CategoryCard from "./CategoryCard"

import dummy from '../dummy.json'

const MainSession_6 = () => {
    const dummyData = dummy.session6

    return (
        <div className='w-full h-fit flex justify-center mb-[150px]'>
            <div className='w-full max-w-[400px] md:w-[400px] xlg:w-[1080px] xlg:max-w-[1080px] flex-col flex md:flex-row flex-wrap'>
                {dummyData?.map((i, idx) => (
                    <CategoryCard 
                        key={idx}
                        imgUrl={i?.imgUrl}
                        title={i?.title}
                    />
                ))}
            </div>
        </div>
    )
}

export default MainSession_6