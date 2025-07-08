import Image from "next/image";
import Link from "next/link";
import { categoryQuery, imageFileQuery } from "../cms/constants";
import { getQuery } from "../cms/getQuery";
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
    <header className="bg-white px-10 py-5 shadow-2xs font-[family-name:var(--font-raleway)] flex flex-row items-center justify-between">
      <Link href="/">
        <Image src={asset?.url} width={100} height={100} alt="logo marabel" />
      </Link>
      <ol className="flex flex-row gap-5 font-semibold text-shadow-grey-primary text-lg">
        <ProductsMenu categories={categories} />
        <Link href="/contacto">Contacto</Link>
      </ol>
    </header>
  );
}
