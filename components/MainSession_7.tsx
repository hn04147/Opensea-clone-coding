import NotableDropCard from "./NotableDropCard"

import dummy from '../dummy.json'

const MainSession_7 = () => {
    const dummyData = dummy.session7

    return (
        <div className='w-full h-[1000px] pt-[100px]'>
            <NotableDropCard 
                imgUrl={dummyData[1].imgUrl}
                title={dummyData[1].title}
                content={dummyData[1].content}
            />
        </div>
    )
}

export default MainSession_7