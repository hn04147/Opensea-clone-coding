type NFTCard = {
    imgUrl: string,
    title: string,
    author: string,
    currencyType: string,
    price: string,
    remain: string
}

const NFTCard = ({ imgUrl, title, author, currencyType, price, remain } : NFTCard) => {

    return (
        <div className='relative group min-w-[50px] sm:min-w-[282px] max-w-[430px] m-[8px] grow rounded-[10px] hover:duration-200 cursor-pointer hover:shadow-[0_0_15px_-3px_rgba(0,0,0,0.5)] shadow-[0_0_15px_-3px_rgba(0,0,0,0.2)]'>
            <div className='w-full aspect-[1/1] rounded-t-[10px] bg-cover' style={{ background: `url(${imgUrl})`, backgroundSize: 'cover' }}></div>
            <div className='w-full h-[150px] p-[15px] flex flex-col'>
                <p className='font-bold text-[13px]'>{title}</p>
                <p className='text-[12px]'>{author}</p>
                <p className='text-[13px] mt-[10px] mb-[5px] font-bold'>Price</p>
                <div className='flex flex-row align-center h-[16px]'>
                    <img src={currencyType === 'ETH' ? ETH_IMG : currencyType === 'SOL' ? SOL_IMG : ''} className='h-[16px] w-[16px] mr-[3px]' />
                    <p className='text-[16px] font-bold h-[16px] leading-[16px]'>{price}</p>
                </div>
                <p className='text-[13px] mt-[15px] text-[#707A83]'>{remain}</p>
            </div>
            <div 
                className={`absolute w-full h-[35px] bottom-0 left-0 rounded-b-[10px] text-center text-white leading-[35px] text-[15px] opacity-0 group-hover:opacity-100 ease-out transition-opacity duration-300`} 
                style={{ background: 'rgb(32, 129, 226)' }}
            >
                Buy now
            </div>
        </div>
    )
}

export default NFTCard

const ETH_IMG = 'https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg'
const SOL_IMG = 'https://static.opensea.io/solana-just-s-symbol-colored.svg'