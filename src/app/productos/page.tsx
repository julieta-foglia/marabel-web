"use client";

import { useSearchParams } from "next/navigation";
import { useQueryState } from "nuqs";
import { useEffect, useMemo } from "react";
import { useGetProducts } from "../cms";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import CrossSvg from "../components/Svg/CrossSvg";

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

  const mappedProducts = useMemo(() => {
    if (!selectedCategory) {
      return products;
    }

    return products?.filter(
      (product) => product.categoria.nombre === selectedCategory
    );
  }, [products, selectedCategory]);

  return (
    <div className="pt-10 flex flex-col relative flex-1 mb-6">
      <p className="text-4xl font-medium border-b border-b-gray-300 pb-4 text-grey-primary mx-8 md:mx-20">
        Productos
      </p>
      <div className="flex flex-col md:flex-row gap-10 pt-8 px-6 md:px-20 z-10">
        <Categories
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
          products={products}
        />

        <div className="flex flex-col md:grid md:grid-cols-4 gap-2 z-10">
          {mappedProducts?.map((product, index) => (
            <ProductCard {...product} key={index} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-10 w-full overflow-hidden">
        <CrossSvg />
      </div>
    </div>
  );
}
