/*
Fecha UM: 01/05/2025
Nombre: HECTOR FABIO CAEZ RIVAS
Alias: HEFACARI
Descripcion: Este archivo nos ayuda a obtener las categorias de strapi
*/

import { useEffect, useState } from "react"
export function useGetCategories(){
    const url =  `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories?populate=*`//URL que nos ayuda a obtener los datos
    const [result, setResult] = useState(null) //result:guarda los datos obtenidos de la API
    const [loading, setLoading] = useState(true) //loading:Indica si la solicitud esta en proceso, incialmente true, ya que la solicitud comienza inmediatamente
    const [error, setError] = useState('') //error:Almacena cualquier error durante la solicitud

    useEffect(()=>{//Ayuda a solicitar los datos
        (async() =>{ //funcion asyncrona autoejecutada
            try{
                const res = await fetch(url)//Hace una solicitud HTTP GET a la URL del backend
                const json = await res.json()//Convierte la respuesta en un objeto JSON
                setResult(json.data) //Le pasamos estos datos a setResult
                setLoading(false) //Ahora setLoading es igual a false para que cierre la funcion
            }catch(error: any){
                setError(error)//Un setError del error que nos va a venir de la pagina
                setLoading(false)//Nos especifica que nos acaba de cargar este loading
            }
        })()

    }, [url])

    return { loading, result, error }

}