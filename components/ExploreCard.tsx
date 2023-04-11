type ExploreCardProps = {
    imgUrl: string,
    profileUrl: string,
    title: string,
    name: string
}

const ExploreCard = ({ imgUrl, profileUrl, title, name } : ExploreCardProps) => {
    return (
        <div className='h-[330px] w-[355px] lg:h-[430px] lg:w-[480px] shadow-md bg-white rounded-[10px] mx-auto'>
            <div className='h-[255px] w-full lg:h-[360px] rounded-t-[10px]'>
                <img src={imgUrl} className='h-full w-full rounded-t-[10px] cover' />
            </div>
            <div className='h-[75px] w-[355px] rounded-b-[10px] flex p-[17px]'>
                <div className='h-[40px] w-[40px] rounded-[20px] bg-cover mr-[20px]'>
                    <img src={profileUrl} className='h-[40px] w-[40px] rounded-[20px] cover' />
                </div>
                <div className='w-[227px]'>
                    <div className='h-[18px] text-[14px] font-semibold'>{title}</div>
                    <div className='h-[18px] text-[14px] font-medium'>
                        <a>by&nbsp;</a>
                        <a className='text-[#2081E2]'>{name}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreCard