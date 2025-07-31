import Link from "next/link"
import { buttonVariants } from "./ui/button"

const BannerProduct = () => {
    return(
        <>
            <div className="mt-4 text-center">
                <p>Sumergete en una experiencia unica</p>
                <h4 className="mt-2 text-5xl font-extrabold uppercase">PC´s Gamer para cualquier presupuesto</h4>
                <p className="my-2 text-lg">Crea, juega, estudia y trabaja con un solo PC</p>
                <Link href="#" className={buttonVariants()}>Comprar </Link>
            </div>
            <div className="h-[600px] bg-[url('/1.png')] bg-center bg-no-repeat"/>
        </>
    )
}

export default BannerProduct