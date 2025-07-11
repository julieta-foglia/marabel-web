import Image from "next/image";
import Link from "next/link";
import { ProductProps } from "../types";

export default function ProductCard(product: ProductProps) {
  return (
    <Link
      href={`/productos/${product.titulo.replaceAll(" ", "-")}`}
      className="bg-white m-2 rounded-lg p-2 shadow-md flex flex-col items-center justify-between text-center transition-all ease-in hover:scale-105 min-h-44 md:min-w-44 hover:border hover:border-secondary"
      key={product.titulo}
    >
      <>
        <Image
          src={product.imagenCollection?.items[0].url}
          height={200}
          width={200}
          alt={product.titulo}
        />
        <p className="font-[family-name:var(--font-raleway)] text-lg font-medium">
          {product.titulo}
        </p>
      </>
    </Link>
  );
}
