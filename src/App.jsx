import './App.css'
import { Nav } from './components/Nav.jsx'
import { Hero } from './components/Hero.jsx'
import { Shortener } from './components/Shortener.jsx'
import { InfoLinks } from './components/InfoLinks.jsx'
import { Boost } from './components/Boost.jsx'
import { ListFooter } from './components/ListFooter.jsx'
import { IconSocial } from './components/IconSocial.jsx'
import Logo from './assets/images/logo.svg'
import Facebook from './assets/images/icon-facebook.svg'
import Twitter from './assets/images/icon-twitter.svg'
import Pinterest from './assets/images/icon-pinterest.svg'
import Instagram from './assets/images/icon-instagram.svg'

function App() {
  return (
    <>
      <section className='w-full flex flex-col items-center font-poppins'>
        <header className='bg-white w-full'>
          <Nav />
        </header>

        <main className='w-full'>
          <Hero />
          <Shortener />
          <InfoLinks />
          <Boost />
        </main>

        <footer className='pt-[4.5rem] px-[10rem] pb-[5rem] bg-veryDarkBlue w-full flex justify-between max-sm:px-[7rem] max-[810px]:justify-center flex-wrap gap-y-[2rem]'>
          <section>
            <img src={Logo} alt="" className='invert' />
          </section>

          <section className='flex gap-[3rem] text-grayishViolet max-md:flex-wrap max-[528px]:text-center max-[528px]:justify-center'>
            <ListFooter title={"Features"} links={["Link Shortening", "Branded Links", "Analytics"]} />
            <ListFooter title={"Resources"} links={["Blog", "Developers", "Support"]} />
            <ListFooter title={"Company"} links={["about", "Our team", "Carrers", "Contact"]} />
          </section>

          <section className='flex gap-6'>
            <IconSocial name={Facebook} />
            <IconSocial name={Twitter} />
            <IconSocial name={Pinterest} />
            <IconSocial name={Instagram} />
          </section>
        </footer>

      </section>
    </>
  )
}

export default App