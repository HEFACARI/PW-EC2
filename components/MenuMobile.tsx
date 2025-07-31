import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import { Menu } from "lucide-react"
import Link from "next/link"

const MenuMobile = () =>{
    return(
        <Popover>
            <PopoverTrigger>
                <Menu/>
            </PopoverTrigger>
            <PopoverContent>
                <Link href="/categories/PC-GAMER" className="block">PC Gamer</Link>
                <Link href="/categories/laptop-versatil" className="block">Laptop Versatil</Link>
                <Link href="/categories/laptop-gamer" className="block">Laptop Gamer</Link>
                <Link href="/categories/teclado" className="block">Teclado</Link>
                <Link href="/categories/raton" className="block">Raton</Link>
            </PopoverContent>
        </Popover>
    )
}

export default MenuMobile