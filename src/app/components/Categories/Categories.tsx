"use client";
import { CategoriesProps, CategoryProps } from "@/app/types";
import clsx from "clsx";
import { useMemo } from "react";
import MaterialIcon from "../MaterialIcon";

type CategoriesArrayProps = undefined | Array<CategoryProps>;

export default function Categories({
  setSelectedCategory,
  products,
  selectedCategory,
}: CategoriesProps) {
  const categories: CategoriesArrayProps = useMemo(() => {
    if (products) {
      const mappedCategories: Array<CategoryProps> = products.map(
        (product) => product.categoria
      );

      return Array.from(
        new Map(mappedCategories.map((item) => [item.nombre, item])).values()
      );
    }

    return undefined;
  }, [products]);

  const orderedCategories: (CategoryProps | undefined)[] | undefined =
    useMemo(() => {
      if (selectedCategory && categories) {
        const selected = categories.find(
          (cat) => cat.nombre === selectedCategory
        );
        const filtered = categories.filter(
          (cat) => cat.nombre !== selectedCategory
        );
        return [selected, ...filtered];
      }

      return categories;
    }, [categories, selectedCategory]);

  return (
    <div>
      <p className="text-sm text-primary font-semibold lg:hidden mb-2">
        Categorías
      </p>
      <div className="flex flex-row lg:flex-col gap-2 items-center justify-between lg:justify-center lg:items-start overflow-x-scroll">
        <p className="hidden lg:flex lg:text-xl text-primary font-semibold">
          Categorías
        </p>
        {orderedCategories?.map((cat) => (
          <button
            className={clsx(
              "flex flex-row  items-center gap-1 lg:gap-2 cursor-pointer border border-secondary lg:border-0 rounded-full lg:rounded-0 p-2 lg:p-0",
              selectedCategory === cat!.nombre
                ? "bg-secondary lg:bg-transparent transition-all ease-in duration-150"
                : "bg-white lg:bg-transparent"
            )}
            onClick={() =>
              setSelectedCategory(
                selectedCategory && selectedCategory === cat!.nombre
                  ? null
                  : cat!.nombre
              )
            }
            key={cat!.nombre}
          >
            <MaterialIcon name={cat!.icono} />
            <p className="hover:underline hover:underline-offset-4 hover:decoration-primary text-xs lg:text-base">
              {cat!.nombre}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
