type BlogHeaderCardProps = {
    imgUrl: string,
    type: string,
    title: string,
    specified: string
}

const BlogHeaderCard = ({ imgUrl, type, title, specified } : BlogHeaderCardProps) => {
    return (
        <div className='w-[calc(100%-30px)] sm:w-[510px] md:w-[690px] lg:w-[930px] xlg:w-[calc(100%-30px)] xlg:max-w-[1270px] h-fit flex flex-col sm:flex-row rounded-[10px] hover:duration-300 hover:shadow-[0_0_15px_-3px_rgba(0,0,0,0.3)] border-1 border-solid border-[#E5E8EB]'>
            <div className='w-full sm:w-[40%] lg:w-[50%] h-inherit'>
                <img className='w-inherit h-full object-cover rounded-t-[10px] sm:rounded-tr-none sm:rounded-l-[10px]' src={imgUrl} />
            </div>
            <div className='w-full sm:w-[60%] lg:w-[50%] h-inherit rounded-r-[10px] flex bg-white'>
                <div className='w-fit h-fit px-[60px] py-[20px] self-center'>
                    <p className={`p-[5px] w-fit font-bold text-[14px] rounded-[3px] text-white bg-[${type === 'Announcement' ? '#1868B7' : '#8A939B'}]`}>{type}</p>
                    <span className='text-[20px] lg:text-[34px] font-bold block leading-[22px] lg:leading-[36px] my-[15px]'>{title}</span>
                    <span className='text-[16px] lg:text-[18px] leading-[12px] lg:leading-[16px]'>{specified}</span>
                    <div className='mt-[30px] h-[50px] w-full sm:w-[200px] rounded-[5px] text-center bg-[#2081E2]'>
                        <p className='text-white font-bold leading-[50px] text-[17px]'>View Post</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogHeaderCard