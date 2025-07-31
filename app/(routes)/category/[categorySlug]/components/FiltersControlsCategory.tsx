/*
    AUTOR: HEFACARI
    FECHA: 10/05/2025
    DESCRIPCION: Este archivo tiene informacion sobre la descripcion de abajo de la categorias y es el papa y usa al archivo FilterOrigin.tsx
    
    RELACION CON FilterOrigin:
    Relación directa.

    - FiltersControlsCategory es el componente padre que encapsula FilterOrigin. Esto está indicado explícitamente en el encabezado del archivo y en el código.

    - Función de setFilterOrigin: Es pasada desde FiltersControlsCategory hacia FilterOrigin para manejar la lógica de filtrado. 

    RELACION CON ProductCard:
    Relación indirecta.

    - FilterOrigin filtra los productos según su atributo origin.

    - Los resultados de este filtro probablemente se reflejan en la lista de productos que incluye las tarjetas ProductCard. Aunque no hay un enlace explícito en este archivo, FiltersControlsCategory forma parte del flujo de filtrado que influye en lo que muestra ProductCard.
*/

import FilterOrigin from "./FilterOrigin"
import FilterTaste from "./FilterTaste"

type FiltersControlsCategoryProps = {
    setFilterOrigin: (origin: string) => void //setFilterOrigin: Define las propiedades que el componente espera recibir.
    
    setFilterTaste: (taste: string) => void //setFilterTaste: Define las propiedades que el componente espera recibir.
}


const FiltersControlsCategory = (props: FiltersControlsCategoryProps) => {
    const {setFilterOrigin} = props
    const {setFilterTaste} = props
    
    //Extrae setFilterOrigin de las propiedades recibidas.
    /*setFilterOrigin: Se pasa como prop hacia FilterOrigin.
    Esto permite que el componente hijo (FilterOrigin) maneje los eventos relacionados con la selección del origen y comunique esa información al componente padre (FiltersControlsCategory) o a un nivel aún más alto.*/
    return(
        <div className="sm:w-[350px] sm:mt-5 p-6">
            <FilterOrigin setFilterOrigin={setFilterOrigin} />
            <FilterTaste setFilterTaste={setFilterTaste} />
        </div>
    )
}

export default FiltersControlsCategory