/*Uso común: Crear botones con iconos para acciones como añadir, eliminar, o compartir.*/

import { cn } from "@/lib/utils"

interface IconButtonProps {
    onClick: () => void,
    icon:React.ReactElement
    className?: string
}

const IconButton = (props:IconButtonProps) =>{
    const {onClick, icon, className} = props

    return(
        <button
            onClick={onClick} // Llama a la función pasada en `onClick` cuando el botón es clicado.
            className={cn(    // Combina clases predeterminadas con las opcionales proporcionadas en `className`.
                "rounded-full flex items-center bg-white, border shadow-md hover:scale-110 transition",
                className
            )}
        >
            {icon}
        </button>

    )
}

export default IconButton