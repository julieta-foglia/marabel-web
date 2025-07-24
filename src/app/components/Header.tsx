import Image from "next/image";
import Link from "next/link";
import { categoryQuery, imageFileQuery } from "../cms/constants";
import { getQuery } from "../cms/getQuery";
import { AssetQueryResponse, CategoryQueryResponse } from "../types";
import CartMenu from "./CartMenu/CartMenu";
import HeaderMenu from "./HeaderMenu";
import ProductsMenu from "./ProductsMenu/ProductsMenu";

export default async function Header() {
  const query = imageFileQuery("logo");
  const data = await getQuery<AssetQueryResponse>({ query });
  const [asset] = data.data.assetCollection.items;

  const categoryData = await getQuery<CategoryQueryResponse>({
    query: categoryQuery,
  });
  const categories = categoryData.data.categoriaCollection.items;

  return (
    <header className="bg-white px-4 lg:px-10 py-3 lg:py-5 shadow-2xs font-[family-name:var(--font-raleway)] flex flex-row items-center justify-between">
      <Link href="/">
        <Image
          src={asset?.url}
          width={100}
          height={100}
          alt="logo marabel"
          className="w-16 h-10 lg:w-full lg:h-full"
        />
      </Link>
      <HeaderMenu categories={categories} />

      <ol className="flex-row gap-5 font-semibold text-shadow-grey-primary text-lg hidden lg:flex">
        <ProductsMenu categories={categories} />
        <Link href="/fragancias" className="px-2 hover:font-bold w-24">
          Fragancias
        </Link>
        <Link href="/contacto" className="px-2 hover:font-bold w-24">
          Contacto
        </Link>
        <CartMenu />
      </ol>
    </header>
  );
}
