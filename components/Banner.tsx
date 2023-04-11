import Button from "./Button"

type BannerProps = {
    imgUrl: string,
    text: string
}

const Banner = ({ imgUrl, text } : BannerProps) => {
    return (
        <div className='h-[80px] md:h-[140px] w-[360px] md:w-full md:max-w-[1220px] mx-[40px] bg-cover rounded-[12px]' style={{ backgroundImage: `url(${imgUrl})` }}>
            <div className='w-[40%] md:w-[60%] h-[60px] my-[10px] md:my-[40px] ml-[20px] leading-[16px] md:text-[26px] md:ml-[40px] font-bold flex'>
                <span className='flex self-center'>{text}</span>
            </div>
        </div>
    )
}

export default Banner