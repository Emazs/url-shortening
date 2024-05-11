export const Cards = ({title, paragraph, icon}) => {
    return (
        <section className='bg-white w-[350px] h-[265px] rounded-[5px] pl-[30px] pr-[25px]'>
            <section className='bg-darkViolet w-[90px] h-[90px] rounded-full flex justify-center items-center relative top-[-43px] max-md:left-[100px]'>
                <img src={icon} alt="Icono de grafico" className='w-[40px]' />
            </section>

            <h3 className='text-[20px] font-bold text-veryDarkViolet'>{title}</h3>
            <p className='text-[16px] mt-[1rem] text-grayishViolet'>{paragraph}</p>

        </section>
    )
}
