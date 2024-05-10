export const ListFooter = ({ title, links }) => {
    return (
        <section>
            <ul className='leading-[30px] max-[528px]:leading-[25px]'>
                <li className='text-white font-bold'>{title}</li>
                <li>&nbsp;</li>
                {
                    links.map(link => {
                        return (
                            <a href="#" key={link} className="hover:text-cyan">
                                <li key={link}>{link}</li>
                            </a>
                        )
                    })
                }
            </ul>
        </section>
    )
}
