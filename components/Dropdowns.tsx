import Dropdown from "./Dropdown"

import dummy from '../dummy.json'

const Dropdowns = () => {
    const dummyData = dummy.dropdown

    return (
        <div className='h-[200px] w-full flex justify-center flex-col items-center'>
            <Dropdown 
                includeImage={dummyData?.includeImage}
                mainTitle={dummyData?.mainTitle}
                mainImage={dummyData?.mainImage}
                elements={dummyData?.elements}
            />
            <div className='h-[50px] w-full'></div>
            <Dropdown 
                includeImage={false}
                mainTitle={dummyData?.mainTitle}
                mainImage={dummyData?.mainImage}
                elements={dummyData?.elements}
            />
        </div>
    )
}

export default Dropdowns