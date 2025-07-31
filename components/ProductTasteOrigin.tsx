/*
    AUTOR: Hector Fabio Caez Rivas
    ALIAS: HEFACARI
    FECHA: 02/07/2025
    DESCRIPCION: - Este componente es el encargado de reducir la cantidad de codigo en algunos componentes de este proyecto, mas especificamente globaliza product.taste y product.origin, en el video de youtube este componente se llama product-taste-origin
*/

import { ProductType } from "@/types/product"

interface ProductTasteOriginProps {
    product: ProductType
}

const ProductTasteOrigin = (props: ProductTasteOriginProps) => {
        
    const {product} = props

    return(
            <div className="flex items-center gap-3">
                <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-white w-fit">{product.taste}</p>
                <p className="px-2 py-1 text-xs text-white bg-gray-400 rounded-full w-fit">{product.origin}</p>
            </div>
    )
    
}

export default ProductTasteOrigin