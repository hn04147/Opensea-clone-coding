import TopCollectionCard from './TopCollectionCard'

import dummy from '../dummy.json'

type MainSession_2Props = {
    
}

const MainSession_2 = ({} : MainSession_2Props) => {
    const dummyData = dummy.session2

    const RenderTopCollection = (i : number) : any => {
        let result = []
        const from = i * 5
        const to = i * 5 + 5

        for (let i = from; i < to; i++) {
            result.push(
                <TopCollectionCard 
                    key={i}
                    imgUrl={dummyData[i]?.imgUrl}
                    name={dummyData[i]?.name}
                    floorPrice={dummyData[i]?.floorPrice}
                    status={dummyData[i]?.status}
                    ratio={dummyData[i]?.ratio}
                    totalPrice={dummyData[i]?.totalPrice}
                    idx={i}
                    greenDot={dummyData[i]?.greenDot}
                    checked={dummyData[i]?.checked}
                    currencyType={dummyData[i]?.currencyType}
                />
            )
        }

        return result
    }

    return (
        <div className='h-fit w-full my-[100px]'>
            <div className='h-[100px] w-full'>
                <div className='h-[60px] w-full my-[20px] mx-auto flex items-center text-[26px] font-bold text-center justify-center'>
                    {/* <a>Top collections over&nbsp;</a>
                    <a className='text-[#2081E2]'>last 24 hours</a> */}
                </div>
            </div>
            <div className='flex w-full xlg:w-[1190px] mx-auto flex-col xlg:flex-row'>
                {[0, 1, 2].map((i, idx) => <div key={`${i}_${idx}`} className='w-[440px] mx-auto'>{RenderTopCollection(i)}</div>)}
            </div>
        </div>
    )
}

export default MainSession_2