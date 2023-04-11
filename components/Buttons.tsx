import Button from './Button'

const Buttons = () => {
    return (
        <div className='w-full h-[500px]'>
            <div className='w-[500px] mx-auto'>
                <div className='flex mb-[10px]'>
                    <Button text='small' size='sm' handleClick={() => {}} />
                    <div className='w-[20px]'></div>
                    <Button text='small' size='sm' outline handleClick={() => {}} />
                </div>
                <div className='flex mb-[10px]'>
                    <Button text='medium' handleClick={() => {}} />
                    <div className='w-[20px]'></div>
                    <Button text='medium' outline handleClick={() => {}} />
                </div>
                <div className='flex mb-[10px]'>
                    <Button text='large' size='lg' handleClick={() => {}} />
                    <div className='w-[20px]'></div>
                    <Button text='large' size='lg' outline handleClick={() => {}} />
                </div>
                <div className='flex'>
                    <Button text='This is free size button' size='free' handleClick={() => {}} />
                    <div className='w-[20px]'></div>
                    <Button text='This is free size button' outline size='free' handleClick={() => {}} />
                </div>
            </div>
        </div>
    )
}

export default Buttons