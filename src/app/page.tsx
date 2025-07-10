import { pageQuery } from "./cms/constants";
import { getQuery } from "./cms/getQuery";
import Banner, { BannerProps } from "./components/Banner/Banner";
import HeroBanner from "./components/Banner/HeroBanner";

interface QueryResponse {
  paginaCollection: {
    items: Array<any>;
  };
}

export default async function Home() {
  const query = pageQuery("Home");
  const data = await getQuery<QueryResponse>({ query });
  const [page] = data.data.paginaCollection.items;

  return (
    <div className="font-[family-name:var(--font-nunito)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <HeroBanner title="hero" />
        <div className="flex flex-col gap-6 items-center justify-center w-full">
          {page.bannerCollection.items.map((banner: BannerProps) => (
            <Banner key={banner.titulo} {...banner} />
          ))}
        </div>
      </main>
    </div>
  );
}
