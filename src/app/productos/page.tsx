"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useQueryState } from "nuqs";
import { useEffect, useMemo } from "react";
import { useGetProducts } from "../cms";
import MaterialIcon from "../components/MaterialIcon";

export default function Productos() {
  const searchParams = useSearchParams();
  const preSelectedCategory = searchParams
    .get("categoria")
    ?.toLocaleLowerCase();

  const [selectedCategory, setSelectedCategory] = useQueryState("categoria");

  const { products, getProducts } = useGetProducts();

  useEffect(() => {
    if (preSelectedCategory) {
      setSelectedCategory(preSelectedCategory);
    }
  }, [preSelectedCategory]);

  useEffect(() => {
    getProducts({ category: "" });
  }, []);

  const categories = useMemo(() => {
    if (products) {
      const mappedCategories = products.map((product) => product.categoria);

      return Array.from(
        new Map(mappedCategories.map((item) => [item.nombre, item])).values()
      );
    }
  }, [products]);

  const mappedProducts = useMemo(() => {
    if (!selectedCategory) {
      return products;
    }

    return products?.filter(
      (product) => product.categoria.nombre === selectedCategory
    );
  }, [products, selectedCategory]);

  return (
    <div className="font-[family-name:var(--font-nunito)] px-20 pb-20 pt-10 flex flex-col">
      <p className="text-4xl font-medium border-b border-b-gray-300 pb-4 text-grey-primary">
        Productos
      </p>
      <div className="font-[family-name:var(--font-nunito)] flex flex-row gap-10 pt-8">
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
                <p>{cat.nombre}</p>
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
                <MaterialIcon name="close" />
                {selectedCategory}
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-4 ">
          {mappedProducts?.map((product) => (
            <Link
              href={`/productos/${product.titulo.replaceAll(" ", "-")}`}
              className="bg-white m-2 rounded-lg p-2 shadow-md flex flex-col items-center justify-between text-center"
              key={product.titulo}
            >
              <>
                <Image
                  src={product.imagenCollection?.items[0].url}
                  height={100}
                  width={100}
                  alt={product.titulo}
                />
                <p className="font-[family-name:var(--font-raleway)] text-lg font-medium">
                  {product.titulo}
                </p>
              </>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
