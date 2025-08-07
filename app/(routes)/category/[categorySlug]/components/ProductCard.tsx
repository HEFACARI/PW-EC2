/*
    AUTOR: HECTOR FABIO CAEZ RIVAS
    ALIAS: HEFACARI
    FECHA: 09/06/2025
    DESCRIPCION: Este archivo muestra los productos dependiendo de la categoria en la que este
*/

import { Expand, ShoppingCart } from "lucide-react"//Son componentes de íconos importados de la biblioteca lucide-react
import { useRouter } from "next/navigation" //Es un hook que permite la navegación programática dentro de una aplicación Next.js
import Link from "next/link" //Proporciona navegación entre páginas en aplicaciones Next.js sin recargar la página.

import { formatPrice } from "@/lib/formatPrice" //Una función personalizada para formatear los precios.
import { ProductType } from "@/types/product" //Define el tipo de datos esperados para el producto.

import IconButton from "@/components/IconButton"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

//Define las propiedades esperadas del componente ProductCard
type ProductCardProps = {
    product: ProductType //Un objeto product del tipo ProductType
}

const ProductCard = (props: ProductCardProps) => {
    const {product} = props //El componente recibe las propiedades y desestructura el objeto product
    const router = useRouter() //Se inicializa router para manejar la navegación programática
    return(
        <Link href={`/product/${product.slug}`} // Envuelve el contenido del producto y apunta a una página específica basada en el slug del producto.
            
        /*Muestra dos etiquetas: una para el sabor (taste) y otra para el origen (origin) del producto. */
        className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md"> {/*Estilos de product.taste y product.origin */}
            <div className="absolute flex items-center justify-between gap-3 px-2 z-[1] top-4">
                <p className="px-2 py-1 text-xs text-white bg-black rounded-full 
                dark:bg-white dark:text-white w-fit">{product.taste}</p>
                <p className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full
                 dark:bg-white dark:text-white w-fit">{product.origin}</p>
            </div>

            <Carousel
                opts={{
                    align:"start" //Alinea los elementos del carrusel al principio
                }}
                className="w-full max-w-sm"
            >
                <CarouselContent>
                    {/*Mapea las imágenes del producto para renderizarlas dinámicamente*/}
                    {product.images.map((image) => (
                        <CarouselItem key={image.id} className="group"> {/*key={image.id}: Clave única para cada elemento, requerida por React*/}
                            <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
                                alt="Image"
                                className="rounded-xl"
                            />
                
                            <div className="absoulte w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                                <div className="flex justify-center gap-x-6">
                                    <IconButton onClick={() => router.push('/product/${product.slug}')} 
                                        icon={
                                            <Expand size={20} className="text-gray-600"/> 
                                        }/>
                                    <IconButton onClick={() => console.log("product")} 
                                        icon={
                                            <ShoppingCart size={20} className="text-gray-600"/> 
                                        }/>
                                </div>  
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

            </Carousel>
            <p className="text-1xl text-center">{product.productName}</p>
            <p className="font-bold text-center">{formatPrice(product.price)}</p>
        </Link>
    )
}

export default ProductCard