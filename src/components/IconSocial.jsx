export const IconSocial = ({name}) => {
    return (
        <div>
            <a href="#">
                <img src={`./src/assets/images/${name}.svg`} alt="" className="hover:scale-110 ease-out duration-300 "/>
            </a>
        </div>
    )
}
