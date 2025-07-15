"use client";

import { useSearchParams } from "next/navigation";
import { useQueryState } from "nuqs";
import { Suspense, useEffect, useMemo } from "react";
import { useGetProducts } from "../cms";
import Categories from "../components/Categories/Categories";
import SelectedCategories from "../components/Categories/SelectedCategories";
import ProductCard from "../components/ProductCard";
import CrossSvg from "../components/Svg/CrossSvg";

export default function Productos() {
  const searchParams = useSearchParams();
  const preSelectedCategory = searchParams
    .get("categoria")
    ?.toLocaleLowerCase();

  const [selectedCategory, setSelectedCategory] = useQueryState("categoria", {
    defaultValue: preSelectedCategory ?? "",
  });

  const { products, getProducts } = useGetProducts();

  useEffect(() => {
    getProducts({ category: "" });
  }, [getProducts]);

  const mappedProducts = useMemo(() => {
    if (!selectedCategory) {
      return products;
    }

    return products?.filter(
      (product) => product.categoria.nombre === selectedCategory
    );
  }, [products, selectedCategory]);

  return (
    <Suspense>
      <div className="pt-10 flex flex-col relative flex-1 mb-6">
        <p className="text-2xl lg:text-4xl font-medium border-b border-b-gray-300 pb-4 text-grey-primary mx-6 lg:mx-20">
          Productos
        </p>
        <div className="flex flex-col lg:flex-row gap-10 pt-8 px-6 lg:px-20 z-10">
          <div className="flex flex-col gap-8">
            <Categories
              products={products}
              setSelectedCategory={setSelectedCategory}
              selectedCategory={selectedCategory}
            />
            {selectedCategory && (
              <SelectedCategories
                setSelectedCategory={setSelectedCategory}
                selectedCategory={selectedCategory}
              />
            )}
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-2 lg:gap-3 z-10 w-full">
            {mappedProducts?.map((product, index) => (
              <ProductCard {...product} key={index} />
            ))}
          </div>
        </div>
        <div className="absolute top-10 w-full overflow-hidden">
          <CrossSvg />
        </div>
      </div>
    </Suspense>
  );
}
