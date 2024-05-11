import { Button } from "./Button"
import Ilustration from '../assets/images/illustration-working.svg'

export const Hero = () => {
    return (
        <section className='w-full pl-[10.5rem]  pt-[1.5rem] flex max-lg:flex-col-reverse max-lg:pr-[10.5rem] max-md:gap-5 max-md:pl-[6rem] max-md:pr-[6rem] max-sm:pl-[3rem] max-sm:pr-[3rem]'>
            <section className='flex flex-col justify-center'>
                <section>
                    <h1 className='text-[65px] font-bold max-w-[1030px] line-clamp-3 leading-[80px] max-lg:text-center max-md:text-[50px] max-sm:text-[30px] max-md:leading-[60px] max-sm:leading-[30px]'>More than just shorter links</h1>
                    <p className='text-pretty text-[18px] tracking-[1.2px] font-[600] w-fit text-grayishViolet max-w-[535px] max-sm:text-[14px] max-lg:max-w-none max-lg:mt-5 leading-[29px] max-lg:text-center max-md:text-[15px]'>Build your brand{"'"}s recognition and get detailed insight on how your links are performing</p>
                </section>

                <section className="mt-[3rem] max-[1023px]:text-center">
                    <Button title={"Get Started"} width={12} height={3} className="w-[12rem] h-[3rem]" />
                </section>
            </section>

            <section className='w-full'>
                <div className="max-lg:bg-[center_center] min-h-[23rem] bg-[length:auto_95%] bg-[center_right_-6rem] min-[1310px]:min-h-[30rem] bg-no-repeat max-lg:min-h-[18rem] max-md:min-h-[15rem] max-sm:min-h-[12rem]" style={{ backgroundImage: `url(${Ilustration})` }}></div>
            </section>
        </section>
    )
}
