type BlogCardProps = {
    imgUrl: string,
    type: string,
    title: string,
    date: string,
    specified: string
}

const BlogCard = ({ imgUrl, type, title, date, specified } : BlogCardProps) => {
    return (
        <div className='group h-fit sm:h-[630px] w-full sm:w-[238px] md:w-[328px] lg:w-[290px] xlg:w-[calc(33.3%-30px)] xlg:max-w-[401px] m-[15px] rounded-[10px] bg-white hover:duration-300 hover:shadow-[0_0_15px_-3px_rgba(0,0,0,0.3)] overflow-hidden border-1 border-solid border-[#E5E8EB]'>
            <div className='overflow-hidden'>
                <div className='h-[260px] sm:h-[140px] md:h-[220px] lg:h-[190px] xlg:h-[268px] w-full rounded-t-[10px] relative group-hover:scale-105 group-hover:duration-[600ms] overflow-hidden cursor-pointer'>
                    <img src={imgUrl} className='h-full w-full rounded-t-[10px] cover overflow-hidden' />
                    <div className='absolute top-0 left-0 h-full w-full rounded-t-[10px] bg-black opacity-0 group-hover:opacity-30 group-hover:duration-300'></div>
                </div>
            </div>
            <div className='w-full p-[25px]'>
                <p className='p-[5px] font-bold text-[13px] w-fit rounded-[3px] text-white' style={{ background: type === 'Announcement' ? '#1868B7' : '#8a939b' }}>{type}</p>
                <span className='text-[24px] font-bold block leading-[30px] my-[15px]'>{title}</span>
                <p className='text-[#8A939B] text-[14px]'>{date}</p>
                <span className='block text-[18px] leading-[26px] pt-[20px]'>{specified}</span>
            </div>
        </div>
    )
}

export default BlogCard