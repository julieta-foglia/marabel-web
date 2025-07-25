"use client";
import { useIsVisible } from "@/app/hooks/useIsVIsible";
import { BannerProps } from "@/app/types";
import clsx from "clsx";
import Image from "next/image";
import { useRef } from "react";
import { OrganicSvg } from "../Svg/OrganicSvg";
import BannerContent from "./BannerContent";

const DISPOSICION: Record<string, string> = {
  "imagen a izquierda": "flex-col lg:flex-row",
  "imagen a derecha": "flex-col-reverse pt-4 lg:pt-0 lg:flex-row-reverse",
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
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useIsVisible(ref);

  return (
    <div
      ref={ref}
      className={clsx(
        "flex bg-white gap-8 w-[95%] grow px-10 min-h-[440px] items-center justify-center relative rounded-lg overflow-hidden",
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
        <OrganicSvg className={SVG[disposicion]} />
        <div className={clsx("relative z-10")}>
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
