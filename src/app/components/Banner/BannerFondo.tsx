"use client";
import { useIsVisible } from "@/app/hooks/useIsVIsible";
import { BannerProps } from "@/app/types";
import clsx from "clsx";
import { useRef } from "react";
import BannerContent from "./BannerContent";

export default function BannerFondo({
  pretitulo,
  subtitulo,
  titulo,
  boton,
  archivosCollection,
}: BannerProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useIsVisible(ref);
  const imageUrl = archivosCollection.items[0].url;

  return (
    <div
      ref={ref}
      className={clsx(
        "h-96 bg-center bg-cover flex items-center justify-center text-white w-[95%] rounded-lg bg-no-repeat",
        `transition-opacity ease-in duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`
      )}
      style={{
        backgroundImage: `
        linear-gradient(white 0%,
          white 50%,
          rgba(0, 0, 0, 0.6) 100%),
        url(${imageUrl})
      `,
      }}
    >
      <BannerContent
        pretitulo={pretitulo}
        titulo={titulo}
        subtitulo={subtitulo}
        boton={boton}
        centered
        dark
      />
    </div>
  );
}
