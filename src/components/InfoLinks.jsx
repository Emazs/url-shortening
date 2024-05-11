import { Cards } from './Cards'
import Brand from '../assets/images/icon-brand-recognition.svg'
import Detailed from '../assets/images/icon-detailed-records.svg'
import Fully from '../assets/images/icon-fully-customizable.svg'

export const InfoLinks = () => {
    return (
        <section className='bg-gray'>
            <section className='pt-[7.5rem] font-bold flex flex-col items-center text-center max-md:pt-[4.5rem] max-md:px-[3rem] '>
                <h2 className='text-[39px] text-veryDarkViolet max-md:text-[33px] max-sm:text-[30px]'>Advanced Statistics</h2>
                <p className='text-grayishViolet text-[16px] max-w-[530px] tracking-[1px] mt-3 max-md:text-[13px]'>
                    Track how your links are performing across the web with our advanced statics dashboard.
                </p>
            </section>

            <section className='min-h-[32rem] pb-[10rem] flex justify-center flex-nowrap items-stretch mt-[7rem] gap-6 max-md:pb-[5rem] max-xl:flex-wrap max-xl:gap-y-[4rem]'>
                <section className='self-start '>
                    <Cards title={"Brand Recognition"} paragraph={`Boost your band recognition with each click. generic links don't mean a thing. Branded links help instill confidence in your content.`} icon={Brand} />
                </section>

                <section className='self-center'>
                    <Cards title={"Detailed Recordsn"} paragraph={`Gain insights into who is clicking your links. Knowing when and where peopla engage with your content helps inform better decisions.`} icon={Detailed} />
                </section>

                <section className='self-end'>
                    <Cards title={"Fully Customizable"} paragraph={`Improve brand awareness and content discoverability through customizable links, supercharging audience engagement`} icon={Fully} />
                </section>
            </section>
        </section>
    )
}
