/*
    AUTOR: Hector Fabio Caez Rivas
    ALIAS: HEFACARI
    FECHA: 25/06/2025
    DESCRIPCION: - Este componente muestra la barra de navegacion o el navbar
    RELACION: este componente esta relacionado con UseCart.tsx
*/

"use client"

import { BaggageClaim, Heart, ShoppingCart, User } from "lucide-react"
import { useRouter } from "next/navigation"
import MenuList from "./MenuList"
import MenuMobile from "./MenuMobile"
import ToggleTheme from "./toggle-theme"
import { useCart } from "@/hook/UseCart"
import { UseLovedProducts } from "@/hook/UseLovedProducts"

const Navbar = () => {
    const router = useRouter()
    const cart = useCart()
    const {lovedItems} = UseLovedProducts()

    return(
        <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">

            <h1 className="text-3xl" onClick={() => router.push("/")}>HEFACARI
                <span className="font-bold">
                    COMPUTER
                </span>    
            </h1>     
            <div className="items-center justify-between hidden sm:flex">
                <MenuList/>
            </div>   
            <div className="flex sm:hidden">
                <MenuMobile/>
            </div>
            <div className="flex items-center justify-between gap-2 sm:gap-7">
                {cart.items.length === 0 ?
                    <ShoppingCart strokeWidth="1" 
                    className="cursor-pointer" 
                    onClick={() => router.push("/cart")}/>
                    : (
                        <div className="flex gap-1" onClick={() => router.push("/cart")}>
                            <BaggageClaim strokeWidth={1} className="cursor-pointer"/>
                            <span>{cart.items.length}</span>
                        </div>
                )}
                

                <Heart strokeWidth="1" 
                className={`cursor-pointer 
                ${lovedItems.length > 0 && 'fill-black dark:fill-white'}`} 
                onClick={() => router.push("/loved-products")}/>

                <User strokeWidth={1} className="cursor-pointer" />
                <ToggleTheme/>
            </div>

        </div>
    )
}

export default Navbar