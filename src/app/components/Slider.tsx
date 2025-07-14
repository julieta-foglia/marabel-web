"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface SlideProps {
  id: number;
  image: string;
}

interface SliderProps {
  slides: Array<SlideProps>;
}

export default function Slider({ slides }: SliderProps) {
  return (
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
      {slides.map((slide: SlideProps) => (
        <SwiperSlide key={slide.id}>
          <div
            className="w-full h-[200px] lg:h-[400px] bg-center flex items-center justify-center text-white bg-cover"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
