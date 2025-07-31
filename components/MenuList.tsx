"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

/*ABREME */
const MenuList = () => {
  return (
    <NavigationMenu>

      <NavigationMenuList>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre nosotros</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        HEFACARI-COMPUTER
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                          Sumergete en el apasionante mundo de la tecnologia con nuestra WEB
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/shop" title="Tienda">
                  Accede a toda tu informacion, tus pedidos y mucho mas
                </ListItem>
                <ListItem href="/offers" title="Ofertas">
                  Seccion dedicada a promociones y descuentos especiales
                </ListItem>
                <ListItem href="/" title="Accesorios">
                  Productos extras como cables todo tipo, USBs, SIMCARD
                </ListItem>
              </ul>
            </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Productos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/accesorios" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Accesorios
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

      </NavigationMenuList>

    </NavigationMenu>
  )
}

export default MenuList

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Laptop Gamer",
    href: "/category/laptopGamer",
    description:
      "Laptop Gamer muy potente para que puedas jugar a tus videojuegos favoritos",
  },
  {
    title: "Laptop HP",
    href: "/category/laptopHP",
    description:
      "Laptop versatil para todo tipo de uso, desde ofimatica, tareas del colegio o U, hasta juegos de poca demanda",
  },
  {
    title: "Mouse Vertical Ergonomico",
    href: "/category/Mouse",
    description:
      "Excelente mouse vertical para trabajar todo el dia gracias a su gran comodidad y durabilidad.",
  },
  {
    title: "Teclado Mecanico Kumara",
    href: "/category/Teclado",
    description: "El mejor teclado mecanico calidad-precio del mercado, no busque mas.",
  },
  {
    title: "Camara para PC",
    href: "/category/Camara para PC",
    description:
      "Si tu pc no tiene camara y necesitas una para tus videoconferencias, esta es la mejor opcion barata del mercado",
  },
]

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"


