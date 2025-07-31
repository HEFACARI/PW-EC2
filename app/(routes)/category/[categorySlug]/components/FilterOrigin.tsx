/*
    AUTOR: HEFACARI
    FECHA: 10/05/2025
    DESCRIPCION: - Este archivo muestra los origin de la apliacion y tiene informacion sobre la descripcion de abajo de la categorias
    - Este archivo sera el encargado de llevar el filtrado de la pagina
    - Este archivo se encarga de mostrar los "origin" (orígenes) de los productos y permite filtrar la lista basada en ese criterio
    - Actúa como un filtro que interactúa con el estado de la aplicación para filtrar productos
    
    RELACION: - Este archivo esta relacionado con ProductCard 
    Relación con el código ProductCard
    Conexión funcional:
    El código anterior (ProductCard) muestra productos con su origen como una etiqueta en cada tarjeta.

    Este código (FilterOrigin) es el encargado de proporcionar la funcionalidad de filtrado por origen. Al seleccionar un origen, actualiza el estado (a través de setFilterOrigin), que probablemente afecta la lista de productos renderizados, incluida la información mostrada en ProductCard.

    Datos compartidos:

    Ambos códigos manejan el atributo origin de los productos.

    FilterOrigin determina qué productos con un origin específico serán visibles, lo que influye en las tarjetas ProductCard.

    En resumen, FilterOrigin actúa como un filtro, mientras que ProductCard muestra los resultados de ese filtro en forma de tarjetas de productos.
*/

import { useGetProductField } from "@/api/getProductField" //Un hook personalizado para obtener datos relacionados con los campos del producto desde una API.
import { Label } from "@/components/ui/label" //Componente para etiquetar elementos del formulario, probablemente estilizado con TailwindCSS
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group" //Componentes de un grupo de botones de radio que permiten al usuario seleccionar un valor
import { FilterTypes } from "@/types/filters" //Define el tipo esperado para el resultado del hook

//Define las propiedades esperadas del componente FilterOrigin. (Es una función pasada como prop que actualiza el filtro de origen seleccionado.)
type FilterOriginProps = {
    setFilterOrigin: (origin: string) => void
}

const FilterOrigin = (props: FilterOriginProps) => {
    const {setFilterOrigin} = props; //Se extrae de las propiedades pasadas al componente.

    /*result: Contiene los datos obtenidos de la API, incluidos los orígenes 
      loading: Indica si los datos aún se están cargando.
    */
    const {result, loading}: FilterTypes = useGetProductField()

    return(
        <div className="my-5">
            <p className="mb-3 font-bold">Origen</p>
            {loading && result === null && (
                <p>Cargando Origen ... </p>
            )}

            {/*RadioGroup: Componente que permite seleccionar uno de varios valores. Su evento onValueChange llama a setFilterOrigin para actualizar el filtro. */}
            <RadioGroup onValueChange={(value) => setFilterOrigin(value)}>
                
                {/*Si result contiene datos, extrae una lista de orígenes (enum) y los mapea para renderizar cada uno como: */}
                {result !== null && result.schema.attributes.origin.enum.map((origin: string) => (
                    <div key={origin} className="flex items-center space-x-2">
                        <RadioGroupItem value={origin} id={origin} />
                        <Label htmlFor={origin}>{origin}</Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    )
}

export default FilterOrigin