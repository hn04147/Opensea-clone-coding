import Banner from './Banner'

const BannerSession = () => {
    return (
        <div className='w-full h-[400px] flex justify-center pt-[120px]'>
            <Banner imgUrl={'https://static.opensea.io/solana/home-banner.png'} text={'Solana is in beta on OpenSea'} />
        </div>
    )
}

export default BannerSession