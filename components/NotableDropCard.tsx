type NotableDropCardProps = {
    imgUrl: string,
    title: string,
    content: string
}

const NotableDropCard = ({ imgUrl, title, content } : NotableDropCardProps) => {
    return (
        <div className='w-full'>
            <div className='aspect-[340/560] md:aspect-[380/600] max-w-[340px] md:max-w-[380px] mx-auto w-[calc(100%-30px)] md:w-[380px] md:h-[600px]'>
                <div className='w-full h-full flex flex-col justify-end bg-cover rounded-[10px] hover:duration-200 hover:shadow-[0_0_15px_-3px_rgba(0,0,0,0.5)] cursor-pointer relative'>
                    <img className='absolute w-full h-full cover rounded-[10px]' src={imgUrl} />
                    <div className='h-[30px] w-[54px] bg-[#FFFFFF22] absolute top-[15px] right-[15px] z-10 text-white rounded-[10px] border-solid border-2 border-white leading-[28px] text-center text-[14px] font-bold'>Live</div>
                    <div className='w-full text-white relative z-10 px-[20px] text-[20px] font-bold'>{title}</div>
                    <div className='w-full text-white relative z-10 px-[20px] text-[15px] mb-[20px] mt-[5px]'>{content}</div>
                </div>
            </div>
        </div>
    )
}

export default NotableDropCard