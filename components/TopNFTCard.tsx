type TopNFTCardProps = {
    idx: number,
    imgUrl: string,
    title: string,
    currencyType: string,
    price: string,
    status: number,
    ratio: string,
    sevenDayStatus: number,
    sevenDayRatio: string,
    floorPrice: string,
    owners: string,
    items: string
}

const TopNFTCard = ({ idx, imgUrl, title, currencyType, price, status, ratio, sevenDayStatus, sevenDayRatio, floorPrice, owners, items } : TopNFTCardProps) => {
    return (
        <div className='w-full max-w-[900px] h-[120px] xlg:w-full xlg:max-w-[1240px] xlg:h-[85px] mx-[15px] border-b-1 border-b-solid border-b-[#E5E7EB] cursor-pointer hover:duration-200 hover:shadow-[0_0_15px_-3px_rgba(0,0,0,0.3)] hover:rounded-[10px] p-[16px] flex justify-between items-center'>
            <div className='flex items-center xlg:w-[33%]'>
                <div className='text-[14px] font-bold'>{idx}</div>
                <div className='h-[50px] w-[50px] mx-[10px]'>
                    <img src={imgUrl} className='h-full w-full rounded-[50%] cover border-1 border-solid border-[#E5E7EB]' />
                </div>
                <div className='flex flex-col'>
                    <div className='text-[16px] font-bold'>{title}</div>
                    <div className='xlg:hidden text-[#707A83] text-[12px] mt-[5px]'>+ More</div>
                </div>
            </div>
            <div className='xlg:hidden'>
                <div className='flex items-center'>
                    <div className='h-[14px] w-[14px]'>
                        <img src={currencyType === 'ETH' ? ETH_IMG : currencyType === 'SOL' ? SOL_IMG : ''} className='w-full h-full cover' />
                    </div>
                    <div className='h-[14px] leading-[16px] text-[14px] ml-[5px] font-semibold'>{price}</div>
                </div>
                <div className='float-right text-[14px] font-semibold mt-[4px]' style={{ color: status === 1 ? '#34C77B' : status === -1 ? '#EB5757' : '#707A83' }}>{status === 1 ? '+' : '-'}{status !== 0 ? `${ratio}%` : '--'}</div>
            </div>
            <div className='hidden xlg:flex h-full w-[67%]'>
                <div className='w-[16.7%] h-full flex items-center justify-end'>
                    <div className='h-[14px] w-[14px]'>
                        <img src={currencyType === 'ETH' ? ETH_IMG : currencyType === 'SOL' ? SOL_IMG : ''} className='w-full h-full cover' />
                    </div>
                    <div className='h-[16px] leading-[16px] text-[16px] ml-[5px] font-semibold'>{price}</div>
                </div>
                <div className='w-[16.7%] h-full flex justify-end items-center'>
                    <div className='h-[16px] text-[16px] leading-[16px] font-semibold' style={{ color: status === 1 ? '#34C77B' : status === -1 ? '#EB5757' : '#707A83' }}>{status === 1 ? '+' : '-'}{status !== 0 ? `${ratio}%` : '--'}</div>
                </div>
                <div className='w-[16.7%] h-full flex justify-end items-center'>
                    <div className='h-[16px] text-[16px] leading-[16px] font-semibold' style={{ color: sevenDayStatus === 1 ? '#34C77B' : sevenDayStatus === -1 ? '#EB5757' : '#707A83' }}>{sevenDayStatus === 1 ? '+' : '-'}{sevenDayStatus !== 0 ? `${sevenDayRatio}%` : '--'}</div>
                </div>
                <div className='w-[16.6%] h-full flex items-center justify-end'>
                    <div className='h-[14px] w-[14px]'>
                        {floorPrice === '' ? '' : <img src={currencyType === 'ETH' ? ETH_IMG : currencyType === 'SOL' ? SOL_IMG : ''} className='w-full h-full cover' />}
                    </div>
                    <div className='h-[16px] leading-[16px] text-[16px] ml-[5px] font-semibold'>{floorPrice === '' ? '---' : floorPrice}</div>
                </div>
                <div className='w-[16.6%] h-full flex items-center justify-end'>
                    <div className='h-[16px] leading-[16px] text-[16px] ml-[5px] font-semibold'>{owners}</div>
                </div>
                <div className='w-[16.6%] h-full flex items-center justify-end'>
                    <div className='h-[16px] leading-[16px] text-[16px] ml-[5px] font-semibold'>{items}</div>
                </div>
            </div>
        </div>
    )
}

export default TopNFTCard

const ETH_IMG = 'https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg'
const SOL_IMG = 'https://static.opensea.io/solana-just-s-symbol-colored.svg'