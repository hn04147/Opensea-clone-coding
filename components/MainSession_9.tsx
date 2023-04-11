import TopNFTCard from './TopNFTCard'

import dummy from '../dummy.json'

const MainSession_9 = () => {
    const dummyData = dummy.session9

    const selectionRow = 'w-[16.6%] h-full flex items-center justify-end'

    return (
        <div className='w-full h-[1000px] mt-[200px] flex justify-center flex-col items-center'>
            <div className='xlg:hidden w-full max-w-[900px] xlg:w-full xlg:max-w-[1240px] mx-[15px] border-b-1 border-b-solid border-b-[#E5E7EB]'></div>
            <div className='hidden text-[16px] font-semibold xlg:flex w-full max-w-[1240px] h-[85px] mx-[15px] border-b-1 border-b-solid border-b-[#E5E7EB] p-[16px] justify-between items-center'>
                <div className='w-[33%]'>Collection</div>
                <div className='flex h-full w-[67%]'>
                    <div className={`${selectionRow}`}>Volume</div>
                    <div className={`${selectionRow}`}>24h %</div>
                    <div className={`${selectionRow}`}>7d %</div>
                    <div className={`${selectionRow}`}>Floor Price</div>
                    <div className={`${selectionRow}`}>Owners</div>
                    <div className={`${selectionRow}`}>Items</div>
                </div>
            </div>
            {dummyData?.map((i, idx) => (
                <TopNFTCard
                    key={idx}
                    idx={idx+1}
                    imgUrl={i?.imgUrl}
                    title={i?.title}
                    currencyType={i?.currencyType}
                    price={i?.price}
                    status={i?.status}
                    ratio={i?.ratio}
                    sevenDayStatus={i?.sevenDayStatus}
                    sevenDayRatio={i?.sevenDayRatio}
                    floorPrice={i?.floorPrice}
                    owners={i?.owners}
                    items={i?.items}
                />
            ))}
        </div>
    )
}

export default MainSession_9