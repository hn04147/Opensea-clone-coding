import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

import { MdKeyboardArrowDown } from 'react-icons/md'

type DropdownProps = {
    includeImage: boolean,
    mainTitle: string,
    mainImage: string,
    elements: {
        imgUrl: string,
        title: string,
        linkTo: string
    }[]
}

const Dropdown = ({ includeImage, mainTitle, mainImage, elements } : DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const btnRef = useRef<null | HTMLHeadingElement>(null)

    useEffect(() => {
        const clickModalOutside = (event : any) => {
            if (isOpen && !btnRef.current?.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', clickModalOutside)
    
        return () => {
            document.removeEventListener('mousedown', clickModalOutside)
        }
    })
    

    const RenderDropdownElement = (includeImage : boolean, imgUrl : string, title : string, linkTo : string, idx : number) : any => {
        return (
            <div key={`${idx}_${title}`} className='h-[60px] w-full border-b-1 border-b-solid border-b-[rgb(229, 232, 235)] py-[10px] px-[24px] hover:shadow-[0_0_10px_-3px_rgba(0,0,0,0.3)] hover:bg-slate-50 hover:duration-300 flex justify-between items-center'>
                <Link href={linkTo}>
                    <div className='flex items-center'>
                        {includeImage && <div className='h-[24px] w-[24px] mr-[16px]'>
                            <img src={imgUrl} className='' />
                        </div>}
                        <div className='text-[14px] font-semibold'>{title}</div>
                    </div>
                </Link>
            </div>
        )
    }

    return (
        <div 
            className={`w-[240px] h-[50px] rounded-[12px] bg-white border-2 border-solid border-[${isOpen ? '#707A83' : 'rgb(229, 232, 235)'}] py-[10px] px-[24px] cursor-pointer flex justify-between items-center relative hover:duration-300 hover:shadow-[0_0_10px_-3px_rgba(0,0,0,0.2)]`}
            style={{ border: `1px solid ${isOpen ? '#707A83' : 'rgb(229, 232, 235'}` }}
            onClick={() => setIsOpen(!isOpen)}
            onBlur={() => setIsOpen(false)}
            ref={btnRef}
        >
            <div className='flex items-center'>
                {includeImage && <div className='h-[24px] w-[24px] mr-[16px]'>
                    <img src={mainImage} className='' />
                </div>}
                <div className='text-[14px] font-semibold'>{mainTitle}</div>
            </div>
            <div className='h-[24px] w-[24px]'>
                <MdKeyboardArrowDown className='h-full w-full' style={{ color: '#8A939B' }} />
            </div>

            {isOpen && <div className='absolute z-10 top-[49px] bg-white left-[-2px] w-[240px] overflow-y-scroll overflow-x-hidden max-h-[390px] shadow-[0_0_10px_-3px_rgba(0,0,0,0.3)] rounded-[12px]'>
                {elements?.map((i, idx) => RenderDropdownElement(includeImage, i?.imgUrl, i?.title, i?.linkTo, idx))}
            </div>}
        </div>
    )
}

export default Dropdown