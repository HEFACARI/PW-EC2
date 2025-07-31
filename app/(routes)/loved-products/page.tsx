/*
    AUTOR: Hector Fabio Caez Rivas
    ALIAS: HEFACARI
    FECHA: 25/06/2025
    DESCRIPCION: - Este componente muestra los productos favoritos que han sido elegidos
    RELACION: - Esta relacionado con UseLovedProducts
*/

"use client"

import { UseLovedProducts } from "@/hook/UseLovedProducts"
import LovedItemProduct from "./components/LovedItemProduct"

export default function Page(){
    const {lovedItems} = UseLovedProducts()
    return(
        <div className="max-w-4xl py-4 mx-auto sm:py-32 sm:px-24">
            <h1 className="sm:text-2xl">
                Productos que te gustan
            </h1>
            <div>
                <div>
                    {lovedItems.length === 0 && (
                        <p>No hay productos en la seccion favoritos</p>
                    )}
                    <ul>
                        {lovedItems.map((item) => (
                            <LovedItemProduct key={item.id} product={item}/>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}