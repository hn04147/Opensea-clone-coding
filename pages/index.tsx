import type { GetServerSideProps, NextPage } from "next"
import { useTranslation } from "react-i18next"

import Header from "components/Header"
import MainPage from './MainPage'
import Footer from 'components/Footer'

const Home: NextPage = () => {
    const { t } = useTranslation("initial")

    return (
        <div className='w-screen h-screen relative' style={{ overflowX: 'overlay' }}>
            <Header />
            <MainPage />
            <Footer />
        </div>
    )
}

export default Home
