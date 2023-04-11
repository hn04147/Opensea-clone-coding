type ExplainCardProps = {
    imgUrl: string,
    title: string,
    specified: string
}

const ExplainCard = ({ imgUrl, title, specified } : ExplainCardProps) => {
    return (
        <div className={`min-h-[224px] w-[270px] mx-[25px] px-[15px] mb-[40px] pb-[15px]`}>
            <div className='w-full flex justify-center'>
                <img src={imgUrl} className='h-[40px] w-[40px]' />
            </div>
            <div className='text-center my-[15px] font-bold text-[18px]'>{title}</div>
            <div className='text-center'>
                <span className='text-[16px]'>{specified}</span>
            </div>
        </div>
    )
}

export default ExplainCard