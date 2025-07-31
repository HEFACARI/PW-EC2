"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"

const PageSuccess = () => {
    const router = useRouter()
    return(
        <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">
            <div className="flex flex-col-reverse gap-2 sm:flex-row">
                <div className="flex justify-center md:min-w-[400px]">
                    <Image src="/success2.jpg" alt="Success" width={250} height={500} className="rounded-lg"/>
                </div>

                <div>
                    <h1 className="text-3xlj">Gracias por tu compra</h1>
                    <p className="my-3">En breve, nuestro equipo se pondra manos a la obra para seleccionar tus productos y preparar tu envio con cuidado y dedicacion. Mientras tanto, sientate, relajate y piensa en disfrutar tus productos una vez que lleguen a tus manos. Te pido que por favor lo disfrutes</p>
                    <p className="my-3">Gracias de nuevo por confiar en nosotros para satisfacer tu amor por la tecnologia. Estamos deseando que pruebes nuestros excelentes productos </p>
                    <p className="my-3">¡De nuevo, gracias por la compra!</p>

                    <Button onClick={() => router.push("/")}>Volver a la tienda</Button>
                </div>
            </div>
        </div>
    )
}

export default PageSuccess