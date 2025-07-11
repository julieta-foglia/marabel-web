"use client";
import { useIsVisible } from "@/app/hooks/useIsVIsible";
import { BannerProps } from "@/app/types";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import CrossSvg from "../Svg/CrossSvg";
import BannerContent from "./BannerContent";

export default function BannerProductos({
  pretitulo,
  subtitulo,
  titulo,
  boton,
  imagenCollection,
}: BannerProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useIsVisible(ref);

  return (
    <div
      ref={ref}
      className={clsx(
        "flex flex-col bg-white gap-8 w-full grow py-10 px-10 md:px-0 items-center justify-center relative",
        `transition-opacity ease-in duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`
      )}
    >
      <div className="absolute inset-0 overflow-hidden">
        <CrossSvg />
      </div>

      <BannerContent
        pretitulo={pretitulo}
        titulo={titulo}
        subtitulo={subtitulo}
        boton={boton}
        centered
      />
      <div className="grid grid-cols-2 md:grid-cols-4 md:gap-4">
        {imagenCollection.items?.map((product) => (
          <Link
            href={product.link}
            className={clsx(
              "bg-white cursor-box zoom-in-neutral m-2 rounded-lg p-2 shadow-lg flex flex-col items-center justify-between text-center",
              "border border-orange-200"
            )}
            key={product.titulo}
          >
            <Image
              src={product.archivo.url}
              height={200}
              width={200}
              alt={product.titulo}
              className="rounded-lg"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
