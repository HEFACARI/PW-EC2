"use client";

import { useGetProductBySlug } from "@/api/GetProductBySlug";
import { useParams } from "next/navigation";
import SkeletonProduct from "./components/SkeletonProduct";
import CarouselProduct from "./components/CarouselProduct";
import InfoProduct from "./components/InfoProduct";

export default function Page() {
    const params = useParams();
    const { productSlug } = params;

    const { result, loading, error } = useGetProductBySlug(productSlug);

    if (loading) return <SkeletonProduct />;
    if (error || !result) return <p>Error: {error || "Producto no encontrado"}</p>;

    return (
        <div className="max-w-6xl py-4 mx-auto sm:my-32 sm:px-24">
            <div className="grid sm:grid-cols-2">
                <div>
                    <CarouselProduct images={result[0].images} />
                </div>
                <div className="sm:px-12">
                    <InfoProduct product={result[0]} />
                </div>
            </div>
        </div>
    );
}
