"use client";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import MaterialIcon from "./MaterialIcon";
import MenuOption from "./ProductsMenu/MenuOption";

interface HeaderMenuProps {
  categories: Array<{ nombre: string; icono: string }>;
}

export default function HeaderMenu({ categories }: HeaderMenuProps) {
  const [showProductsMenu, setShowProductsMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex md:hidden">
      <button onClick={() => setShowMenu(true)}>
        <MaterialIcon name="menu" />
      </button>

      <div
        className={clsx(
          "absolute top-0 right-0 w-[350px] h-screen bg-white z-20 rounded-l-3xl border-l border-l-orange-200 shadow-2xl p-5 transform transition-transform duration-300 ease-in-out",
          showMenu ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button onClick={() => setShowMenu(false)}>
          <MaterialIcon name="close" className="absolute top-4 right-4" />
        </button>
        <ol className="flex flex-col gap-5 text-shadow-grey-primary text-base">
          <div className="relative inline-block z-20 hover:scale-110 transition-all ease-in">
            <div className={clsx("flex flex-row gap-2 relative")}>
              <Link
                href="/productos"
                className="font-semibold"
                onClick={() => setShowMenu(false)}
              >
                Productos
              </Link>
              <button
                onClick={() => setShowProductsMenu((prevProps) => !prevProps)}
              >
                <MaterialIcon
                  name="arrow_back_ios"
                  className={clsx(
                    "absolute font-semibold ml-2 transition-all ease-in",
                    showProductsMenu ? "rotate-90 top-2" : "-rotate-90 top-1"
                  )}
                  fontSize={14}
                />
              </button>
            </div>

            <div
              className={clsx(
                "flex flex-col text-md transition-all ease-in-out duration-300 overflow-hidden",
                showProductsMenu ? "max-h-96" : "max-h-0"
              )}
            >
              {categories.map((item) => (
                <MenuOption
                  {...item}
                  key={item.nombre}
                  onClick={() => setShowMenu(false)}
                />
              ))}
            </div>
          </div>
          <Link
            href="/contacto"
            className="font-semibold"
            onClick={() => setShowMenu(false)}
          >
            Contacto
          </Link>
        </ol>
      </div>
    </div>
  );
}
