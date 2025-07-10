"use client";
import { useIsVisible } from "@/app/hooks/useIsVIsible";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { BannerProps } from "./Banner";
import BannerContent from "./BannerContent";

export default function BannerProductos({
  pretitulo,
  subtitulo,
  titulo,
  boton,
  imagenCollection,
}: BannerProps) {
  const ref = useRef(null);
  const isVisible = useIsVisible(ref);

  return (
    <div
      ref={ref}
      className={clsx(
        "flex flex-col bg-white gap-8 w-full grow py-10 items-center justify-center relative",
        `transition-opacity ease-in duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`
      )}
    >
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffb77040"
            d="
              M0,64
              C 120,160 360,-32 720,96
              C 1080,224 1320,0 1440,64
              L 1440,320
              C 1320,224 1080,352 720,224
              C 360,96 120,320 0,256
              Z
            "
          />
        </svg>
      </div>

      <BannerContent
        pretitulo={pretitulo}
        titulo={titulo}
        subtitulo={subtitulo}
        boton={boton}
        centered
      />
      <div className="grid grid-cols-4 gap-4">
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
