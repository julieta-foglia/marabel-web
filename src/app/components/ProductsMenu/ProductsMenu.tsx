"use client";
import { MenuOptionProps } from "@/app/types";
import Link from "next/link";
import { useRef, useState } from "react";
import MenuOption from "./MenuOption";

interface ProductsMenuProps {
  categories: Array<MenuOptionProps>;
}

export default function ProductsMenu({ categories }: ProductsMenuProps) {
  const menuRef = useRef(null);
  const [showProductsMenu, setShowProductsMenu] = useState(false);

  return (
    <div
      className="relative inline-block z-20 w-24"
      onMouseEnter={() => setShowProductsMenu(true)}
      onMouseLeave={() => setShowProductsMenu(false)}
    >
      <Link href="/productos" className="px-2 hover:font-bold ">
        Productos
      </Link>
      {showProductsMenu && (
        <div
          ref={menuRef}
          className="flex flex-col w-[250px] absolute top-6 right-0 bg-white z-10 shadow-md rounded-lg text-grey-secondary text-md border border-secondary-opacity"
        >
          {categories.map((item) => (
            <MenuOption {...item} key={item.nombre} />
          ))}
        </div>
      )}
    </div>
  );
}
