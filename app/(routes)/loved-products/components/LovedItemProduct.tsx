/*
    AUTOR: Hector Fabio Caez Rivas
    ALIAS: HEFACARI
    FECHA: 02/07/2025
    DESCRIPCION: - Este componente es el encargado de realizar todas la funcionalidades de la pagina de favoritos (añadir y eliminar los productos favoritos)
*/

import ProductImage from "@/components/ProductImage"
import ProductTasteOrigin from "@/components/ProductTasteOrigin"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hook/UseCart"
import { UseLovedProducts } from "@/hook/UseLovedProducts"
import { formatPrice } from "@/lib/formatPrice"
import { cn } from "@/lib/utils"
import { ProductType } from "@/types/product"
import { X } from "lucide-react"
import { useRouter } from "next/navigation"

interface LovedItemProductProps {
    product: ProductType
}

const LovedItemProduct = (props: LovedItemProductProps) => {
    const {product} = props //obtenemos los atributos del producto
    const router = useRouter() //para navegar entre paginas
    const {addItem} = useCart() ////para añadir los productos favoritos al carrito de compras
    const {removeLovedItem} = UseLovedProducts() //para eliminar los productos favoritos

    const addToCheckOut = () =>{
        addItem(product)
        removeLovedItem(product.id)
    }

    return(
        <li className="flex py-6 border-b">
            <ProductImage product={product}/>
            <div className="flex justify-between flex-1 px-6"> 
                <div>
                    <h2 className="text-lg font-bold">{product.productName}</h2>
                    <p>{formatPrice(product.price)}</p>
                    <ProductTasteOrigin product={product}/>
                    <Button className="mt-5 rounded-full" onClick={() => addToCheckOut()}>Añadir al carrito</Button>
                </div>     
                <div>
                    <button className={cn("rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition")}>
                        <X size={20} onClick={() => removeLovedItem(product.id)}/>
                    </button>
                </div>    
            </div>
        </li>
    )
}

export default LovedItemProduct