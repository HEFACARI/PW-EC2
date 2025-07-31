import { format } from "path" //Es un módulo nativo de Node.js que proporciona utilidades para trabajar con rutas de archivos y directorios

export function formatPrice(price: number) { //Una función que formatea un número (price) para que se muestre como una moneda
    const priceFormated = new Intl.NumberFormat('es-CO', { //Intl.NumberFormat: Es una API integrada de JavaScript utilizada para dar formato a números, fechas o cadenas en función de una configuración regional específica
        style: "currency", //Especifica que el número debe formatearse como una moneda
        currency: "eur"
    })

    const finalPrice = priceFormated.format(price) //Convierte el número pasado como argumento (price) al formato definido.
    
    return finalPrice
}