export const revalidate = 60;
import { productQuery } from "@/app/cms/constants";
import { getQuery } from "@/app/cms/getQuery";
import Breadcrumb from "@/app/components/Breadcrumb";
import ProductSelection from "@/app/components/ProductSelection";
import { ProductQueryResponse } from "@/app/types";
import Image from "next/image";

export default async function DetalleProducto({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const query = productQuery(decodeURIComponent(id).replaceAll("-", " "));
  const data = await getQuery<ProductQueryResponse>({ query });
  const [product] = data.data.productoCollection.items;

  return (
    <div className="px-8 lg:px-20 pb-16 pt-10 flex flex-col relative">
      <Breadcrumb
        initial={{ title: "Productos", link: "/productos" }}
        title={product.titulo}
      />
      <div className="flex flex-col items-center lg:items-start lg:flex-row gap-10 pt-6">
        <div className="flex flex-col gap-2 w-full lg:max-w-[500px] items-center lg:items-start">
          <Image
            src={product.imagenCollection?.items[0].url}
            height={500}
            width={500}
            alt={product.titulo}
            className="rounded-lg shadow-xl"
          />
        </div>
        <div className="flex flex-col grow">
          <p className="text-3xl text-primary text-center lg:text-left font-semibold font-[family-name:var(--font-raleway)]">
            {product.titulo}
          </p>
          <p className="text-justify text-xl text-grey-primary py-6">
            {product.descripcion}
          </p>
          <p className="font-bold text-2xl pb-4">Características</p>
          {product.caracteristicasCollection.items
            .filter((item) => item !== null)
            .map((item, index) => (
              <div
                key={index}
                className="flex flex-row justify-between gap-2 text-xl text-grey-primary border-t border-t-gray-300 py-4"
              >
                <p className="font-bold">{item.tituloCaracteristica}</p>
                <p>{item.textoCaracteristica}</p>
              </div>
            ))}
          <div className="flex flex-col gap-2 border-t border-t-gray-300 pt-10">
            <p className="font-bold text-2xl pb-4">Realizar pedido</p>
            <ProductSelection
              fragrances={product.fragancias}
              name={product.titulo}
              image={product.imagenCollection?.items[0].url}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
