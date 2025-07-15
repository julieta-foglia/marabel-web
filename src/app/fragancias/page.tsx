export const revalidate = 60;
import { pageQuery } from "../cms/constants";
import { getQuery } from "../cms/getQuery";
import Banner from "../components/Banner/Banner";
import HeroBanner from "../components/Banner/HeroBanner";
import { BannerProps, PageQueryResponse } from "../types";

export default async function Fragancias() {
  const query = pageQuery("Fragancias");
  const data = await getQuery<PageQueryResponse>({ query });
  const [page] = data.data.paginaCollection.items;

  if (!page) {
    return null;
  }

  return (
    <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start mb-4">
      <HeroBanner title="fragancias" />
      <div className="flex flex-col gap-6 items-center justify-center w-full">
        {page.bannerCollection.items.map((banner: BannerProps) => (
          <Banner key={banner.titulo} {...banner} />
        ))}
      </div>
    </div>
  );
}
