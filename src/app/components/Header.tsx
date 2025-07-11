import Image from "next/image";
import Link from "next/link";
import { categoryQuery, imageFileQuery } from "../cms/constants";
import { getQuery } from "../cms/getQuery";
import HeaderMenu from "./HeaderMenu";
import ProductsMenu from "./ProductsMenu/ProductsMenu";

interface QueryResponse {
  assetCollection: {
    items: Array<any>;
  };
}

interface CategoryQueryResponse {
  categoriaCollection: {
    items: Array<any>;
  };
}

export default async function Header() {
  const query = imageFileQuery("logo");
  const data = await getQuery<QueryResponse>({ query });
  const [asset] = data.data.assetCollection.items;

  const categoryData = await getQuery<CategoryQueryResponse>({
    query: categoryQuery,
  });
  const categories = categoryData.data.categoriaCollection.items;

  return (
    <header className="bg-white px-4 md:px-10 py-3 md:py-5 shadow-2xs font-[family-name:var(--font-raleway)] flex flex-row items-center justify-between">
      <Link href="/">
        <Image
          src={asset?.url}
          width={100}
          height={100}
          alt="logo marabel"
          className="w-16 h-10 md:w-full md:h-full"
        />
      </Link>
      <HeaderMenu categories={categories} />

      <ol className="flex-row gap-5 font-semibold text-shadow-grey-primary text-lg hidden md:flex">
        <ProductsMenu categories={categories} />
        <Link
          href="/contacto"
          className="hover:text-accent hover:scale-110 transition-all ease-in"
        >
          Contacto
        </Link>
      </ol>
    </header>
  );
}
