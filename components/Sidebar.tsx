import { MdOutlineExplore, MdOutlineLeaderboard, MdOutlineLibraryBooks, MdNavigateNext } from 'react-icons/md'

const Sidebar = ({ show } : { show: boolean }) => {
    const menuComponent : { [key: string]: any } = {
        'Explore': <MdOutlineExplore className='h-[32px] w-[32px]' />,
        'Stats': <MdOutlineLeaderboard className='h-[32px] w-[32px]' />,
        'Resources': <MdOutlineLibraryBooks className='h-[32px] w-[32px]' />
    }

    const SidebarComponent = (title : string, idx : number) => {
        return (
            <div key={`${idx}_${title}`} className='h-[72px] w-full py-[10px] px-[20px] cursor-pointer flex justify-between text-[#04111d9d] hover:text-[#04111D] hover:bg-[#00000009]'>
                <div className='flex'>
                    <div className='h-[32px] w-[32px] my-[10px]'>
                        {menuComponent[title]}
                    </div>
                    <div className='h-[52px] w-[200px] leading-[52px] text-[16px] text-left font-bold'>
                        <a className='pl-[10px]'>{title}</a>
                    </div>
                </div>
                <div className='h-[52px]'>
                    <MdNavigateNext className='h-[24px] w-[24px] my-[14px]' />
                </div>
            </div>
        )
    }

    return (
        <div className={`fixed ${!show ? 'lg:translate-x-[400px]' : 'translate-x-0'} ${!show ? 'translate-x-[100vw]' : 'translate-x-0'} duration-500 right-[0px] top-[72px] h-[calc(100%-72px)] w-full lg:w-[400px] bg-white shadow-[inset_0_4px_6px_0px_rgba(0,0,0,0.1)] z-20`}>
            {['Explore', 'Stats', 'Resources'].map((i, idx) => SidebarComponent(i, idx))}
        </div>
    )
}

export default Sidebar