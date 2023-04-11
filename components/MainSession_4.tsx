import ExplainCard from './ExplainCard'

import dummy from '../dummy.json'

type MainSession_4Props = {

}

const MainSession_4 = ({  } : MainSession_4Props) => {
    const dummyData = dummy?.session4

    return (
        <div className='w-full my-[100px] px-[50px] flex flex-wrap justify-center'>
            <div className='h-[100px] w-full'>
                <div className='h-[60px] w-[340px] mb-[20px] mx-auto flex items-center text-[26px] font-bold text-center justify-center'>
                    {/* <a>Create and sell your NFTs</a> */}
                </div>
            </div>
            {dummyData?.map((i, idx) => (
                <ExplainCard
                    key={idx}
                    imgUrl={i?.imgUrl}
                    title={i?.title}
                    specified={i?.specified}
                />
            ))}
        </div>
    )
}

export default MainSession_4