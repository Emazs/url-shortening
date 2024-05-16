import { useState } from 'react'
import Shorten from '../assets/images/bg-shorten-desktop.svg'

export const Shortener = () => {
  const [inputValue, setInputValue] = useState("");
  const [urlShorte, setUrlShorte] = useState([]);
  const REGEX = /^https/;

  const TOKEN = "YnmI3AQ2XOVR9r9lN6Kf4lmeovKhzForYytrusfMIPLjWIS7UQPbngal9s6q"
  const URL_API = 'https://api.tinyurl.com/create'

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.length != 0 && REGEX.test(inputValue)) {
      fetch(URL_API, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-type": 'application/json'
        },
        body: JSON.stringify({
          "url": inputValue,
          "domain": "tinyurl.com",
          "description": "string"
        })
      })
        .then(res => res.json())
        .then(data => setUrlShorte([{
          link: data.data.tiny_url,
          input: inputValue
        }, ...urlShorte]))
        .catch(error => console.error('Error:', error));

      setInputValue("")
    } else {
      alert("Link no valido")
    }
  }

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Enlace copiado al portapapeles');
      })
      .catch((err) => {
        console.error('Error al copiar el enlace: ', err);
      });
  };

  return (
    <section className='w-full mt-[4.5rem] flex flex-col justify-center items-center bg-gray'>
      <section className='w-full h-[10rem] flex justify-center items-center bg-gradient-to-b from-white from-0% via-white via-50% to-gray to-50%'>
        <section className='w-[76%] h-[10rem] bg-no-repeat bg-cover bg-[center_right_1px] bg-darkViolet rounded-[10px]' style={{ backgroundImage: `url(${Shorten})` }}>
          <section className='h-[100%] flex justify-center items-center'>
            <form action="#" className='w-full'>
              <section className='w-full h-[12rem] flex p-[4rem] gap-8 tracking-[1px] max-md:flex-col max-md:h-auto max-md:p-[2rem] max-md:gap-4'>
                <input type="text" placeholder='Shorten a link here...' className='w-full rounded-md pl-[2rem] font-bold text-[18px] outline-none max-md:h-[3rem]' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button className='w-[15rem] bg-cyan rounded-md font-bold text-white text-[18px] hover:bg-cyanWhite max-md:h-[3rem] max-md:w-[auto]' onClick={(event) => onSubmit(event)}>Shorten it!</button>
              </section>
            </form>
          </section>
        </section>
      </section>

      <section className='w-[76%] flex justify-center flex-col pt-[1rem] gap-2'>
        {
          urlShorte && urlShorte.map(item => {
            return (
              <section key={item.link} className='flex flex-col w-full py-[1rem] px-[1.5rem] bg-white rounded-md'>
                <section className='flex w-full justify-between items-center max-md:flex-wrap max-md:gap-y-4 max-md:justify-center'>
                  <p className='truncate max-md:text-[14px]'>{item.input}</p>
                  <div className='flex gap-[1rem] items-center max-md:flex-wrap max-md:justify-center'>
                    <a href={item.link} className='text-cyan max-md:text-[14px]'>{item.link}</a>
                    <button className='bg-cyan py-[5px] px-[1.5rem] text-white font-bold rounded-md' onClick={() => handleCopy(item.link)}>Copy</button>
                  </div>
                </section>
              </section>
            )
          })
        }
      </section>
    </section>
  )
}

