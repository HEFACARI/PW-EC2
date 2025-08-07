/*
    AUTOR: Hector Fabio Caez Rivas
    ALIAS: HEFACARI
    FECHA: 29/06/2025
    DESCRIPCION: - Este componente muestra los productos que fueron añadidos al carrito de compras
    RELACION: - Esta relacionado con page de el directorio cart
*/

import ProductImage from "@/components/ProductImage"
import ProductTasteOrigin from "@/components/ProductTasteOrigin"
import { useCart } from "@/hook/UseCart"
import { formatPrice } from "@/lib/formatPrice"
import { cn } from "@/lib/utils"
import { ProductType } from "@/types/product"
import { X } from "lucide-react"
//import { useRouter } from "next/navigation"

interface CartItemProps {
    product: ProductType
}

const CartItem = (props: CartItemProps) => {
    const {product} = props
    //const router = useRouter()
    const {removeItem} = useCart()
    //console.log("Product:", product);

    return(
        <li className="flex py-6 border-b">
            <ProductImage product={product}/>
            <div className="flex justify-between flex-1 px-6">
                <div>
                    <h2 className="text-lg font-bold">{product.productName}</h2>
                    <p className="font-bold">{formatPrice(product.price)}</p>
                    <ProductTasteOrigin product={product}/>
                </div>
                <div>
                    <button className={cn("rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition")}>
                        <X size={20} onClick={() => removeItem(product.id)}/>
                    </button>
                </div>
            </div>
        </li>
    )
}

export default CartItem