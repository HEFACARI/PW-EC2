"use client"

import { useGetProductBySlug } from "@/api/GetProductBySlug";
import { ResponseType } from "@/types/response";
import { useParams } from "next/navigation"
import SkeletonProduct from "./components/SkeletonProduct";
import CarouselProduct from "./components/CarouselProduct";
import InfoProduct from "./components/InfoProduct";

export default function Page() {

    const params = useParams()
    const {productSlug} = params;

    //const { result }: ResponseType = useGetProductBySlug(productSlug)

    // Si productSlug es undefined, no hagas la solicitud
    const { result, loading, error }: ResponseType = 
        productSlug 
        ? useGetProductBySlug(productSlug) 
        : { result: null, loading: false, error: "Slug no proporcionado" };

    if(result === null){
        return <p><SkeletonProduct/></p>
    }

    //console.log(result)
    
    return(
        <div className="max-w-6xl py-4 mx-auto sm:my-32 sm:px-24">
            <div className="grid sm:grid-cols-2">
                <div>
                    <CarouselProduct images={result[0].images}/>
                </div>
                <div className="sm:px-12">
                    <InfoProduct product={result[0]}/>
                </div>
            </div>            
        </div>
    )
}