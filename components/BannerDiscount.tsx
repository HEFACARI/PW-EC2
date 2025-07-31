import Link from "next/link"
import { buttonVariants } from "./ui/button"

const BannerDiscount = () => {
    return(
        <div className="p-5 sm:p-20 text-center">
            <h2 className="uppercase font-black text-2xl text-primary">Consigue hasta un -25% de descuento
            </h2>
            <h3 className="mt-3 font-semibold">
                Un -20% por compras de hasta 100.000, un -25% por compras superiores a 150.000. Usa el codigo HEFACARI y tendras un 5% mas de descuento
            </h3>
            <div className="max-w-md mx-auto sm:flex justify-center gap-8 mt-5">
                <Link href="#" className={buttonVariants()}>Comprar</Link>
                <Link href="#" className={buttonVariants({variant:"outline"})}>Mas Informacion</Link>
            </div>
        </div>
    )
}

export default BannerDiscount
 