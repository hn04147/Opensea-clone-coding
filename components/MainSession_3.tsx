import { useState } from 'react'

import TrendingCard from './TrendingCard'

import dummy from '../dummy.json'

type MainSession_3Props = {

}

const MainSession_3 = ({  } : MainSession_3Props) => {
    const dummyData = dummy.session3

    const [currentSelected, setCurrentSelected] = useState(0)

    return (
        <div className='h-[870px] w-full pt-[130px]' style={{ background: 'rgb(244, 251, 254)' }}>
            <div className='h-[100px] w-full'>
                <div className='h-[60px] w-[340px] my-[20px] mx-auto flex items-center text-[26px] font-bold text-center justify-center'>
                    {/* <a>Trending in&nbsp;</a>
                    <a className='text-[#2081E2]'>all categories</a> */}
                </div>
            </div>
            <div className='h-[470px] w-[360px] m-auto'>
                {/* <div className='carousel w-full'>
                    {dummyData?.map((i, idx) => (
                        <div id={`item${idx+1}`} className='carousel-item' key={`trending_card_${idx}_${i?.title}`}>
                            <TrendingCard
                                imgUrl={i?.imgUrl}
                                profileUrl={i?.profileUrl}
                                title={i?.title}
                                author={i?.author}
                                titleChecked={i?.titleChecked}
                                authorChecked={i?.authorChecked}
                                specified={i?.specified}
                            />
                        </div>
                    ))}
                </div>
                <div className='flex justify-center w-full py-2 gap-2'>
                    {dummyData?.map((i, idx) => (
                        <a 
                            key={`dots_${idx}_${i?.title}`}
                            href={`#item${idx+1}`} 
                            className='h-[9px] w-[9px] rounded-[5px] mx-[7px]' 
                            style={{ 
                                background: 'rgb(32, 129, 226)', 
                                opacity: currentSelected === idx ? 1 : 0.3
                            }}
                            onClick={() => setCurrentSelected(idx)}
                        />
                    ))}
                </div> */}
                <TrendingCard
                    imgUrl={dummyData[3]?.imgUrl}
                    profileUrl={dummyData[3]?.profileUrl}
                    title={dummyData[3]?.title}
                    author={dummyData[3]?.author}
                    titleChecked={dummyData[3]?.titleChecked}
                    authorChecked={dummyData[3]?.authorChecked}
                    specified={dummyData[3]?.specified}
                />
            </div>
        </div>
    )
}

export default MainSession_3