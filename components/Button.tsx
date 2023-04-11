type ButtonProps = {
    text: string,
    size? : string,
    outline? : boolean,
    handleClick : any
}

const Button = ({ text, size = 'md', outline = false, handleClick } : ButtonProps) => {
    const buttonSize : { [key: string]: string } = {
        'sm': 'w-[112px]',
        'md': 'w-[142px]',
        'lg': 'w-[167px]',
        'free': 'w-fit'
    }
    const buttonOutline: string[] = [
        'bg-[#2081E2] text-white border-2 border-solid border-[#2081E2] hover:opacity-90',
        'bg-white text-[#2081E2] border-2 border-solid border-[#E5E8EB]'
    ]

    return (
        <div className={`${buttonSize[size]} ${buttonOutline[Number(outline)]} px-[20px] h-[60px] cursor-pointer rounded-[12px] text-center leading-[60px] font-bold text-[16px] hover:duration-100 hover:shadow-[0_0_15px_-3px_rgba(0,0,0,0.3)]`}>
            {text}
        </div>
    )
}

export default Button