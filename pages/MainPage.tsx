import BannerSession from 'components/BannerSession'
import MainSession_1 from "components/MainSession_1"
import MainSession_2 from 'components/MainSession_2'
import MainSession_3 from "components/MainSession_3"
import MainSession_4 from "components/MainSession_4"
import MainSession_5 from "components/MainSession_5"
import MainSession_6 from "components/MainSession_6"
import MainSession_7 from "components/MainSession_7"
import MainSession_8 from "components/MainSession_8"
import MainSession_9 from "components/MainSession_9"
import Buttons from "components/Buttons"
import Dropdowns from 'components/Dropdowns'

const MainPage = () => {
    return (
        <div className='w-[100%] relative'>
            {/* header */}
            <div className='w-[100%] h-[72px] z-0'></div>
            
            <MainSession_1 />
            <BannerSession />
            <MainSession_8 />
            <MainSession_9 />
            <MainSession_7 />
            <Buttons />
            <Dropdowns />
            <MainSession_2 />
            <MainSession_3 />
            <MainSession_4 />
            <MainSession_6 />
            <MainSession_5 />
        </div>
    )
}

export default MainPage