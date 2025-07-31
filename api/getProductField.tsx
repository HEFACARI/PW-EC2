/*
Fecha: 01/05/2025
Autor: HEFACARI
Descripcion: Este archivo nos ayuda a obtener los datos de origin de strapi
*/

import { ResultFilterTypes } from "@/types/filters"
import { useEffect, useState } from "react"

export function useGetProductField(){
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/content-type-builder/content-types/api::product.product`//Devuelve las variables que contiene producto
        const [result, setResult] = useState<ResultFilterTypes | null>(null)
        const [loading, setLoading] = useState(true)
        const [error, setError] = useState("")
    
        useEffect(() => {
            (async () => {
                try {
                    const res = await fetch(url);
                    const json = await res.json()
                    setResult(json.data)
                    setLoading(false)
                } catch (error: any) {
                    setError(error)
                    setLoading(false)
                }
            })()
        }, [url])
    
        return { loading, result, error }
}