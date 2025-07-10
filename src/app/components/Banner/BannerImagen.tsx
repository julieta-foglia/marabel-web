"use client";
import { useIsVisible } from "@/app/hooks/useIsVIsible";
import clsx from "clsx";
import Image from "next/image";
import { useRef } from "react";
import { BannerProps } from "./Banner";
import BannerContent from "./BannerContent";

const DISPOSICION: Record<string, string> = {
  "imagen a izquierda": "flex-row",
  "imagen a derecha": "flex-row-reverse",
};

const SVG: Record<string, string> = {
  "imagen a izquierda": "w-[800px] h-[800px] -top-70 -left-30 rotate-180",
  "imagen a derecha": "w-[800px] h-[800px] -top-60 -left-70 ",
};

export default function BannerImagen({
  pretitulo,
  subtitulo,
  titulo,
  disposicion,
  boton,
  archivosCollection,
}: BannerProps) {
  const ref = useRef(null);
  const isVisible = useIsVisible(ref);

  return (
    <div
      ref={ref}
      className={clsx(
        "flex bg-white gap-8 w-[95%] grow px-10 items-center justify-center relative rounded-lg overflow-hidden",
        DISPOSICION[disposicion],
        `transition-opacity ease-in duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`
      )}
    >
      <Image
        src={archivosCollection.items[0].url}
        alt={titulo}
        width={400}
        height={400}
        className="z-10 rounded-lg"
      />
      <div className="relative">
        <svg
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
          width={400}
          height={400}
          preserveAspectRatio="xMidYMid meet"
          className={clsx("absolute", SVG[disposicion])}
        >
          <path
            fill="#ffb77040"
            d="
      M70,200
      C100,100 180,60 250,100
      C320,140 350,220 300,300
      C260,370 160,380 100,320
      C40,260 40,280 70,200
      Z
    "
          />
        </svg>

        <div className="relative z-10">
          <BannerContent
            pretitulo={pretitulo}
            titulo={titulo}
            subtitulo={subtitulo}
            boton={boton}
          />
        </div>
      </div>
    </div>
  );
}
