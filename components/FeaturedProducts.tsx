"use client";

import { UseGetFeaturedProducts } from "@/api/UseGetFeaturedProducts";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import SkeletonSchema from "./SkeletonSchema";
import { ProductType } from "@/types/product";
import { Card, CardContent } from "./ui/card";
import { ResponseType } from "@/types/response";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import IconButton from "../components/IconButton"
import { useCart } from "@/hook/UseCart";

const FeaturedProducts = () => {
    const {  result, loading }: ResponseType = UseGetFeaturedProducts();
    const router = useRouter()
    const {addItem} = useCart()

    //console.log(items)

    // Asegúrate de que result es un array y no nulo o indefinido
    //const products = Array.isArray(result) ? result : [];

    return (
        <div className="max-w-6xl py-4 sm:py-16 sm:px-24">
            <h3 className="px-6 text-3xl sm:pb-8">Productos Destacados</h3>
            <Carousel>
                <CarouselContent className="-ml-2 md:-ml-4">
                    {loading && <SkeletonSchema grid={3} />}

                    {result != null ? (
                        result.map((product: ProductType) => {
                            const {id, images, productName, slug} = product;


                            return (
                                <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3 group">
                                    <div className="p-1">
                                        <Card className="p-4 border border-gray-200 shadow-none">
                                            <CardContent className="relative flex items-center justify-center px-6 py-2">
                                                {images && images.length > 0 ? (
  <img
    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images[0].url}`}
    alt={productName || "Producto destacado"}
  />
) : (
  <div className="w-full h-40 bg-gray-100 flex items-center justify-center text-gray-500">
    Imagen no disponible
  </div>
)}

                                                <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                                                    <div className="flex justify-center gap-x-6 mb-[-100]">
                                                        <IconButton onClick={() => router.push(`product/${slug}`)} icon={<Expand size={20}/>}
                                                        className="text-gray-600 bg-white"
                                                        />
                                                        <IconButton onClick={() => addItem(product)} icon={<ShoppingCart size={20}/>}
                                                        className="text-gray-600 bg-white"
                                                        />
                                                    </div>
                                                </div>
                                            </CardContent>
                                            <div className="flex justify-between gap-4 px-8">
                                                <h3 className="text-lg font-bold">{productName}</h3>
                                                <div className="flex items-center justify-between gap-3">
                                                    {/* <p className="text-sm text-center text-gray-500">
                                                        {taste} - {origin}
                                                    </p> */}
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            );
                        })
                    ) : (
                        <p>No hay productos destacados disponibles.</p>
                    )}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext className="hidden sm:flex"/>
            </Carousel>
        </div>
    );
};

export default FeaturedProducts;
