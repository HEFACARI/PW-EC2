/*
    AUTOR: Hector Fabio Caez Rivas
    ALIAS: HEFACARI
    FECHA: 02/07/2025
    DESCRIPCION: - Este componente es el encargado de realizar todas la funcionalidades de la pagina de favoritos (añadir y eliminar los productos favoritos)
    RELACION: este componente esta relacionado con FeaturedProducts.tsx, infoProduct.tsx
*/

import {create} from "zustand" //zustand: una librería de gestión de estado para React (más simple que Redux).
import {persist, createJSONStorage} from 'zustand/middleware' //persist, para guardar el estado en localStorage.
import { ProductType } from "@/types/product" //
import {toast} from 'sonner' //Importa la función toast para mostrar notificaciones visuales.

/*ABREME
create(...): crea el store.
persist(...): hace que el estado se guarde en localStorage.
<UseLovedProductsType>: define el tipo del estado para que TypeScript ayude.
(set, get) => ({ ... }): función que define el estado inicial y las acciones.
*/
interface UseLovedProductsType {
    lovedItems: ProductType[], //array de productos favoritos.
    addLoveItem: (data:ProductType) => void //función para agregar un producto.
    removeLovedItem: (id: number) => void //función para eliminarlo por id
}

export const UseLovedProducts = create(persist<UseLovedProductsType>((set,get) => ({
    lovedItems: [], //Inicialmente no hay productos favoritos.

    //Funcion addLoveItem
    addLoveItem: (data: ProductType) => {
        const currentLovedItems = get().lovedItems;//Obtiene los productos actuales.
        const existingItem = currentLovedItems.find((item) => item.id === data.id) //Comparar si los objetos que estan en el carrito de compras son los mismos que los favoritos

        if(existingItem) {
            return toast.info("El producto ya esta en favoritos🫤")
        }

        set({
            lovedItems: [...get().lovedItems, data] //obtiene el array actual de productos favoritos
        })
        toast.success("Producto añadido a favoritos♥️")
    },

    removeLovedItem: (id: number) => {
        set({lovedItems: [...get().lovedItems.filter((item) => item.id != id)]})
        toast.info("El producto se ha eliminado de favoritos💔")
    }

}), {
    //Se debe colocar estos dos elementos de programacion ya que ayuda con el guardado en  localStorage
    name:"lovedProductsStorage",
    storage: createJSONStorage(() => localStorage)
}   
))

