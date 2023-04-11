import ExploreCard from './ExploreCard'
import Button from './Button'

import dummy from '../dummy.json'

type MainSession_1Props = {
    
}

const MainSession_1 = ({ } : MainSession_1Props) => {
    const dummydata = dummy.session1[4]

    return (
        <div className='relative'>
            <div className={`notable-drop-session w-full h-[780px] opacity-40 blur-[12px] bg-cover`} style={{ backgroundImage: `url(${dummydata?.imgUrl})` }} >
                <div className='absolute top-0 left-0 w-[100%] h-[780px] opacity-100 bg-gradient-to-b from-transparent to-white'></div>
            </div>
            <div className='absolute left-0 top-0 w-full h-[780px]'>
                <div className='h-[300px] w-full pt-[30px]'>
                    {/* <div className='w-full flex justify-center'>
                        <span className='w-[500px] text-center text-[35px] font-bold leading-[35px]'>Discover, collect, and sell extraordinary NFTs</span>
                    </div>
                    <div className='w-full flex justify-center pt-[25px]'>
                        <span className='w-[450px] text-center text-[19px] leading-[24px]'>OpenSea is the world's first and largest NFT marketplace</span>
                    </div>
                    <div className=''></div> */}
                </div>
                <ExploreCard imgUrl={dummydata?.imgUrl} profileUrl={dummydata?.profileUrl} title={dummydata?.title} name={dummydata?.name} />
            </div>
        </div>
    )
}

export default MainSession_1