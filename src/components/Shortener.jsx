import Shorten from '../assets/images/bg-shorten-desktop.svg'

export const Shortener = () => {
  return (
    <section className='w-full h-[10rem] mt-[4.5rem] flex justify-center items-center bg-gradient-to-b from-white from-0% via-white via-50% to-gray to-50%'>
      <section className='w-[76%] h-[10rem] bg-no-repeat bg-cover bg-[center_right_1px] bg-darkViolet rounded-[10px]' style={{ backgroundImage: `url(${Shorten})` }}>
        <section className='h-[100%] flex justify-center items-center'>
          <form action="#" className='w-full'>
            <section className='w-full h-[12rem] flex p-[4rem] gap-8 tracking-[1px] max-md:flex-col max-md:h-auto max-md:p-[2rem] max-md:gap-4'>
              <input type="text" placeholder='Shorten a link here...' className='w-full rounded-md pl-[2rem] font-bold text-[18px] outline-none max-md:h-[3rem]' />
              <button className='w-[15rem] bg-cyan rounded-md font-bold text-white text-[18px] hover:bg-cyanWhite max-md:h-[3rem] max-md:w-[auto]'>Shorten it!</button>
            </section>
          </form>
        </section>
      </section>
    </section>
  )
}
