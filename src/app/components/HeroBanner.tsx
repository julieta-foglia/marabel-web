"use client";
import { useEffect, useMemo } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetBanner } from "../cms";

interface SlideProps {
  id: number;
  image: string;
}

interface ItemProps {
  url: string;
}

export default function HeroBanner() {
  const { getBanner, banner } = useGetBanner();

  useEffect(() => {
    getBanner({ title: "hero" });
  }, []);

  const Slides = useMemo(() => {
    return banner?.archivosCollection?.items.map(
      (item: ItemProps, index: number) => {
        return { id: index, image: item.url };
      }
    );
  }, [banner]);

  if (!banner) {
    return null;
  }

  return (
    <div className="w-full h-[600px]">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation
        autoplay={true}
        loop
        className="h-full"
        pagination={{
          dynamicBullets: true,
        }}
      >
        {Slides.map((slide: SlideProps) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-[600px] bg-center flex items-center justify-center text-white"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
