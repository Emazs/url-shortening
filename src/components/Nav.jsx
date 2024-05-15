import { useState } from "react";
import { Button } from "./Button";
import Logo from '../assets/images/logo.svg'
import Bars from '../assets/images/bars.svg'

export const Nav = () => {

    const [stateBars, setStateBars] = useState("hidden");

    return (
        <nav className='flex w-full justify-between px-[10.5rem] py-[3rem] max-lg:px-[4.5rem] max-sm:px-[2rem]'>
            <section className='flex gap-[44px] items-center max-md:justify-between max-md:w-full'>
                <img src={Logo} alt="Icono de la empresa" />

                <section className='hidden max-md:block'>
                    <section onClick={() => stateBars == "hidden" ? setStateBars("visible") : setStateBars("hidden")}>
                        <img src={Bars} alt="" className='w-[20px]' />
                    </section>

                    <section className={`absolute left-[10%] top-[7rem] w-[80%] bg-darkViolet py-[3rem] rounded-[10px] px-[6%] ${stateBars}`}>
                        <section className='flex gap-[20px] font-bold flex-col text-white text-center border-b-[0.5px] border-red-50 pb-[16px]'>
                            <a href="#" className='hover:text-veryDarkBlue'>Features</a>
                            <a href="#" className='hover:text-veryDarkBlue'>Pricing</a>
                            <a href="#" className='hover:text-veryDarkBlue'>Resources</a>
                        </section>

                        <section className='flex items-center gap-3 flex-col mt-[1rem]'>
                            <a href="#" className='font-bold text-white'>Login</a>
                            <Button title={"Sign Up"} className="w-[6.5rem] h-[2.5rem]" width={6.5} height={2.5} />
                        </section>
                    </section>
                </section>

                <section className='flex gap-[30px] font-bold flex-wrap text-grayishViolet max-md:hidden'>
                    <a href="#" className='hover:text-veryDarkBlue'>Features</a>
                    <a href="#" className='hover:text-veryDarkBlue'>Pricing</a>
                    <a href="#" className='hover:text-veryDarkBlue'>Resources</a>
                </section>
            </section>

            <section className='flex items-center gap-9 max-md:hidden'>
                <a href="#" className='font-bold text-grayishViolet'>Login</a>
                <Button title={"Sign Up"} className="w-[6.5rem] h-[2.5rem]" width={6.5} height={2.5} />
            </section>

        </nav>
    )
}
