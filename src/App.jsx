import './App.css'
import { Button } from './components/Button.jsx'
import { Cards } from './components/Cards.jsx'
import { ListFooter } from './components/ListFooter.jsx'
import { IconSocial } from './components/IconSocial.jsx'
import { useState } from 'react'
import Ilustration from './assets/images/illustration-working.svg'

function App() {

  const [stateBars, setStateBars] = useState("hidden");

  return (
    <>
      <section className='w-full flex flex-col items-center font-poppins'>
        <header className='bg-white w-full'>
          <nav className='flex w-full justify-between px-[10.5rem] py-[3rem] max-lg:px-[4.5rem] max-sm:px-[2rem]'>
            <section className='flex gap-[44px] items-center max-md:justify-between max-md:w-full'>
              <img src="./src/assets/images/logo.svg" alt="Icono de la empresa" />

              <section className='hidden max-md:block'>
                <section onClick={() => stateBars == "hidden" ? setStateBars("visible") : setStateBars("hidden")}>
                  <img src="./src/assets/images/bars.svg" alt="" className='w-[20px]'/>
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
        </header>

        <main className='w-full'>
          <section className='w-full pl-[10.5rem]  pt-[1.5rem] flex max-lg:flex-col-reverse max-lg:pr-[10.5rem] max-md:gap-5 max-md:pl-[6rem] max-md:pr-[6rem] max-sm:pl-[3rem] max-sm:pr-[3rem]'>
            <section className='flex flex-col justify-center'>
              <section>
                <h1 className='text-[65px] font-bold max-w-[1030px] line-clamp-3 leading-[80px] max-lg:text-center max-md:text-[50px] max-sm:text-[30px] max-md:leading-[60px] max-sm:leading-[30px]'>More than just shorter links</h1>
                <p className='text-pretty text-[18px] tracking-[1.2px] font-[600] w-fit text-grayishViolet max-w-[535px] max-sm:text-[14px] max-lg:max-w-none max-lg:mt-5 leading-[29px] max-lg:text-center max-md:text-[15px]'>Build your brand{"'"}s recognition and get detailed insight on how your links are performing</p>
              </section>

              <section className="mt-[3rem] text-center">
                <Button title={"Get Started"} width={12} height={3} className="w-[12rem] h-[3rem]" />
              </section>
            </section>

            <section className='w-full'>
              <div className="max-lg:bg-[center_center] min-h-[23rem] bg-[length:auto_95%] bg-[center_right_-6rem] min-[1310px]:min-h-[30rem] bg-no-repeat max-lg:min-h-[18rem] max-md:min-h-[15rem] max-sm:min-h-[12rem]" style={{backgroundImage: `url(${Ilustration})`}}></div>
            </section>
          </section>

          <section className='w-full h-[10rem] mt-[4.5rem] flex justify-center items-center bg-gradient-to-b from-white from-0% via-white via-50% to-gray to-50%'>
            <section className='w-[76%] h-[10rem] bg-[url(./src/assets/images/bg-shorten-desktop.svg)] bg-no-repeat bg-cover bg-[center_right_1px] bg-darkViolet rounded-[10px]'>
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

          <section className='bg-gray'>
            <section className='pt-[7.5rem] font-bold flex flex-col items-center text-center max-md:pt-[4.5rem] max-md:px-[3rem] '>
              <h2 className='text-[39px] text-veryDarkViolet max-md:text-[33px] max-sm:text-[30px]'>Advanced Statistics</h2>
              <p className='text-grayishViolet text-[16px] max-w-[530px] tracking-[1px] mt-3 max-md:text-[13px]'>
                Track how your links are performing across the web with our advanced statics dashboard.
              </p>
            </section>

            <section className='min-h-[32rem] pb-[10rem] flex justify-center flex-nowrap items-stretch mt-[7rem] gap-6 max-md:pb-[5rem] max-xl:flex-wrap max-xl:gap-y-[4rem]'>
              <section className='self-start '>
                <Cards title={"Brand Recognition"} paragraph={`Boost your band recognition with each click. generic links don't mean a thing. Branded links help instill confidence in your content.`} icon={"brand-recognition"} />
              </section>

              <section className='self-center'>
                <Cards title={"Detailed Recordsn"} paragraph={`Gain insights into who is clicking your links. Knowing when and where peopla engage with your content helps inform better decisions.`} icon={"detailed-records"} />
              </section>

              <section className='self-end'>
                <Cards title={"Fully Customizable"} paragraph={`Improve brand awareness and content discoverability through customizable links, supercharging audience engagement`} icon={"fully-customizable"} />
              </section>

            </section>

          </section>

          <section className='flex justify-center p-[4rem] bg-darkViolet bg-[url(./src/assets/images/bg-boost-desktop.svg)] bg-no-repeat bg-cover text-center'>
            <section>
              <h3 className='text-[40px] font-bold text-white mb-4 max-md:text-[25px]'>Boost your links today</h3>
              <Button title={"Get Started"} width={12} height={3} className="w-[12rem] h-[3rem]" />
            </section>
          </section>

        </main>

        <footer className='pt-[4.5rem] px-[10rem] pb-[5rem] bg-veryDarkBlue w-full flex justify-between max-sm:px-[7rem] max-[810px]:justify-center flex-wrap gap-y-[2rem]'>
          <section>
            <img src="./src/assets/images/logo.svg" alt="" className='invert' />
          </section>

          <section className='flex gap-[3rem] text-grayishViolet max-md:flex-wrap max-[528px]:text-center max-[528px]:justify-center'>
            <ListFooter title={"Features"} links={["Link Shortening", "Branded Links", "Analytics"]} />
            <ListFooter title={"Resources"} links={["Blog", "Developers", "Support"]} />
            <ListFooter title={"Company"} links={["about", "Our team", "Carrers", "Contact"]} />
          </section>

          <section className='flex gap-6'>
            <IconSocial name={"icon-facebook"} />
            <IconSocial name={"icon-twitter"} />
            <IconSocial name={"icon-pinterest"} />
            <IconSocial name={"icon-instagram"} />
          </section>
        </footer>

      </section>
    </>
  )
}

export default App