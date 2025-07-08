"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import MenuOption, { MenuOptionProps } from "./MenuOption";

const PRODUCTS = [
  { text: "Difusores", icon: "air_freshener" },
  { text: "Fragancias", icon: "fragrance" },
  { text: "Aroma system", icon: "air_purifier_gen" },
  { text: "Perfumería", icon: "soap" },
  { text: "Limpieza", icon: "cleaning" },
];

interface ProductsMenuProps {
  categories: Array<MenuOptionProps>;
}

export default function ProductsMenu({ categories }: ProductsMenuProps) {
  const menuRef = useRef(null);
  const [showProductsMenu, setShowProductsMenu] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShowProductsMenu(true)}
      onMouseLeave={() => setShowProductsMenu(false)}
    >
      <Link href="/productos">Productos</Link>
      {showProductsMenu && (
        <div
          ref={menuRef}
          className="flex flex-col w-[250px] absolute top-8 right-0 bg-white z-10 shadow-md rounded-lg text-grey-secondary text-md border border-secondary-opacity"
        >
          {categories.map((item) => (
            <MenuOption {...item} key={item.nombre} />
          ))}
        </div>
      )}
    </div>
  );
}
