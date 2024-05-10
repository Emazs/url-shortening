export const Button = ({ title, width, height }) => {
    return (
        <>
            <button className={`font-bold bg-cyan text-white w-[${width}rem] h-[${height}rem] rounded-full hover:bg-cyanWhite`}>
                {title}
            </button>
        </>
    )
}
