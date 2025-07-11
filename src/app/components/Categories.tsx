"use client";

import { useMemo } from "react";
import { ProductProps } from "../cms";
import MaterialIcon from "../components/MaterialIcon";

interface CategoriesProps {
  selectedCategory: string | null;
  setSelectedCategory: any;
  products?: ProductProps[];
}

type CategoriesArrayProps =
  | undefined
  | Array<{ nombre: string; icono: string }>;

export default function Categories({
  selectedCategory,
  setSelectedCategory,
  products,
}: CategoriesProps) {
  const categories: CategoriesArrayProps = useMemo(() => {
    if (products) {
      const mappedCategories: Array<{ nombre: string; icono: string }> =
        products.map((product) => product.categoria);

      return Array.from(
        new Map(mappedCategories.map((item) => [item.nombre, item])).values()
      );
    }

    return undefined;
  }, [products]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <p className="text-xl text-primary font-semibold">Categorías</p>
        {categories?.map((cat) => (
          <button
            className="flex flex-row gap-2 cursor-pointer"
            onClick={() => setSelectedCategory(cat.nombre)}
            key={cat.nombre}
          >
            <MaterialIcon name={cat.icono} />
            <p className="hover:underline hover:underline-offset-4 hover:decoration-primary">
              {cat.nombre}
            </p>
          </button>
        ))}
      </div>
      {selectedCategory && (
        <div className="flex flex-col w-max gap-2">
          <p className="text-xl text-primary font-semibold">
            Filtros aplicados
          </p>
          <button
            className="flex flex-row items-center gap-2 justify-between py-1 px-3 rounded-lg bg-secondary-opacity cursor-pointer w-fit"
            onClick={() => setSelectedCategory(null)}
          >
            <MaterialIcon name="close" fontSize={16} />
            {selectedCategory}
          </button>
        </div>
      )}
    </div>
  );
}
