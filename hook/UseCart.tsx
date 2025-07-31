/*
    AUTOR: Hector Fabio Caez Rivas
    ALIAS: HEFACARI
    FECHA: 25/06/2025
    DESCRIPCION: - Este componente es el encargado de realizar todas la funcionalidades del carrito de compras
    RELACION: este componente esta relacionado con FeaturedProducts.tsx, infoProduct.tsx
*/

import {create} from 'zustand'
import {persist, createJSONStorage} from 'zustand/middleware'
import { ProductType } from "@/types/product";
import { toast } from 'sonner'; //Importa la función toast para mostrar notificaciones visuales.

interface CartStore {
    items: ProductType[],
    addItem: (data: ProductType) => void,
    removeItem: (id: number) => void,
    removeAll: () => void,
}

export const useCart = create(persist<CartStore>((set, get) => ({
    items: [],
    addItem: (data: ProductType) => {
        const currentItems = get().items
        const existingItem = currentItems.find((item) => item.id === data.id)

        if (existingItem) {
            toast.error("El producto ya existe en el carrito");
            return;
        }

        set({
            items: [...get().items, data]
        })
        toast.success("El producto se ha añadido al carrito🛒")
    },
    removeItem: (id: number) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] })
        toast.info("El producto se ha eliminado del carrito🗑️")
    },
    
    removeAll: () => {
        set({ items: [] })
        toast.info("Se han eliminado todos los productos del carrito")
    }

}), {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage)
}))