import { Button } from "./Button"
import BosstImage from '../assets/images/bg-boost-desktop.svg'

export const Boost = () => {
    return (
        <section className='flex justify-center p-[4rem] bg-darkViolet bg-no-repeat bg-cover text-center' style={{ backgroundImage: `url(${BosstImage})` }}>
            <section>
                <h3 className='text-[40px] font-bold text-white mb-4 max-md:text-[25px]'>Boost your links today</h3>
                <Button title={"Get Started"} width={12} height={3} className="w-[12rem] h-[3rem]" />
            </section>
        </section>
    )
}
