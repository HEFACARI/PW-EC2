import image1 from "../public/1.png"
//import raton from "../public/raton.png"

const Banner = () => {
    return(
        <div className="max-w-6xl py-4 sm:py-16 sm:px-24">
            <div className="flex items-center justify-end ml-300">
                <img src={image1.src} alt="image1" className="max-w-none"/>
            </div>
        </div>
    )
}

export default Banner;