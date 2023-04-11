import { useState, useEffect, useRef } from "react"
import Sidebar from "./Sidebar"

import { MdMenu, MdClear } from 'react-icons/md'

const Header = () => {
    const [sidebar, setSidebar] = useState<boolean>(false)
    const btnRef = useRef<null | HTMLDivElement>(null)

    useEffect(() => {
        const clickModalOutside = (event : any) => {
            if (sidebar && !btnRef.current?.contains(event.target)) {
                setSidebar(false)
            }
        }
        
        document.addEventListener('mousedown', clickModalOutside)
    
        return () => {
            document.removeEventListener('mousedown', clickModalOutside)
        }
    })

    return (
        <div className={`fixed top-0 left-0 header ${sidebar ? 'w-full' : 'w-[calc(100%-14px)]'} h-[72px] bg-white z-30 shadow-md leading-[72px] text-[50px] text-center`}>
            <div className='relative z-20' ref={btnRef} onBlur={() => setSidebar(false)}>
                <Sidebar show={sidebar} />
            </div>
            <div className='h-[42px] m-[15px] flex justify-between'>
                <div className='flex'>
                    <div className='h-[42px] w-[42px] bg-cover' style={{ backgroundImage: `url(${OPENSEA_LOGO})` }}></div>
                    <div className='h-[42px] w-[120px] text-[22px] font-bold leading-[42px]'>OpenSea</div>
                    <div className='h-[42px] items-center'>
                    </div>
                </div>
                <div className='h-[42px] w-[42px] cursor-pointer' onClick={() => setSidebar(!sidebar)}>
                    {sidebar ? <MdClear className='h-full w-full' /> : <MdMenu className='h-full w-full' />}
                </div>
            </div>
        </div>
    )
}

export default Header

const OPENSEA_LOGO = 'https://opensea.io/static/images/logos/opensea.svg'