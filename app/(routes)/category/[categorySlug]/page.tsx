/*
    AUTOR: HEFACARI
    FECHA: 17/05/2025
    DESCRIPCION: - Este archivo muestra la pagina donde se ven los productos y se pueden filtrar mediante su origin o taste con los codigos FilterTaste y FilterOrigin
    - Este archivo sera el encargado de llevar el filtrado de la pagina
    - Este archivo se encarga de mostrar los productos y permite filtrar la lista basada en ese criterio
    - Actúa como un filtro que interactúa con el estado de la aplicación para filtrar productos
    
    RELACION: - Este archivo esta relacionado con FilterTaste y FilterOrigin
*/

"use client"
import { useGetCategoryProduct } from "@/api/GetCategoryProduct"
import { Separator } from "@/components/ui/separator"
import { ResponseType } from "@/types/response"
import { useParams, useRouter } from "next/navigation"
import FiltersControlsCategory from "./components/FiltersControlsCategory"
import SkeletonSchema from "@/components/SkeletonSchema"
import ProductCard from "./components/ProductCard"
import { ProductType } from "@/types/product"
import { useState } from "react"


export default function Page() {
    const params = useParams()
    const categorySlug = params?.categorySlug; // Asegura que categorySlug no sea undefined
    const [filterOrigin, setFilterOrigin] = useState('')
    const [filterTaste, setFilterTaste] = useState('')
    
    if (!categorySlug) return <p>Categoría no encontrada</p>;

    const {result, loading}: ResponseType = useGetCategoryProduct(categorySlug) //Datos traidos de una peticion mediante la API
    const router = useRouter()

    // Combina ambos filtros en una sola lógica
    const filteredProducts = result != null && !loading && result.filter((product: ProductType) => {
        // Si no hay filtro, pasa todos los productos
        const matchesOrigin = filterOrigin === '' || product.origin === filterOrigin;
        const matchesTaste = filterTaste === '' || product.taste === filterTaste;
        return matchesOrigin && matchesTaste; // Devuelve solo los que cumplan ambas condiciones
    });

    // const filteredProducts = result != null && !loading && (
    //     filterOrigin === ''
    //         ? result
    //         : result.filter((product:ProductType) => 
    //         product.origin === filterOrigin)
    // )

    // const filteredProducts2 = result != null && !loading && (
    //     filterTaste === ''
    //         ? result
    //         : result.filter((product:ProductType) => 
    //         product.taste === filterTaste)
    // )

    console.log(filteredProducts)
    
    return(
        <div className="max-w-6xl py-4 sm:py-16 sm:px-24">
            {/*Muestra el titulo */}
            {result != null && !loading && (
                <h1 className="text-3xl font-medium">{result[0].category.categoryName}</h1>
            )}
            <Separator/>
            
            <div className="sm:flex sm:justify-between">
                <FiltersControlsCategory setFilterOrigin={setFilterOrigin} setFilterTaste={setFilterTaste}/>

                {/*Esta parte crea un skeleton cuando se esta cargando loading*/}
                <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
                    {loading && (
                        <SkeletonSchema grid={3}/>
                    )}

                    {/* Renderiza productos filtrados */}
                    {filteredProducts != null && !loading && filteredProducts.length > 0 ? (
                        filteredProducts.map((product: ProductType) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        // Mensaje si no hay productos que coincidan con los filtros
                        !loading && <p>No hay productos con este filtro</p>
                    )}

                    {/* Esta parte filtra o muestra los productos dependiendo del origen
                    {filteredProducts != null && !loading && filteredProducts2 != null && !loading && (
                        filteredProducts.map((product: ProductType) => (
                            <ProductCard key={product.id} product={product}/>
                        )) && filteredProducts2.map((product: ProductType) => (
                            <ProductCard key={product.id} product={product}/>
                        ))
                    )} */}

                     {/* Esta parte filtra o muestra los productos dependiendo del origen*/}
                    {/* {filteredProducts2 != null && !loading && (
                        filteredProducts2.map((product: ProductType) => (
                            <ProductCard key={product.id} product={product}/>
                        ))
                    )} */}

                    {/* Esta parte filtra o muestra cuando no hay ningun producto filtrado con la eleccion elegida */}
                    {filteredProducts != null && !loading && filteredProducts.length === 0 && (
                        <p></p>
                    )}
                </div>
            </div>
        </div>
    )
}