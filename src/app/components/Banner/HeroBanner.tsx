import clsx from "clsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { bannerQuery } from "../../cms/constants";
import { getQuery } from "../../cms/getQuery";
import Slider from "../Slider";

interface ItemProps {
  url: string;
}

interface HeroBannerProps {
  title: string;
}

interface BannerQueryResponse {
  bannerCollection: {
    items: Array<any>;
  };
}

export default async function HeroBanner({ title }: HeroBannerProps) {
  const query = bannerQuery(title);
  const data = await getQuery<BannerQueryResponse>({ query });
  const [banner] = data.data.bannerCollection.items;

  const Slides = banner?.archivosCollection?.items.map(
    (item: ItemProps, index: number) => {
      return { id: index, image: item.url };
    }
  );

  if (!banner) {
    return <div className="w-full h-[200px] md:h-[600px]"></div>;
  }

  return (
    <div className={clsx("w-full h-[200px] md:h-[400px]")}>
      <Slider slides={Slides} />
    </div>
  );
}
