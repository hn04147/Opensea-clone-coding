import { listenerCount } from "process"

type CategoryCardProps = {
    imgUrl: string,
    title: string
}

const CategoryCard = ({ imgUrl, title } : CategoryCardProps) => {
    return (
        <div className=''>
            <div className='aspect-[340/246] w-[calc(100%-20px)] max-w-[340px] md:max-w-none md:aspect-none md:w-[180px] xlg:w-[340px] md:h-[160px] xlg:h-[266px] my-[20px] mx-auto md:mx-[10px] flex justify-center cursor-pointer'>
                <div className='w-full md:w-[180px] xlg:w-[340px] max-w-[340px] h-full rounded-[10px] border-solid border-1 border-[#E5E8EB] hover:duration-200 hover:shadow-[0_0_15px_-3px_rgba(0,0,0,0.3)]'>
                    <div className='aspect-[340/184] md:aspect-none w-full md:w-[180px] xlg:w-[340px] md:h-[98px] xlg:h-[184px]'>
                        <img src={imgUrl} className='object-cover rounded-t-[10px]' />
                    </div>
                    <div className='aspect-[340/62] md:aspect-none w-full md:w-[180px] xlg:w-[340px] md:h-[60px] xlg:h-[80px] leading-[60px] xlg:leading-[80px] font-bold text-[23px] md:text-[20px] xlg:text-[26px] text-center'>{title}</div>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard