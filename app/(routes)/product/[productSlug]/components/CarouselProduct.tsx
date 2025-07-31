/*
    AUTOR: Hector Fabio Caez Rivas
    ALIAS: HEFACARI
    FECHA: 25/06/2025
    DESCRIPCION: - El componente renderiza un carrusel de imágenes dinámicamente a partir de un array
*/

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

//Define la estructura esperada para las propiedades
interface CarouselProductProps {
    images: {
        id: number;
        url: string
    }[]
}

const CarouselProduct = (props: CarouselProductProps) =>{
    const {images} = props //Mediante desestructuración, extraes images desde props

    //console.log(images)
    //console.log(Array.isArray(images.data)); // Esto debe devolver `true`

    return(
        <div className="sm:px-16">
            <Carousel>
                <CarouselContent>
                    {images.map((image) => ( // Itera sobre cada elemento del array images y genera dinámicamente un componente CarouselItem para cada imagen
                        <CarouselItem key={image.id}> {/*React requiere una clave (key) única para identificar cada elemento en listas dinámicas y optimizar su renderizado*/}
                            <img
                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`} // Se construye la URL completa de la imagen concatenando process.env.NEXT_PUBLIC_BACKEND_URL (variable de entorno) con la propiedad url del objeto image
                                alt="image product"
                                className="rounded-lg"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </div>
    )
    
}

export default CarouselProduct