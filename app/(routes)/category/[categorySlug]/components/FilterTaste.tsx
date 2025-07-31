/*
    AUTOR: HEFACARI
    FECHA: 15/05/2025
    DESCRIPCION: - Este archivo muestra los taste de la apliacion
    - Este archivo sera el encargado de llevar el filtrado de la pagina
    - Este archivo se encarga de mostrar los "taste" (gustos) de los productos y permite filtrar la lista basada en ese criterio
    - Actúa como un filtro que interactúa con el estado de la aplicación para filtrar productos
    
    RELACION: - Este archivo esta relacionado con getProductFieldTaste 
    Relación con el código ProductCard
    Conexión funcional:
    El código (ProductCard) muestra productos con su origen como una etiqueta en cada tarjeta.

    Este código (FilterTaste) es el encargado de proporcionar la funcionalidad de filtrado por taste. Al seleccionar un taste, actualiza el estado (a través de setFilterTaste), que probablemente afecta la lista de productos renderizados, incluida la información mostrada en ProductCard.

    Datos compartidos:

    Ambos códigos manejan el atributo origin de los productos.

    FilterTaste determina qué productos con un taste específico serán visibles, lo que influye en las tarjetas ProductCard.

    En resumen, FilterTaste actúa como un filtro, mientras que ProductCard muestra los resultados de ese filtro en forma de tarjetas de productos.
*/

import { useGetProductFieldTaste } from "@/api/getProductFieldTaste" //Un hook personalizado para obtener datos relacionados con los campos del producto desde una API.
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FilterTasteTypes } from "@/types/filtersTaste"
import { Label } from "@radix-ui/react-label"

type FilterTasteProps = {
    setFilterTaste: (taste:string) => void
}

const FilterTaste = (props: FilterTasteProps) => {
    const {setFilterTaste} = props //Se extrae de las propiedades pasadas al componente.

    /*result: Contiene los datos obtenidos de la API, incluidos los orígenes 
      loading: Indica si los datos aún se están cargando.
    */
    const {result, loading}: FilterTasteTypes = useGetProductFieldTaste()

    return(
        <div className="my-5">
            <p className="mb-3 font-bold">Taste</p>
            {loading && result === null && (
                <p>Cargando Taste ... </p>
            )}

            {/*RadioGroup: Componente que permite seleccionar uno de varios valores. Su evento onValueChange llama a setFilterOrigin para actualizar el filtro. */}
            <RadioGroup onValueChange={(value) => setFilterTaste(value)}>

            {/*Si result contiene datos, extrae una lista de orígenes (enum) y los mapea para renderizar cada uno como: */}
            {result !== null && result.schema.attributes.taste.enum.map
            ((taste:string) => (
                <div key={taste} className="flex items-center space-x-2">
                    <RadioGroupItem value={taste} id={taste}/>
                    <Label htmlFor={taste}>{taste}</Label>
                </div>
            ))}
            </RadioGroup>
        </div>
    )
}

export default FilterTaste