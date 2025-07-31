"use client"
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useRouter } from "next/navigation";
import Autoplay from "embla-carousel-autoplay"

export const dataCarouselTop = [
  {
    id:1,
    title:"Envio en 24/48H",
    description:"Como cliente VIP, tus envios en 24/48 horas. Obten mas informacion y unete",
    link:"#"
  },
  {
    id:2,
    title:"Recibe hasta un -25% en compras superiores a 200.000 pesos",
    description:"-25% al gastar 200.000",
    link:"#"
  },
  {
    id:3,
    title:"Devoluciones o entregas gratuitas",
    description:"Como cliente tenemos devoluciones y envios gratis en un plazo de 5 dias",
    link:"#"
  },
  {
    id:4,
    title:"Comprar novedades",
    description:"todas las novedades al 50% de descuento",
    link:"#"
  },
]

const CarouselTextBanner = () => {
  const router = useRouter()

  return (
   <main className="bg-gray-200 dark:bg-primary">
      <Carousel className="w-full max-w-4xl mx-auto"
        plugins={[
          Autoplay({
            delay:2500
          })
        ]}
      >
        <CarouselContent>
          {dataCarouselTop.map(({id, title, description, link}) =>(
            <CarouselItem key={id} onClick={() => router.push(link)} className="cursor-pointer">
              <div>
                <Card className="shadow-none border-none bg-transparent">
                  <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                    <p className="sm:text-lg text-wrap dark:text-secondary">{title}</p>
                    <p className="text-sx sm:text-sm text-wrap dark:text-secondary">{description}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
      </Carousel>
   </main>
  );
}

export default CarouselTextBanner;