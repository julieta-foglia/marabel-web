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
    <div className="font-[family-name:var(--font-nunito)] pt-10 flex flex-col relative h-[100vh]">
      <p className="text-4xl font-medium border-b border-b-gray-300 pb-4 text-grey-primary mx-20">
        Productos
      </p>
      <div className="font-[family-name:var(--font-nunito)] flex flex-row gap-10 pt-8 px-20 z-10">
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

        <div className="grid grid-cols-4 gap-2 z-10">
          {mappedProducts?.map((product) => (
            <Link
              href={`/productos/${product.titulo.replaceAll(" ", "-")}`}
              className="bg-white m-2 rounded-lg p-2 shadow-md flex flex-col items-center justify-between text-center transition-all ease-in hover:scale-105 min-h-44"
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
      <div className="absolute bottom-10 w-full overflow-hidden">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffb77040"
            d="
              M0,64
              C 120,160 360,-32 720,96
              C 1080,224 1320,0 1440,64
              L 1440,320
              C 1320,224 1080,352 720,224
              C 360,96 120,320 0,256
              Z
            "
          />
        </svg>
      </div>
    </div>
  );
}
