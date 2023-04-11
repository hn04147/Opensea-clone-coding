import NFTCard from './NFTCard'

import dummy from '../dummy.json'

const MainSession_8 = () => {
    const dummyData = dummy.session8

    return (
        <div className='w-[calc(100%-40px)] h-fit overflow-hidden flex flex-wrap mx-auto justify-center'>
            {dummyData.slice(2, 3)?.map((i, idx) => <NFTCard 
                key={idx}
                imgUrl={i?.imgUrl}
                title={i?.title}
                author={i?.author}
                currencyType={i?.currencyType}
                price={i?.price}
                remain={i?.remain}
            />)}
        </div>
    )
}

export default MainSession_8